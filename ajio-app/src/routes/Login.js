import React, { useState } from 'react';

function Login() {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');

    const handleLogin = () => {
     
        let user = JSON.parse(localStorage.getItem("user"));

        if (username === user.username && password === user.password) {
            alert("Login succesfull")
            window.location.href = "/homepage";

        } else {
            setError("Invalid username or password");
        }
    }

    return (
        <div className='container' style={{marginTop:"8%",boxShadow:"rgba(0, 0, 0, 0.16) 0px 10px 36px 0px, rgba(0, 0, 0, 0.06) 0px 0px 0px 1px",height:"500px",marginLeft:"35%",marginRight:"35%",borderRadius:"10px",fontWeight:"500"}}>
            <div className='main'>
            <h1 style={{fontSize:"30px",marginRight:"20%",marginTop:"10%"}}>Welcome to AJIO</h1>    
             <p style={{marginTop:"3%",fontSize:"22px",marginRight:"22%",marginBottom:"5%"}}>Please set your account</p>

            <form style={{marginTop:"5%"}}>
                <label style={{fontSize:"15px",marginRight:"70%",}}>Username:</label>
                <input style={{fontSize:"15px",marginRight:"8%",border:"1px solid grey",marginTop:"10px",width:"80%",borderRadius:"7px"}} type="text" value={username} onChange={e => setUsername(e.target.value)} />
                <br />
                <br/>
                <label style={{fontSize:"15px",marginRight:"70%",}}>Password:</label>
                <input style={{fontSize:"15px",marginRight:"8%",border:"1px solid grey",marginTop:"10px",width:"80%",borderRadius:"7px"}} type="password" value={password} onChange={e => setPassword(e.target.value)} />
                <br />
                <button style={{marginTop:"40px",border:"none",width:"25%",cursor:"pointer",height:"40px",color:"white",marginRight:"220px",backgroundColor:"rgb(204, 151, 5)"}} type="button" onClick={handleLogin}>Login</button>
            </form>
            {error && <p>{error}</p>}
            <div className='main3'>
           <p style={{marginTop:"8%",fontSize:"15px",marginRight:"3%"}}>By Signing In , I agree to <span style={{color:"blue", cursor:"pointer"}}>Terms and Condition</span></p>
          </div>
            </div>
        </div>
    );
}

export default Login;
