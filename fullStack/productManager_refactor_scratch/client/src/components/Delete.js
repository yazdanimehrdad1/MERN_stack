import React , {useState, useEffect} from 'react'
import axios from 'axios'
import { navigate } from '@reach/router';


const Delete = (props)=>{
    const {id, deleteFilter} = props;




    const deleteHandler = (e)=>{
        e.preventDefault()
        axios.delete(`http://localhost:8000/api/project/${id}`)
        .then( res=>{
            if(deleteFilter){
                deleteFilter(id)
            }
            else(console.log(res.data))
            navigate("/")

        })
        .catch( err=>{
            console.log(err)
        })

    
    }




    return(
        <div>

            <button onClick={deleteHandler} >Delete</button>
        </div>
  
    )
}

export default Delete