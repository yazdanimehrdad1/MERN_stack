import React, {useEffect, useState} from 'react';
import axios from 'axios';


const Main = ()=>{
    
    const [message, setMessage] = useState("Loading ....")

    useEffect( ()=>{
        axios.get("http://localhost:8000/api")
        .then(res=> setMessage(res.data.message))

    },[])
    
    return(
        <h1> {message}</h1>

    )
}

export default Main;