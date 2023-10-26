import React from 'react'
import { useLocation } from 'react-router-dom'
import Leftsidebar from '../../Components/Leftsidebar/LeftSidebar'
import "./Users.css"
import UsersList from "./UsersList"
const Users = () => {
  const location=useLocation();
  //console.log(location);
  return (
    <div className='home-container-5'>
        <Leftsidebar/>
        <div className='home-container-4' style={{marginTop:"30px"}}>
        <h1 style={{fontWeight:"400"}}>Users</h1>
         <UsersList/>
        </div>
    </div>
  )
}

export default Users