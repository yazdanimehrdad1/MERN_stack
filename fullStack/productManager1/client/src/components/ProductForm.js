import React, {useState} from 'react'
import axios from 'axios'

const ProductForm = (props)=>{
    const [title, setTitle] = useState();
    const [price, setPrice] = useState();
    const [description, setDescription] = useState();
    
    const sonSubmitHandler = (e) =>{
        e.preventDefault();
        axios.post('http://localhost:8000/api/product', {
            title: title,
            price:price,
            description:description
        })
        .then(res => console.log(res))
        .catch(err=> console.log(err))
    }
    
    return(
    
        <form onSubmit={sonSubmitHandler}>
            
            <p>
                <label>Product Title</label><br/>
                <input type="text" onChange = {(e)=>setTitle(e.target.value)}/>
            </p>
            <p>
                <label>Product Price</label><br/>
                <input type="number" onChange = {(e)=>setPrice(e.target.value)}/>
            </p>

            <p>
                <label>Product Description</label><br/>
                <input type="text" onChange = {(e)=>setDescription(e.target.value)}/>
            </p>

            <input type="submit"/>



        </form>

    );
}

export default ProductForm