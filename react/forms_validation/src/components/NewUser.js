import React , {useState} from 'react'; 


const User = (props) =>{


    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");

    const [hasBeenSubmitted, setHasBeenSubmitted] = useState(false);  // default value of false
    const [firstNameValidationErr, setFirstNameValidationErr] =useState("")
    const [lastNameValidationErr, setLastNameValidationErr] =useState("")



    const createUser = (e)=>{
        e.preventDefault();
    };

    const firstNameValidation = (e) =>{  
        setFirstName(e.target.value);

        if (e.target.value.length>0){
            if (e.target.value.length<2 ){
                setFirstNameValidationErr("FirstName must be atleast 2 characters");
            }else{
                setFirstNameValidationErr("");
                setFirstName("")
            }

        }
 

    }

    return(
        <form onSubmit={createUser}>
            <div>
                <div>
                    <label htmlFor="firstName">First Name</label>
                    <input type="text" onChange={firstNameValidation} ></input>
                    <p>{firstNameValidationErr}</p>
                </div>
  
                <div>
                <label htmlFor="lastName">Last Name</label>
                <input type="text" name="lastName" onChange={ (e)=> setLastName(e.target.value) } ></input>
                {
                    lastName.length >0?
                        lastName.length<2?
                            <p>Last name must be atleat 2 character</p>
                        :null
                    :null       
                }
                </div>


                
                <div>
                    <label htmlFor="email"> email</label>
                    <input type="text" name="email" onChange={ (e)=> setEmail(e.target.value) } ></input>
                    {
                        email.length > 0 ?
                            email.length < 5 ?
                            <p >Email must be at least 5 characters</p>
                            : null
                        : null 
                     }
                </div>


                
                <div>
                    <label htmlFor="password">Password</label>
                    <input type="password" name="password" onChange={ (e)=> setPassword(e.target.value) } ></input>
                    {
                        password.length > 0 ?
                            password.length < 5 ?
                            <p >Password must be at least 8 characters</p>
                            : null
                        : null 
                     }
                </div>

                <div>    
                    <label htmlFor="confirmPassword">Confirm Password</label>
                    <input type="password" name="confirmPassword" onChange={ (e)=> setConfirmPassword(e.target.value) } ></input>

                </div>


                <div>
                    <input type="submit" value="Register"></input>
                </div>


            </div>

        </form>
    );
}

export default User;