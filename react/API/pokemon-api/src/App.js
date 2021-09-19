import logo from './logo.svg';
import './App.css';
import React,{useEffect, useState} from 'react'

function App() {
  
  const [pokemon, setPokemon] = useState([])

  useEffect(() => {
    fetch('https://pokeapi.co/api/v2/pokemon/')
    .then(response => response.json())
    .then(response => setPokemon(response.results))
    // return () => {
    //   cleanup
    // }
  }, []);
  
  return (
    <div className="App">

      <h1>List of Pokemon</h1>

      {
        pokemon.length>0 && pokemon.map((element,index)=>{
          return( <p> Key={index}- {element.name}</p>)
        })
      }
      

    </div>
  );
}

export default App;
