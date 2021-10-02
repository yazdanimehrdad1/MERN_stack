import logo from './logo.svg';
import './App.css';
import React, {useState} from 'react'
import {Router, Link} from '@reach/router'
import NumberRoute from './components/NumberRoute'


function App() {
  return (
    <div className="App">
      <h1>Welcome</h1>
      <ul>
        <li><Link to="/1" >Go to path with id 1</Link></li>
        <li><Link to="/1/word" >Go to path with id 1 and word</Link></li>
        <li><Link to="/WORD/blue/red" >Go to path with WORD/blue/red</Link></li>
      </ul>
      <Router>
        <NumberRoute path="/:id"/>
        <NumberRoute path="/:id/:word"/>
        <NumberRoute path="/:word/:color1/:color2/" />
        
      </Router>
    </div>
  );
}

export default App;
