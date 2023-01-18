import React from 'react';
import {useState} from 'react';
import "../styles/Signup.css";

const SignupPage = () => {
    const [email,setEmail]=useState("")
    const handleEmail=(e)=>{
      setEmail(e.target.value)
    }
    const handleApi=()=>{
    console.log({email})
   }

  return (
    <div className='container'>

     <div className='main' >
        <h1>Welcome to AJIO</h1>    
        <p>Join/Sign In using</p>
      
         <div className='left'>
           <img align="left" src="https://logodownload.org/wp-content/uploads/2014/09/facebook-logo-2.png" alt="" />
         </div>

         <div className='right'>
            <img align="right" marginTop="60px" src="https://s3.amazonaws.com/freebiesupply/large/2x/google-logo-transparent.png" alt="" />
         </div>
    
         <div className='main1'>
           <p>-Or-</p>
         </div>

         <div className='main2'>
           <p>Enter Mobile Number/Email *</p>
         </div>

          <input value={email} onChange={handleEmail} type="text" />
          <br />
          <button onClick={handleApi}>CONTINUE</button>

          <div className='main3'>
           <p>By Signing In , I agree to <span style={{color:"blue", cursor:"pointer"}}>Terms and Condition</span></p>
          </div>
      </div>
    </div>
  )
}
export default SignupPage;