import React , {useState, useEffect} from 'react'
import axios from 'axios'


const Form = (props)=>{
    const {product, setProduct,  onSubmitHandler} = props;




    const inputHandler = (e)=>{
        const newStateObject = {...product}
        newStateObject[e.target.name] = e.target.value
        setProduct(newStateObject)
    }




    return(
        <div>
            <form onSubmit={onSubmitHandler}>
                <label>Title</label>
                
                <input
                    onChange={inputHandler}
                    type="text"
                    name="title"
                    value={product.title}

                ></input>


                <label>Price</label>
                <input
                    onChange={inputHandler}
                    type="number"
                    name="price"
                    value={product.price}

                ></input>


                <label>Description</label>
                <input
                    onChange={inputHandler}
                    type="text"
                    name="description"
                    value={product.description}

                ></input>

                <button>Submit</button>

            </form>
        </div>
    )
}

export default Form