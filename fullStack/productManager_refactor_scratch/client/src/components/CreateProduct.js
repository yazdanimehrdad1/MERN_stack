import React , {useState, useEffect} from 'react'
import axios from 'axios'
import Form from './Form'


const CreateProduct = (props)=>{
    
    const {productList, setProductList} = props;

    const [newProduct, setNewProduct] = useState({
        title:"",
        price:"",
        description:""
    })

    const newHandler = (e)=>{
        e.preventDefault()
        // console.log(newProduct)
        axios.post("http://localhost:8000/api/project", newProduct)
        .then( res=>{
            setProductList([...productList, res.data]);
            setNewProduct({
                title:"",
                price:"",
                description:""
            })
            
        })
        .catch( (err)=> console.log(err))

    }
    
    return(
        <div>
            <h1>Create Form</h1>
            <Form product={newProduct} setProduct={setNewProduct} onSubmitHandler={newHandler} />
        </div>
    )
}

export default CreateProduct