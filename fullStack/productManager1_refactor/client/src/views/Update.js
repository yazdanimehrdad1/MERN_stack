import React, {useState, useEffect} from 'react'
import axios from 'axios'
import ProductForm from '../components/ProductForm'
import DeleteButton from '../components/DeleteButton'
import { navigate } from '@reach/router'


const Update = (props)=>{

    const {id} = props
    // const [title, setTitle] = useState();
    // const [price, setPrice] = useState();
    // const [description , setDescription] = useState();


    // useEffect( () =>{
    //     axios.get('http://localhost:8000/api/product/'+ id)
    //     .then(res =>{
    //         setTitle(res.data.title)
    //         setPrice(res.data.price)
    //         setDescription(res.data.description)
    //     })
    // },[])


    // const updateProduct = (e)=>{
    //     e.preventDefault();
    //     axios.put('http://localhost:8000/api/product/'+ id, {
    //         title,
    //         price,
    //         description
    //     })
    //     .then(res => console.log(res))
    // }


    // return(

    //     <div>
    //         <h1>Update the product</h1>


    //         {}

    //          <form onSubmit={updateProduct}>
    //             <p>
    //                 <label>Title</label>
    //                 <input type="text" name="title" value={title} onChange={e=> setTitle(e.target.value)} ></input>
    //             </p>

    //             <p>
    //                 <label>Price</label>
    //                 <input type="text" name="price" value={price} onChange={e=> setPrice(e.target.value)} ></input>
    //             </p>

    //             <p>
    //                 <label>Description</label>
    //                 <input type="text" name="description" value={description} onChange={e=> setDescription(e.target.value)} ></input>
    //             </p>

    //             <input type="submit"></input>
    //         </form> 
    //     </div>
    // )



    const [product, setProduct] = useState()
    const [loaded, setLoaded] = useState()


    useEffect( ()=>{
        axios.get('http://localhost:8000/api/product/'+id)
        .then( res=> {
            setProduct(res.data)
            console.log(product)
            setLoaded(true)
        })

    },[])

    const updateProduct = (product)=>{
        axios.put('http://localhost:8000/api/product/' + id, product)
        .then(res=> console.log(res))
    }


    



    
    
    return(

        <div>
            <h1>Update the product</h1>

            {loaded && 

                <>
                <ProductForm
                    onSubmitProp ={updateProduct}
                    initialTitle = {product.title}
                    initialPrice = {product.price}
                    initialDescription = {product.description}
                />

                <DeleteButton productId ={product._id} callBackFunction={ ()=> navigate("/product")}  />

                </>
            
            }

   
        </div>
    )
}

export default Update;