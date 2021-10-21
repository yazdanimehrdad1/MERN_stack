import logo from './logo.svg';
import './App.css';
import {Router} from "@reach/router"

import Main from './views/Main'
import OneProduct from './views/OneProduct'
import Update from './views/Update'
function App() {
  return (
    <div className="App">
      <Router>

        <Main path="/" ></Main>
        <OneProduct path = "/product/:id"></OneProduct>
        <Update path="/product/edit/:id"></Update> 

      </Router>
    </div>
  );
}

export default App;
