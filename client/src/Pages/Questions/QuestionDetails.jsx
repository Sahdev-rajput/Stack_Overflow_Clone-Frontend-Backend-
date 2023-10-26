import React,{useState} from 'react'
import { Link, useParams,useNavigate,useLocation } from 'react-router-dom'
import upVote from "../../assets/upvote.svg"
import downVote from "../../assets/downvote.svg"
import Avatar from "../../Components/Avatar/Avatar"
import DisplayAnswers from './DisplayAnswers'
import copy from "copy-to-clipboard"
import {useSelector,useDispatch} from "react-redux"
import moment from "moment"
import "./Questions.css"
import { deleteQuestion,postAnswer,voteQuestion  } from '../../actions/question'
const QuestionDetails = () => {
    const {id}=useParams();
    const Navigate=useNavigate();
    const dispatch=useDispatch();
    const location=useLocation();
    //console.log(location);
    const url='http://localhost:3000'
    //console.log("The id is "+id);
    const questionsList=useSelector(state=>state.questionsReducer);
   //console.log(questionsList.data);
    // var questionsList=[{
    //     id:'1',
    //     upVotes:3,
    //     downVotes:2,
    //     numberOfAnswers:2,
    //     questionTitle: "What is a function?",
    //     questionBody: "It meant to be",
    //     questionTags:["java","nodejs","reactjs","mongodb"],
    //     userPosted:"Sahdev",
    //     userId:1,
    //     askedOn:"12 July 2023",
    //     answer:[{
    //       answerBody:"Answer",
    //       userAnswered:"Kumar",
    //       answeredOn:"Jan 2",
    //       userId:2,
    //     }]
    //   },{
    //     id:'2',
    //     upVotes:3,
    //     downVotes:2,
    //     numberOfAnswers:0,
    //     questionTitle: "What is a function?",
    //     questionBody: "It meant to be",
    //     questionTags:["java","nodejs","reactjs","mongodb"],
    //     userPosted:"Sahdev",
    //     userId:1,
    //     askedOn:"12 July 2023",
    //     answer:[{
    //       answerBody:"Answer",
    //       userAnswered:"Kumar",
    //       answeredOn:"Jan 2",
    //       userId:2,
    //     }]
    //   },{
    //     id:'3',
    //     upVotes:3,
    //     downVotes:2,
    //     numberOfAnswers:0,
    //     questionTitle: "What is a function?",
    //     questionBody: "It meant to be",
    //     questionTags:["java","nodejs","reactjs","mongodb"],
    //     userPosted:"Sahdev",
    //     userId:1,
    //     askedOn:"12 July 2023",
    //     answer:[{
    //       answerBody:"Answer",
    //       userAnswered:"Kumar",
    //       answeredOn:"Jan 2",
    //       userId:2,
    //     }]
    //   }]
    const [Answer,setAnswer]=useState('');
    const User=useSelector((state)=>(state.currentUserReducer))
  const handlePostAns=(e,answerLength)=>{

    e.preventDefault();
  if(User==null)
  {
    alert("Log in or Signup to answer a question")
    Navigate("/Auth");
  }
  else{
     if(Answer===''){
      alert("Enter an answer before Submitting")
     }
     else
     {
    dispatch(postAnswer({id,noOfAnswers:answerLength+1,answerBody:Answer,userAnswered:User.result.name,userId:User.result._id}));
     }
}
}
const handleShare=()=>{
  copy(url+location.pathname);
  alert("Copied url : "+url+location.pathname)
}
const handleDelete=()=>{
  dispatch(deleteQuestion(id,Navigate));
}
const handleUpVote=()=>{
  console.log(id,User.result._id);
  dispatch(voteQuestion(id,'upvote',User.result._id))
}
const handleDownVote=()=>{
  dispatch(voteQuestion(id,'downvote',User.result._id))
}
  return (
    <div className='question-details-page'>
       {
        questionsList.data===null?
        <h1>Loading...</h1>:
        <>
            {
                questionsList.data.filter(question=>question._id===id).map(question=>(
                  <div key={question._id}>
                    <section className='question-details-container'>
                    <h1>{question.questionTitle}</h1>
                    <div className='question-details-container-2'>
                      <div className='question-votes'>
                        <img src={upVote} alt='' width='23' className='votes-icon' onClick={handleUpVote}>
                        </img>
                        <p>{question.upVote.length-question.downVote.length}</p>
                        <img src={downVote} alt='' width='18' className='votes-icon' onClick={handleDownVote}></img>
                      </div>
                      <div style={{width:"100%"}}>
                       <p className='question-body'>{question.questionBody}</p>
                       <div className='question-details-tags'>
                        {
                          question.questionTags.map((tag)=>(
                            <p key={tag}>{tag}</p>
                          ))
                        }
                       </div>
                       <div className='question-actions-user'>
                        <div>
                          <button type='button' onClick={handleShare}>Share</button>
                          {
                             User?.result?._id===question?.userId&&(
                              <button type='button' onClick={handleDelete}>Delete</button>
                             )
                          }
                        </div>
                        <div>
                          <p>asked {moment(question.askedOn).fromNow()}</p>
                          <Link to={`/Users/${question.userId}`} className='user-link' style={{color:"#0086d8"}}>
                            <Avatar backgroundColor="orange" px="8px" py="5px">{question.userPosted.charAt(0).toUpperCase()}</Avatar>
                            <div>
                              {question.userPosted}
                            </div>
                          </Link>
                        </div>
                       </div>
                      </div>
                    </div>
                    </section>
                    {
                      question.noOfAnswers!==0 && (
                        <section>
                          <h3>{question.noOfAnswers} Answers</h3>
                          <DisplayAnswers key={question._id} handleShare={handleShare} question={question}/>
                        </section>
                      )
                    }
                    <section className='post-ans-container'>
        <h3>Your Answers</h3>
        <form onSubmit={(e)=>{handlePostAns(e,question.answer.length)}}>
         <textarea name='' cols="30" rows="10" onChange={e=>setAnswer(e.target.value)}></textarea><br/>
         <input type='submit' className='post-ans-btn' value="Post Your Answer"></input>
        </form>
        <p>
          Browse other Question tagged
          {
            question.questionTags.map((tag)=>(
              <Link to="/Tags" key={tag} className='ans-tags'>{tag}</Link>
            ))
          } or
          <Link to="/AskQuestion" style={{textDecoration:"none",color:"#009dff"}}> ask your own question.</Link>
        </p>
       </section>
                  </div>
                ))
            }
        </>
       }
    </div>
  )
}

export default QuestionDetails