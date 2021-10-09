import React, {useState} from 'react';
import axios from 'axios';

const ProductForm = ()=>{
    const [title, setTitle] = useState("");
    const [price, setPrice] = useState(0);
    const [description, setDescription] = useState("");
    
    const sonSubmitHandler = (e) =>{
        e.preventDefault();
        axios.post('http://localhost:8000/api/product', {
            // title: title,
            // price:price,
            // description:description
            title,
            price,
            description
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
                <input type="text" onChange = {(e)=>setPrice(e.target.value)}/>
            </p>

            <p>
                <label>Product Description</label><br/>
                <input type="text" onChange = {(e)=>setDescription(e.target.value)}/>
            </p>

            <input type="submit"/>



        </form>

    );
}

export default ProductForm;