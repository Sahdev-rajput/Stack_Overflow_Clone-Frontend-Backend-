import React,{useEffect} from 'react'
import {Link,useNavigate} from "react-router-dom"
import Avatar from "../../Components/Avatar/Avatar"
import search from "../../assets/magnifying-glass-solid.svg"
import {useSelector,useDispatch} from "react-redux"
import Leftsidebar from '../Leftsidebar/LeftSidebar'
import "./Navbar.css"
import { setCurrentUser } from '../../actions/currentUser'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faBars,faLocationDot} from "@fortawesome/free-solid-svg-icons"
import decode from "jwt-decode"
const Navbar = () => {
    const dispatch=useDispatch();
    var User=useSelector((state)=>(state.currentUserReducer))
    const navigate=useNavigate();

    const handleLogout=()=>{
        dispatch({type:'LOGOUT'})
        navigate("/")
        dispatch(setCurrentUser(null))
    }

    useEffect(()=>{
        const token=User?.token;
        if(token)
        {
            const decodedToken=decode(token);
            if(decodedToken.exp*1000<new DataTransfer().getTime())
            {
                handleLogout();
            }
        }
       dispatch(setCurrentUser(JSON.parse(localStorage.getItem('Profile'))))
    },[dispatch])

  return (
    <nav className='main-nav'>
        <div class="navbar"> 
        <div className='bars-icon'><FontAwesomeIcon icon={faBars}/></div>
        <Link to="/" className='nav-items nav-logo'>
            <img src="https://stackoverflow.design/assets/img/logos/so/logo-stackoverflow.svg" width="135px"></img>
        </Link>
        {/* <Link to="/" class="nav-items nav-btn">
            About
        </Link> */}
        <Link to="/" class="nav-items nav-btn">
            Products
        </Link>
        {/* <Link to="/" class="nav-items nav-btn">
            For Teams
        </Link> */}
        <form>
            <input type="text" placeholder='Search...'/>
            <img src={search} alt="Search" width="18px" className='search-icon'></img>
        </form>
        {
            User=== null?
            <Link to='/Auth' className='nav-items nav-link'>Log in</Link>:
            <>
                <Avatar backgroundColor='#009dff' px="10px" py="7px" borderRadius="50%" color='white'><Link to={`/Users/${User?.result?._id}`} style={{textDecoration:"none",color:'white'}}>{User.result.name.charAt(0).toUpperCase()}</Link></Avatar>
                <button className='nav-items nav-link' onClick={handleLogout}>Log Out</button>
            </>
        }
        </div>
    </nav>
  )
}

export default Navbar