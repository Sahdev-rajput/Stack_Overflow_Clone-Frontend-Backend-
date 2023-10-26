import React, { useState } from 'react'
import Leftsidebar from '../../Components/Leftsidebar/LeftSidebar'
import Avatar from '../../Components/Avatar/Avatar'
import { useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faBirthdayCake,faPen} from "@fortawesome/free-solid-svg-icons"
import moment from "moment"
import EditProfileForm from './EditProfileForm'
import ProfileBio from './ProfileBio'
import LoginHistory from '../LoginHistory/LoginHistory'
import "./UsersProfile.css"
const UserProfile = () => {
    const {id}=useParams();
    const users=useSelector((state)=>state.userReducer);
    const currentProfile=users.filter((user)=>user._id===id)[0]
    const currentUser=useSelector((state)=>state.currentUserReducer)
    const currentHistory=useSelector((state)=>state.authReducer)
    const [Switch,setSwitch]=useState(false);
    const [History,setHistory]=useState(false);
    function handleClick1()
    {
        setSwitch(true);
        setHistory(false);
    }
    function handleClick2()
    {
        setSwitch(false);
        setHistory(true);
    }
    return (
    <div className='home-container-userProfile-1'>
        <Leftsidebar/>
    <div className='home-container-userProfile-2'>
        <section>
        <div className='user-details-container'>
        <div className='user-details'>
            <Avatar backgroundColor="purple" color="white" fontSize="50px" px="40px" py="30px">
            {currentProfile?.name.charAt(0).toUpperCase()}
            </Avatar>
            <div className='user-name'>
                <h1>{currentProfile?.name}</h1>
                <p><FontAwesomeIcon icon={faBirthdayCake}/> Joined {moment(currentProfile?.joinedOn).fromNow()}</p>
            </div>
        </div>
        {
            currentUser?.result._id===id && (
                <div>
                <button type='button' onClick={handleClick1} className='edit-profile-btn'>
                    <FontAwesomeIcon icon={faPen}/> Edit Profile
                </button>
                <button type='button' onClick={handleClick2} className='edit-profile-btn'>
                     Login History
                </button>
                </div>
            )
        }
         </div>
         {
            !Switch && !History?(
                <ProfileBio currentProfile={currentProfile}/>
            )
            :
            (
                <></>
            )
         }
         {
            Switch?(
                <EditProfileForm currentUser={currentUser} setSwitch={setSwitch}/>
            )
            :
            (
                <></>
            )
         }{
            History?(
                <LoginHistory currentHistory={currentUser}/>
            )
            :
            (
                <></>
            )
         }
        </section>
    </div>
    </div>
  )
}

export default UserProfile