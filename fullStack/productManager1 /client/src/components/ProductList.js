import React from 'react'
import {Link} from '@reach/router'
import axios from 'axios'
// import { deleteProduct } from '../../../server/controlls/product.controller'


const ProductList = (props)=>{

    const {removeFromDom} = props;

    const deleteProduct = (productId)=>{
        axios.delete('http://localhost:8000/api/product/'+ productId)
        .then(res => {removeFromDom(productId)} )
    }



    return(
        <div>
        <div>
            {props.products.map((product,idx)=>{
                return (
                    // <p key={idx}>{product.title}, {product.price}, {product.description}</p>
                    <div>
                        <Link key={idx} to={`${product._id}`}>{product.title}</Link>
                        <Link to={"/product/" + product._id + "/edit"}>Edit</Link>
                        <button onClick={ (e)=> {deleteProduct(product._id)}} >Delete</button>
                    </div>
                    )
                    
                })
            }
        </div>
        <div>
            {props.products.map((product, idx)=>{
            return <p key={idx}>{product.title}, {product.price}, {product.description}</p>
            })}
        </div> 
        </div>
    )
}




export default ProductList;