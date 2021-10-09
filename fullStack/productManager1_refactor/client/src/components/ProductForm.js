import React, {useState} from 'react';
import axios from 'axios';

const ProductForm = (props)=>{
    const {initialTitle, initialPrice, initialDescription, onSubmitProp} = props;
    const [title, setTitle] = useState(initialTitle);
    const [price, setPrice] = useState(initialPrice);
    const [description, setDescription] = useState(initialDescription);
    
    const sonSubmitHandler = (e) =>{
        e.preventDefault();
        // axios.post('http://localhost:8000/api/product', {
        //     // title: title,
        //     // price:price,
        //     // description:description
        //     title,
        //     price,
        //     description
        // })
        // .then(res => console.log(res))
        // .catch(err=> console.log(err))
        onSubmitProp({title, price, description})
        setTitle("")
        setPrice("")
        setDescription("")
    }
    
    return(
        
    
        <form onSubmit={sonSubmitHandler}>
            
            <p>
                <label>Product Title</label><br/>
                <input 
                    type="text" 
                    value={title}
                    onChange = {(e)=>setTitle(e.target.value)}/>
            </p>
            <p>
                <label>Product Price</label><br/>
                <input 
                    type="text"
                    value={price} 
                    onChange = {(e)=>setPrice(e.target.value)}/>
            </p>

            <p>
                <label>Product Description</label><br/>
                <input 
                    type="text" 
                    value={description}
                    onChange = {(e)=>setDescription(e.target.value)}/>
            </p>

            <input type="submit"/>



        </form>

    );
}

export default ProductForm;