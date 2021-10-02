import logo from './logo.svg';
import './App.css';
import React,{useEffect, useState} from 'react'
import PokemonAPI from './components/PokemonAPI'
import AxiosPokemanApi from './components/AxiosPokemanApi'
import {Router, Link} from '@reach/router'


function App() {

  return(


    <div>
      <Link to="/AXIOS">Go to Axios</Link>

      <Router>  
        <PokemonAPI path="/AJAX/"/>
        <AxiosPokemanApi path="/AXIOS/" />
      </Router>
    </div>
  );
}

export default App;
