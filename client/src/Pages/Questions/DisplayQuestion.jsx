import React from 'react'
import LeftSidebar from '../../Components/Leftsidebar/LeftSidebar'
import RightSidebar from '../../Components/Rightsidebar/RightSidebar'
import QuestionDetails from './QuestionDetails'
import "../../App.css"
const DisplayQuestion = () => {
  return (
    <div className='home-container-1'>
    <LeftSidebar/>
    <div className='home-container-4'>
    <QuestionDetails/>
</div>
 <div className='home-container-2'>
 <RightSidebar/>
 </div>
 </div>
  )
}

export default DisplayQuestion