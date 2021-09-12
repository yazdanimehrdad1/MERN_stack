import React, { useState } from  'react';
    
    
const UserForm =(props) => {
    const [username, setUsername] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [hasBeenSubmitted, setHasBeenSubmitted] = useState(false);  // default value of false
    const [validationErr, setValidationErr] =useState("")
    
    const createUser = (e) => {
        // we must prevent the default refresh of the browser to keep our state from being reset
        e.preventDefault();
        
        // shorthand ES6 syntax for building an object
        const newUser = { 
            username: username, 
            email:email, 
            password:password 
        };

        console.log("Welcome", newUser);
    	setUsername("");
    	setEmail("");
    	setPassword("");
    
        // updating state will change the message to be displayed in the form
        setHasBeenSubmitted( true );
    };
    
    const formMessage = () => {
        if( hasBeenSubmitted ) {
	        return  <p  style={{color:"green"}}>"Hoorayyyyy, its submitted"</p>  ;
	    } else {
	    return <p style={{color:"red"}}> "Ohhhhhhhh, please submit the form"</p> ;
	    }
    };
    const handleValidation = (e) =>{
        setUsername(e.target.value)

        if(e.target.value.length<1){
            setValidationErr("Username is required");
        } else if(e.target.value.length <3){
            setValidationErr("Username must be at least 3 letters");
        }else{
            setValidationErr("")
        }
    }
    
    return (
        <form onSubmit={ createUser }>
            <h3>{formMessage()}</h3>

            {
                hasBeenSubmitted ?
                <h3 style={{color:"green"}}> Thank you for submitting the form!</h3> :
                <h3 style={{color:"red"}}> Wlcome! Please submit the form!</h3>
            }
            <div>
                <label>Username: </label>
                <input type="text" onChange={handleValidation}></input>
                {
                    validationErr?
                    <p>{validationErr}</p>:
                    ""

                }
                {
                    validationErr?
                    <input type="submit" value="Create User" disabled />:
                    <input type="submit" value="Create User"  />
                    
                }   
            </div>
            
        </form>
    );
};
    
export default UserForm;
