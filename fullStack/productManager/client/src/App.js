// eslint-disable-next-line 
import logo from './logo.svg';
import './App.css';
import Main from './views/Main';
import {Router} from '@reach/router';
import Detail from './views/Detail'

function App() {
  return (
    <div className="App">
      <Router>
        <Main path="/people/"/>
        <Detail path="people/:id" />


      </Router>
        
    </div>
  );
}

export default App;
