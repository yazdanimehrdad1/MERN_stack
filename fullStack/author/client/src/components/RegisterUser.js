import React, {useState} from "react";
import axios from "axios";
import {navigate, Link} from '@reach/router';

const RegisterUser = (props)=>{
    const [firstName, setFirstName] = useState("")
    const [lastName, setLastName] =useState("")
    const [email, setEmail] = useState("");
    const [ password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("")
    // const [errorMessage, setErrorMessage] = useState({});
    const [confirmReg, setConfirmReg] = useState("")

    const register = (event)=>{
        event.preventDefault();

        const newUser = {
            firstName,
            lastName,
            email,
            password,
            confirmPassword
        }

        axios.post("http://localhost:8000/api/user/register",newUser, {withCredentials:true} )
        .then(res=>{
            console.log(res.data)
            setFirstName("")
            setLastName("")
            setEmail("")
            setPassword("")
            setConfirmPassword("")
            // setErrorMessage({})
            setConfirmReg("Thank you for registration, you can login now!")
        })
        .catch(err =>{
            console.log(err);
            // setErrorMessage(err.response.data.errors)
        })

    }

    return(
        <div>
            <h2>Register</h2>

            {
                confirmReg?<h4>{confirmReg}</h4>:null
            }

            {/* <p className="error-text">{errorMessage ? errorMessage:""} </p> */}
            <form onSubmit={register}>

                 <div>
                    <lable>First Name</lable>
                    {/* { errorMessage.firstName? <span>{errorMessage.firstName.message}</span> :null} */}

                    <input
                        type="text"
                        name="firstName"
                        value={firstName}
                        onChange = { (e)=> setFirstName(e.target.value)}
                    >
                    </input>
                </div>


                <div>
                    <lable>Last Name</lable>

                    {/* { errorMessage.lastName? <span>{errorMessage.lastName.message}</span> :null} */}
                    <input
                        type="text"
                        name="lastName"
                        value={lastName}
                        onChange = { (e)=> setLastName(e.target.value)}
                    >
                    </input>
                </div>


                <div>
                    <lable>Email</lable>
                    {/* { errorMessage.email? <span>{errorMessage.email.message}</span> :null} */}
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
                    {/* { errorMessage.password? <span>{errorMessage.password.message}</span> :null} */}
                    <input
                        type="password"
                        name="password"
                        value={password}
                        onChange = { (e)=> setPassword(e.target.value)}
                    >
                    </input>
                </div>



                <div>
                    <lable>Confirm Password</lable>
                    {/* { errorMessage.confirmPassword? <span>{errorMessage.confirmPassword.message}</span> :null} */}
                    <input
                        type="confirmPassword"
                        name="confirmPassword"
                        value={confirmPassword}
                        onChange = { (e)=> setConfirmPassword(e.target.value)}
                    >
                    </input>
                </div>


                <div className="center">
                    <button
                        type="submit"
                    >Register</button>

                </div>

            </form>
        </div>
    )

}

export default RegisterUser;