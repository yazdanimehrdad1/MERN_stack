import axios from "axios";
import React, {useState, useEffect} from "react";
import Form from '../components/Form'
import {navigate} from '@reach/router'




const Update = (props)=>{

    const {id} = props
    console.log(id)
    
    const [editProduct, setEditProduct] = useState({
        title:"",
        price:"",
        description:""
    });

    useEffect(() => {
        axios.get(`http://localhost:8000/api/project/${id}`)
        .then( res=>{
            console.log(res.data)
            setEditProduct(res.data)
        })
        .catch(err=> console.log(err))

    },[])


    const updateHandler = (e) =>{
        e.preventDefault()
        axios.put(`http://localhost:8000/api/project/${id}`, editProduct)
        .then(navigate("/"))
        .catch(err => console.log(err))
         

    }



    return(
        <div>
            <Form product={editProduct} setProduct={setEditProduct} onSubmitHandler={updateHandler}></Form>
        </div>
    )
}


export default Update;