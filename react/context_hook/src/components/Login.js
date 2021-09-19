import React, {useState, useContext} from 'react';
import {LoginContext} from '../Contexts/LoginContext';

function Login() {
    
   
    const {setUsername, setShowProfile} = useContext(LoginContext)
    
    return (
        <div>
            <input
                type="text"
                placeholder="Username"
                onChange={(e)=>{setUsername(e.target.value)}}
            
            ></input>

            <input
                type="password"
                placeholder="Password"
            >
            </input>
            <button
                onClick={
                    ()=>{setShowProfile(true)}
                }
            >LOGIN</button>

            {/* {showProfile && <h1>{username}</h1>} */}
            
        </div>
    )
}

export default Login
