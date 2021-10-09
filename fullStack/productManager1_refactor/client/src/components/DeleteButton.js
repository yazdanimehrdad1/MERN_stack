import React from 'react'
import axios from 'axios'


const DeleteButton = (props) => {

    const { productId, callBackFunction}= props;


    const deleteProduct = (e)=>{
        axios.delete('http://localhost:8000/api/product/'+ productId)
        
        .then(res=>{callBackFunction()
        
        })
    }

    return(
        <button onClick={deleteProduct}>
            Deleteee
        </button>
    )

}

export default DeleteButton