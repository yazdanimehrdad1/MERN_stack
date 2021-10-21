
import React from 'react'
import {navigate} from '@reach/router'
import Login from "../components/Login"
import RegisterUser from "../components/RegisterUser"

const LogReg = () =>{
    return(
        <div className="container-flex">
            <Login />
            <hr></hr>
            <RegisterUser />
            <button onClick={ ()=> navigate('/')} > Back to the Main Page</button>
        </div>
    )
}

export default LogReg;