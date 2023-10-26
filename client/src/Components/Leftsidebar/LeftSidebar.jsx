import React from 'react'
import { NavLink } from 'react-router-dom'
import Globe from "../../assets/icons8-globe-32.png"
import "./LeftSidebar.css"
const Leftsidebar = () => {
  return (
    <div className='left-sidebar'>
     <nav className='side-nav'>
       <NavLink to="/" className="side-nav-links" activeClassName="active"><p>Home</p></NavLink>
       <div className='side-nav-div'>
        <div><p>PUBLIC</p></div>
        <NavLink to="/Questions" className="side-nav-links" activeClassName="active">
            <img src={Globe} style={{width: "25px"}} alt='Globe'></img>
            <p style={{paddingLeft:"10px"}}>Questions</p>
        </NavLink>
        <NavLink to="/Tags" style={{paddingLeft:"40px"}}  className="side-nav-links" activeClassName="active" >
            <p>Tags</p>
        </NavLink>
        <NavLink to="/Users" style={{paddingLeft:"40px"}}  className="side-nav-links" activeClassName="active" >
            <p>Users</p>
        </NavLink>
     </div>
     </nav>
     
    </div>
  )
}

export default Leftsidebar