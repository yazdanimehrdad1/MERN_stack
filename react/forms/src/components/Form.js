import React, { useState } from 'react';

const UserForm = (props)=>{
    const [firstName , setFirstName] = useState("");
    const [lastName , setLastName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");


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
        setFirstName("");
        setLastName("");
        setEmail("");
        setPassword("");
        setConfirmPassword("");
    };


    return(

        <div>
            <form onSubmit={createUser}>
                <div>
                    <label>First Name</label>
                    <input type="text"  value = {firstName} onChange={ (e) => setFirstName(e.target.value)  }></input>
                </div>
                <div>
                    <label>Last Name</label>
                    <input type="text"  value = {lastName} onChange={ (e) => setLastName(e.target.value)  }></input>
                </div>
                <div>
                    <label>Email</label>
                    <input type="text"  value ={email}     onChange={ (e) => setEmail(e.target.value)  }></input>
                </div>
                <div>
                    <label>Password</label>
                    <input type="password"  value= {password} onChange={ (e) => setPassword(e.target.value)  }></input>
                </div>
                <div>
                    <label>Confirm Password</label>
                    <input type="text"  value= {confirmPassword} onChange={ (e) => setConfirmPassword(e.target.value)  }></input>
                </div>
                <input type="submit" value="Create User"></input>

            </form>

            <div>
                <p>First Name: {firstName}</p>

            </div>
        </div>
    );
}

export default UserForm