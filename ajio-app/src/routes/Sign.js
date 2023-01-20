import React, { useState } from 'react';

function Signup() {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    // const [data, setdata] = useState([]);


    const handleSignup = () => {
      
        let user = {username:username , password:password};
        localStorage.setItem("user", JSON.stringify(user));
        window.location.href = "/Login";
        console.log(user);
    }

    return (
        <div className='container' style={{marginTop:"5%",boxShadow:"rgba(0, 0, 0, 0.16) 0px 10px 36px 0px, rgba(0, 0, 0, 0.06) 0px 0px 0px 1px",height:"600px",marginLeft:"35%",marginRight:"35%"}}>
            <div className='main'>
             <h1 style={{fontSize:"30px",marginRight:"35%",marginTop:"10%"}}>Welcome to AJIO</h1>    
             <p style={{marginTop:"5%",fontSize:"23px",marginRight:"46%",marginBottom:"5%"}}>Join/Sign In using</p>

             <div className='left'>
                <img style={{width:"30%",height:"45px",border:"1px solid blue",marginLeft:"7%"}} align="left" src="https://logodownload.org/wp-content/uploads/2014/09/facebook-logo-2.png" alt="" />
              </div>

              <div className='right'>
                <img style={{width:"30%",height:"45px",border:"1px solid red",marginRight:"25%"}} align="right"  src="https://s3.amazonaws.com/freebiesupply/large/2x/google-logo-transparent.png" alt="" />
              </div>

              <div className='main1'>
                <p style={{textAlign:"center",marginTop:"20%",marginRight:"17%"}}>-Or-</p>
              </div>

              <div className='main2'>
               <p style={{marginTop:"2%",fontSize:"20px",marginRight:"28%"}}>Enter Mobile Number/Email *</p>
             </div>
            <form style={{marginTop:"5%"}}>
                <label style={{fontSize:"15px",marginRight:"70%"}}>Username:</label>
                 <br/>
                <input style={{fontSize:"15px",marginRight:"8%",border:"1px solid grey",marginTop:"10px",width:"80%"}} type="text" value={username} onChange={e => setUsername(e.target.value)} />
                <br />
                <label style={{fontSize:"15px",marginRight:"70%",}}>Password:</label>
                <br/>
                <input style={{fontSize:"15px",marginRight:"8%",border:"1px solid grey",marginTop:"10px",width:"80%"}} type="password" value={password} onChange={e => setPassword(e.target.value)} />
                <br />
                <button style={{marginTop:"30px",border:"none",width:"25%",cursor:"pointer",height:"40px",color:"white",marginRight:"270px",backgroundColor:"rgb(204, 151, 5)"}} type="button" onClick={handleSignup}>Signup</button>
            </form>
            <div className='main3'>
           <p style={{marginTop:"2%",fontSize:"18px",marginRight:"3%"}}>By Signing In , I agree to <span style={{color:"blue", cursor:"pointer"}}>Terms and Condition</span></p>
          </div>
            </div>
        </div>
    );
}

export default Signup;
