import './App.css';
import Header from './components/Header';
function App() {
  return (
    <div className="App">
      // passing in 2 attributes to the Header component through 
      the default props object which will look like this:
 
      <Header firstName={ "Bill" } lastName={ "Justice" } />
    </div>
  );
}
export default App;



// /src/components/Header.js
import React from 'react';   
const Header = (props) => {
    return (
        <div>
            <h1>
                My name is {props.firstName} {props.lastName}
            </h1>
        </div>
    );
}
export default Header;


import React from 'react';
    
const Header = (props) => {

    // destructuring props in to 2 local variables that MUST 
    // match the key names found in the props object
    const { firstName, lastName } = props; 
    return (
        <div>
            <h1>
    		// Destructuring allows us to use them like simple variables
                My name is { firstName } { lastName }
            </h1>
        </div>
    );
}
export default Header;




const [state, setState] = useState({ 
        name: ""                         
    });
    const onClick = () => {
        setState({name: "Scary Terry"}) // here we have to go inside our 
                                        // object, get to our appropriate key,
    }                                   // THEN change the value
    console.log(state.name);
    
    

