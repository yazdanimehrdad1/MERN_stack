import React, {useState} from "react";
import axios from "axios";
import {navigate, Link} from '@reach/router';

const Login = (props)=>{
    const [email, setEmail] = useState("");
    const [ password, setPassword] = useState("");
    const [errorMessage, setErrorMessage] = useState("");

    const login = (event)=>{
        event.preventDefault();
        axios.post("http://localhost:8000/api/user/login" ,{
            email:email,
            password:password
        },
        {
            withCredentials:true
        })
        .then( (res) => {
            console.log(res.data);
            navigate("/")
        })
        .catch( err =>{
            console.log(err);
            setErrorMessage(err.response.data.message)
        })
    }

    return(
        <div>
            <h2>Log In</h2>
            <p className="error-text">{errorMessage ? errorMessage:""} </p>
            <form onSubmit={login}>
                <div>
                    <lable>Email</lable>
                    <input
                        type="text"
                        name="email"
                        value={email}
                        onChange = { (e)=> setEmail(e.target.value)}
                    >
                    </input>
                </div>


                <div>
                    <lable>Password</lable>
                    <input
                        type="password"
                        name="password"
                        value={password}
                        onChange = { (e)=> setPassword(e.target.value)}
                    >
                    </input>
                </div>

                <div className="center">
                    <button
                        type="submit"
                    >Sign In</button>

                </div>

            </form>
        </div>
    )

}

export default Login;