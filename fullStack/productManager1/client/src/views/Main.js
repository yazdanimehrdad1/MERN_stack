import React, {useState, useEffect} from 'react';
import axios from 'axios';
import ProductForm from '../components/ProductForm'


const Main = (props)=>{
    const [message, setMessage] = useState("Loading ...")

    useEffect( ()=>{
        axios.get("http://localhost:8000/api")
        .then(res=> {
            console.log(res.data.message)
            setMessage(res.data.message)
        } )
        // .then(res => console.log(res.data.message))

    },[])


    // useEffect(()=>{
    //     axios.get("http://localhost:8000/api")
    //         .then(res=>setMessage(res.data.message))       
    // }, []);
    
    return(

        <div>
            <h2>{message}</h2>
            <ProductForm />
        </div>
    );
}

export default Main;

