import React, {useState, useEffect} from 'react'
import axios from 'axios'
import {Link, navigate} from '@reach/router'

const Header = (props)=>{
    const logout = (e)=>{
        e.preventDefault();

        axios.post("http://localhost:8000/api/user/logout",{},{withCredentials:true} )
        .then((res)=>{
            console.log(res.data);
            navigate("/");
        })
        .catch( err => console.log(err))

    };


    return(
        <div>
            <h1>Welcome to my website!</h1>
            <div className="center">
                <button onClick={()=>navigate("/authors")} >See all authors</button>
                <button onClick={()=>navigate("/logreg")} >Log In</button>
                <button onClick={(e)=> logout(e)} >See all authors</button>
                
            </div>
        </div>
    )
}

export default Header;