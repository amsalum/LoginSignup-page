import React, { useState } from 'react'
import './Loginsignup.css'
const Loginsignup = () => {
    const [action,setaction]=useState("login")
  return (
    <div className='container'>
        <div className="header">
            <div className="text"> {action}</div>
            <div className="underline"> </div>
            <div className="inputs">
                {action==="login"?<div></div>:<div className="input">
                    <input type="text" placeholder='name' />
                </div>
                }
                
                <div className="input">
                    <input type="email" placeholder='email' />
                </div>
                <div className="input">
                    <input type="password" placeholder='password'/>
                </div>
            </div>
            {action==="signup"?<div></div>:<div className="forgot-password">Lost password?   <span>click here</span></div>
}
            <div className="submit-container">
<div className={action==="login"?"submit gray":"submit"} onClick={()=>{setaction("signup")}}>signup</div>
<div className={action==="signup"?"submit gray":"submit"} onClick={()=>{setaction("login")}}>login </div><br/>
<p>made by Amsalu</p>

            </div>
        </div>
      
    </div>
  )
}

export default Loginsignup
