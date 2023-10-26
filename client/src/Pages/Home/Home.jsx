import React from 'react'
import HomeMainbar from '../../Components/Homemainbar/HomeMainbar'
import LeftSidebar from '../../Components/Leftsidebar/LeftSidebar'
import RightSidebar from '../../Components/Rightsidebar/RightSidebar' 
import "../../App.css"
const Home = () => {
  return (
       <div className='home-container-1'>
       <LeftSidebar/>
       <div className='home-container-3'><HomeMainbar/>
</div>
    <div className='home-container-2'>
    <RightSidebar/>
    </div>
    </div>
  )
}

export default Home
