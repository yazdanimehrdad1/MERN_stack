import logo from './logo.svg';
import './App.css';
import React, {useState} from 'react';
import UserInput from './components/UserInput'
import Display from './components/Display'

function App() {
  const [boxColorArr, setBoxColorArray] = useState([])
  return (
    <div className = "App">
      <h1>Box Generator</h1>
      <UserInput boxColorArr={boxColorArr} setBoxColorArray={setBoxColorArray} />
      <Display  boxColorArray = {boxColorArr}/>



    </div>
  );
}

export default App;
