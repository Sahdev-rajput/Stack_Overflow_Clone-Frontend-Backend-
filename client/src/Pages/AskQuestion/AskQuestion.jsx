import React,{useState} from 'react'
import {useDispatch,useSelector} from "react-redux"
import {useNavigate} from "react-router-dom"
import "./AskQuestion.css"
import {askQuestion} from "../../actions/question.js"
const AskQuestion = () => {
   const [questionTitle,setQuestionTitle]=useState('')
   const [questionBody,setQuestionBody]=useState('')
   const [questionTags,setQuestionTags]=useState('')

   const dispatch=useDispatch();
   const User=useSelector((state)=>(state.currentUserReducer))
   //console.log(User);
   const navigate=useNavigate();
   const handleSubmit=(e)=>{
    e.preventDefault()
   // console.log({questionTitle,questionBody,questionTags});
    dispatch(askQuestion({questionTitle,questionBody,questionTags,userPosted:User.result.name,userId:User?.result._id},navigate))
   }

   const handleEnter=(e)=>{
    if(e===13)
    {
        setQuestionBody(questionBody+"\n")
    }
   }
  return (
     <div className='ask-question'>
        <div className='ask-ques-container'>
            <h1>Ask a public Question</h1>
            <form onSubmit={handleSubmit}>
                <div className='ask-form-container'>
                    <label htmlFor='ask-ques-title'>
                        <h4>Title</h4>
                        <p>Be specific and imagine you’re asking a question to another person.</p>
                        <input type="text" id="ask-ques-title" onChange={(e)=>{setQuestionTitle(e.target.value)}} placeholder='e.g. Is there an R function for finding the index of an element in a vector?'></input>
                    </label>
                    <label htmlFor='ask-ques-body'>
                        <h4>Body</h4>
                        <p>Introduce the problem and expand on what you put in the title. Minimum 20 characters.</p>
                        <textarea id="ask-ques-body" row="30" cols="30" onChange={(e)=>{setQuestionBody(e.target.value)}} onKeyDown={handleEnter}></textarea>
                    </label>
                    <label htmlFor='ask-ques-tags'>
                        <h4>Tags</h4>
                        <p>Add up to 5 tags to describe what your question is about. Start typing to see suggestions.</p>
                        <input type="text" id="ask-ques-tags" onChange={(e)=>{setQuestionTags(e.target.value.split(" "))}} placeholder='e.g. (css, spring, javascript)'></input>
                    </label>
                </div>
                <input type='submit' value="Review your question" className='review-btn'></input>
            </form>
        </div>
     </div>
  )
}

export default AskQuestion