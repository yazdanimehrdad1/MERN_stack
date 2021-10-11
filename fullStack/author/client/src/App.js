import logo from './logo.svg';
import './App.css';
import {Router} from '@reach/router'

import Main from './views/Main'
import Form from './components/Form'
import Edit from './components/Edit'


function App() {
  return (
    <div className="App">

      <Router>

        <Form path="/new" />
        <Edit path="/edit/:id" />
        
        <Main path="/" />

        


      </Router>
      

    </div>
  );
}

export default App;
