import React from 'react'
import "./Homemainbar.css"
import {Link,useLocation,useNavigate} from "react-router-dom"
import Questions from "./Questions.jsx"
import {useSelector} from "react-redux"
import QuestionList from "./QuestionList.jsx"
const Homemainbar = () => {
  const User=123;
  const navigate=useNavigate();
  const isAuth=()=>{
    {
      if(User===null){
        alert("Log in  or signup to ask a question");
        navigate("/Auth");
      }  
      else
      {
        navigate("/AskQuestion");
      }
    }
}

const questionsList=useSelector(state=>state.questionsReducer);
//console.log(questionsList);
  // var questionsList=[{
  //   id:1,
  //   upVotes:3,
  //   downVotes:2,
  //   numberOfAnswers:2,
  //   questionTitle: "What is a function?",
  //   questionBody: "It meant to be",
  //   questionTags:["java","nodejs","reactjs","mongodb"],
  //   userPosted:"Sahdev",
  //   userId:1,
  //   askedOn:"12 July 2023",
  //   answer:[{
  //     answerBody:"Answer",
  //     userAnswered:"Kumar",
  //     answeredOn:"Jan 2",
  //     userId:2,
  //   }]
  // },{
  //   id:2,
  //   upVotes:3,
  //   downVotes:2,
  //   numberOfAnswers:0,
  //   questionTitle: "What is a function?",
  //   questionBody: "It meant to be",
  //   questionTags:["java","nodejs","reactjs","mongodb"],
  //   userPosted:"Sahdev",
  //   userId:1,
  //   askedOn:"12 July 2023",
  //   answer:[{
  //     answerBody:"Answer",
  //     userAnswered:"Kumar",
  //     answeredOn:"Jan 2",
  //     userId:2,
  //   }]
  // },{
  //   id:3,
  //   upVotes:3,
  //   downVotes:2,
  //   numberOfAnswers:0,
  //   questionTitle: "What is a function?",
  //   questionBody: "It meant to be",
  //   questionTags:["java","nodejs","reactjs","mongodb"],
  //   userPosted:"Sahdev",
  //   userId:1,
  //   askedOn:"12 July 2023",
  //   answer:[{
  //     answerBody:"Answer",
  //     userAnswered:"Kumar",
  //     answeredOn:"Jan 2",
  //     userId:2,
  //   }]
  // }]
  const location=useLocation();
  return (
    <div className='main-bar'>
      <div className='main-bar-header'>
        {
          location.pathname==='/'?<h1 style={{float:"left"}}>Top Questions</h1>:<h1>All Questions</h1>
        }
        <div><button style={{float:"right",margin:"25px 0px"}} onClick={isAuth} className='ask-btn'>Ask Question</button></div>
      </div>
      <div>
          {
            questionsList.data===null?<h1>Loading...</h1>:<><p>{questionsList.data.length} questions
            </p></>
          }
          <QuestionList questionList={questionsList.data}></QuestionList>
        </div>
    </div>
  )
}

export default Homemainbar;