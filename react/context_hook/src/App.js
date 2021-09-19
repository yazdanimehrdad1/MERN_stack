import logo from './logo.svg';
import './App.css';
import Login from './components/Login';
import Profile from './components/Profile'
import React, {useState} from 'react'

import {LoginContext} from './Contexts/LoginContext'


function App() {

  const [ showProfile, setShowProfile] = useState(false);
  const [username, setUsername] = useState("");


  return (
    <div className="App">

      <LoginContext.Provider  value = {{username, setUsername, setShowProfile}}>
      {showProfile ? <Profile /> : <Login />}

      </LoginContext.Provider>
    </div>
  );
}

export default App;
