import React,{useCallback, useState,useEffect} from 'react'
import Aboutauth from "./Aboutauth";
import stackLogo from "../../assets/stack-logo.png"
import {useDispatch} from "react-redux"
import {useNavigate} from "react-router-dom"
import { signup,login } from '../../actions/auth';
import "./Auth.css"
const Auth = () => {
    const [issignup,setsignup]=React.useState(false);
    const [name,setName]=useState('');
    const [email,setEmail]=useState('');
    const [password,setPassword]=useState('');
    const [browsers,setBrowser]=useState('');
    const [operating,setOperating]=useState('');
    const [device,setDevice]=useState('');
    const dispatch=useDispatch();
    const navigate=useNavigate();
    const getBrowserName = () => {
        let browserInfo = navigator.userAgent;
        let browser;
        if (browserInfo.includes('Opera') || browserInfo.includes('Opr')) {
          browser = 'Opera';
        } else if (browserInfo.includes('Edg')) {
          browser = 'Edge';
        } else if (browserInfo.includes('Chrome')) {
          browser = 'Chrome';
        } else if (browserInfo.includes('Safari')) {
          browser = 'Safari';
        } else if (browserInfo.includes('Firefox')) {
          browser = 'Firefox'
        } else {
          browser = 'unknown'
        }
          setBrowser(browser);
      }
    
      useEffect(() => {
        getBrowserName();
        getOSName();
        deviceName();
      }, [])
      
      const getOSName=()=>{
        let OS;
        if (window.navigator.userAgent.indexOf("Windows") != -1) {
          OS="Windows";
      } else if (window.navigator.userAgent.indexOf("Mac OS") != -1) {
        OS="Mac OS";
      } else if (window.navigator.userAgent.indexOf("Linux") != -1) {
          OS="Linux";
      } else {
        OS="Cannot be determined";
      }
      setOperating(OS);
      }
    
      const deviceName=()=>{
      const isMobile = window.innerWidth <= 768;
      const isTab=window.innerWidth<=1000;
      const isLaptop=window.innerWidth>=1000;
       if(isMobile)
       {
        setDevice("Mobile Device");
       }
       else if(isTab)
       {
        setDevice("Tab Device");
       }
       else if(isLaptop)
       {
        setDevice("Laptop");
       }
    }
   
   
    function handleSwitch()
    {
        setsignup(!issignup);
    }
    const handleSubmit=(e)=>{
        e.preventDefault();
        if(!email && !password)
        {
            alert("Enter the remaining fields to proceed...");
        }
        if(issignup)
        {
            if(!name)
            {
                alert("Enter your name to continue...");
            }
            dispatch(signup({name,email,password,browsers,operating,device},navigate));
        }
        else
        {
            dispatch(login({email,password,browsers,operating,device},navigate));
        }
        //console.log({name,email,password});
        //console.log("The password is: " + {password});
    }
  return (
    <div>
       <section className='auth-section'>
       {issignup && <Aboutauth/>}
        <div className='auth-container-2'>
            {!issignup && <img src={stackLogo} alt="Stack Overflow" className='login-logo'></img>}
                 <form onSubmit={handleSubmit}>
                 {
                    issignup &&(
                        <label htmlFor='name'>
                            <h4>Display Name</h4>
                            <input type='text' name='name' id='name' onChange={(e)=>{setName(e.target.value)}}/>
                        </label>
                    )
                 }
                    <h4>Email</h4>
                    <label htmlFor='email'>
                        <input type='email' name='email' id='email' onChange={(e)=>{setEmail(e.target.value)}}></input>
                    </label>
                    <div style={{display:"flex" ,justifyContent:"space-between"}}>
                    <h4>Password</h4>
                    { !issignup && <p style={{color:"#007ac6",fontSize:"14px"}}>Forgot password?</p>}
                    </div>
                    <label htmlFor='password'>
                        <input type="password" name="password" id="password" onChange={(e)=>{setPassword(e.target.value)}}></input>
                        {issignup&&<p style={{color:"#666767",fontSize:"13px"}}>Passwords must contain at least eight<br></br>characters, including at least 1 letter and 1<br></br>number.</p>}
                    </label>
                    {
                        issignup && (
                            <label htmlFor='check' className='checkme'>
                                <input type='checkbox' id='check'></input>
                                <p style={{fontSize:"13px"}}>Opt-in to receive occasional<br/> product updates, user research invitations,<br></br> company announcements, and digests.</p>
                            </label>
                        )
                    }
                    <button type="submit" className='auth-btn'>{issignup==false?"Login":"Signup"}</button>
                    {issignup && (<p style={{color:"#666767",fontSize:"13px"}}>By clicking “Sign up”, you agree to our <span style={{color:"#007ac6"}}>terms of<br></br> service</span> and acknowledge that you have read and<br></br> understand our <span style={{color:"#007ac6"}}>privacy policy</span> and <span style={{color:"#007ac6"}}>code of<br></br> conduct.</span></p>)}
                 </form>
            <p>
                {issignup?"Already have an account":"Don't have an account?"}
                <button type="button" className="handle-switch-btn" onClick={handleSwitch}>{issignup?"Log in":"Sign up"}</button>
            </p>
        </div>
       </section>
    </div>
  )
}

export default Auth