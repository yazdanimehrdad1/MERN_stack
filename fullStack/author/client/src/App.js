import logo from './logo.svg';
import './App.css';
import {Router} from '@reach/router'

import Main from './views/Main'
import Form from './components/Form'
import Edit from './components/Edit'
import Header from './views/Header'
import LogReg from './views/LogReg'


function App() {

  const NotFound = () =>{
    return(
      <div> Rout / not fount, go to /authors</div>
    )
  }


  return (
    <div className="App">

      <Header />

      <Router>

        {/* <Form path="/new" />
        <Edit path="/edit/:id" />
        
        <Main path="/" /> */}

        <Main path="/authors"/>
        <Form path="/authors/new"/>
        {/* <OneAuthor path="/authors/:id" /> */}
        <Edit path="/edit/:id"/>
        <LogReg path="/logreg" />
        <NotFound path="/"/>

        


      </Router>
      

    </div>
  );
}

export default App;
