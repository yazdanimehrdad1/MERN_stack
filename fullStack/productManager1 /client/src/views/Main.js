import React, {useState, useEffect} from 'react';
import axios from 'axios';
import ProductForm from '../components/ProductForm'
import ProductList from '../components/ProductList'


const Main = (props)=>{
    const [message, setMessage] = useState("Loading ...");
    const [loaded, setLoaded] = useState(false);
    const [products, setProducts] = useState([]);

    useEffect( ()=>{
        axios.get("http://localhost:8000/api")
        .then(res=> {
            console.log(res.data.message)
            setMessage(res.data.message)
        } )
        // .then(res => console.log(res.data.message))

    },[])


    useEffect( ()=>{
        axios.get('http://localhost:8000/api/product')
        .then(res =>{
            setProducts(res.data);
            setLoaded(true);
            
        });

    },[])

    console.log(loaded)


    const removeFromDom = (productId)=>{
        setProducts(products.filter( product=> product._id != productId))
    }
    

    return(

        <div>
            <h2>{message}</h2>
            <hr/>
            <ProductForm />
            {loaded &&   <ProductList products={products} removeFromDom = {removeFromDom} />}

        </div>
    )
}

export default Main;

