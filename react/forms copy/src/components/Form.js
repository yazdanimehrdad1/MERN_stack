import React, { useState } from 'react';

const UserForm = (props)=>{
    const [firstName , setFirstName] = useState("");
    const [lastName , setLastName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");

    const formStyle = {
        textAlign:"center",
        width:"450px",
        margin:"auto",
    }
    const inputStyle = {
        textAlign:"left",
        width:"450px",
        margin:"auto",
    }
    const userInputStyle = {
        textAlign:"right",

    }

    const createUser = (e)=>{
        e.preventDefault();
        const newUser = {
            firstName: firstName,
            lastName:lastName,
            email :email,
            password : password,
            confirmPassword: confirmPassword,
        }
        console.log("Welcome", newUser)
        // setFirstName("");
        // setLastName("");
        // setEmail("");
        // setPassword("");
        // setConfirmPassword("");
    };


    return(

        <div>
            <form style={formStyle} onSubmit={createUser}>
                <div style={inputStyle}>
                    <label htmlFor="firstName">First Name</label>
                    <input name="firstName" type="text"  value = {firstName} onChange={ (e) => setFirstName(e.target.value)  }></input>
                </div>
                <div style={inputStyle}>
                    <label htmlFor="lastName">Last Name</label>
                    <input name="lastName" type="text"  value = {lastName} onChange={ (e) => setLastName(e.target.value)  }></input>
                </div>
                <div style={inputStyle}>
                    <label htmlFor="email">Email</label>
                    <input name="email" type="text"  value ={email}     onChange={ (e) => setEmail(e.target.value)  }></input>
                </div>
                <div style={inputStyle}>
                    <label>Password</label>
                    <input type="password"  value= {password} onChange={ (e) => setPassword(e.target.value)  }></input>
                </div>
                <div style={inputStyle}>
                    <label>Confirm Password</label>
                    <input type="text"  value= {confirmPassword} onChange={ (e) => setConfirmPassword(e.target.value)  }></input>
                </div>
                <input type="submit" value="Create User"></input>

            </form>

            <div>
                <p>First Name: {firstName}</p>
                <p>last Name: {lastName}</p>
                <p>email: {email}</p>
                <p>Password: {password}</p>

            </div>
        </div>
    );
}

export default UserForm