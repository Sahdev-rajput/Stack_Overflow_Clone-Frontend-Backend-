import React, { useState } from 'react'

const LoginHistory=({currentHistory})=>{
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
          return browser;
      }
    
      const getOSName=()=>{
        let operatingSys=navigator.userAgent;
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
      return OS;
      }
    
      const isMobile = window.innerWidth <= 768;
      const isTab=window.innerWidth<=1000;
      const isLaptop=window.innerWidth>=1000;
      let device="Nothing";
       if(isMobile)
       {
        device="Mobile Device";
       }
       else if(isTab)
       {
        device="Tab Device";
       }
       else if(isLaptop)
       {
        device="Laptop";
       }
    return (
        <div>
        <h3>Previous Login History:</h3>
            <h4>Browser Name: </h4>
            <p>{currentHistory?.result.browser}</p>
            <h4>Operating System Name: </h4>
            <p>{currentHistory?.result.operatingSystem}</p>
            <h4>Device type: </h4>
            <p>{currentHistory?.result.deviceType}</p>
        </div>
        )
}

export default LoginHistory;