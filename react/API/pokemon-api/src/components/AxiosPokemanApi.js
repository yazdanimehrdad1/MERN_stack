import React, {useState, useEffect} from 'react'
import axios from 'axios'
import {Link} from '@reach/router'



const AxiosPokemanApi = (props)=>{

    const [ apiResponse, setApiResponse] = useState([])

    useEffect(() => {
        axios.get('https://pokeapi.co/api/v2/pokemon?limit=807')
             .then(response =>{
                 setApiResponse(response.data.results)
                })
             .catch(error =>{
                 console.log(error)
             })
        // return () => {
        //     cleanup
        // }
    }, [])
    
    
    
    return(

        <div >

        <h1>List of Pokemon-AXIOS</h1>
        <Link to = "/AJAX">Go to the AJAX</Link>
  
        {
          apiResponse.length>0 && apiResponse.map((element,index)=>{
            return( <p> Key={index}- {element.name}</p>)
          })
        }
      </div>


    );
    
}

export default AxiosPokemanApi