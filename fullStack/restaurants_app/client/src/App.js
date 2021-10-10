import logo from './logo.svg';
import './App.css';
import Main from './views/Main'
import { Router } from "@reach/router";
import Form from './components/Form'
import DisplayAll from './components/DisplayAll'

function App() {
  return (
    <div className="App">

      <Router>
          <DisplayAll path="/" />
          <Main path="/health"/>

          <Form path="/new" />
          
      </Router>


    </div>
  );
}

export default App;
