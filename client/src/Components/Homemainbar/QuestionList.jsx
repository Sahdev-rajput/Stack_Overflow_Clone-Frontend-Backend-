import React from 'react'
import Questions from "./Questions"

const QuestionList = ({questionList}) => {
  return (
    <>
    {
        questionList && questionList.map((question)=>(
               <Questions question={question} key={question._id}></Questions>
              ))   
    }
    </>
  )
}

export default QuestionList