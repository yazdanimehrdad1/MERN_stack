  
import React , {useState, useEffect} from 'react'
import {Link} from '@reach/router'


const PokemonAPI = (props)=>{

    const [pokemon, setPokemon] = useState([])

    useEffect(() => {
      fetch('https://pokeapi.co/api/v2/pokemon/')
      .then(response => response.json())
      .then(response => setPokemon(response.results))
      .catch((err)=>{ console.log(err)})
    }, []);
    
    return (
      <div >
  
        <h1>List of Pokemon-AJAX</h1>
        <Link to="/AXIOS">Go to AXIOS</Link>
  
        {
          pokemon.length>0 && pokemon.map((element,index)=>{
            return( <p> Key={index}- {element.name}</p>)
          })
        }
        
  
      </div>
    );
    
}




export default PokemonAPI;