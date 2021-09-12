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
        
        if (e.target.value.length<2 ){
            setFirstNameValidationErr("FirstName must be atleast 2 characters");
        }else{
            setFirstNameValidationErr("");
            setFirstName("")
        }

    }

    return(
        <form onSubmit={createUser}>
            <div>
                <label htmlFor="firstName">First Name</label>
                <input type="text" onChange={firstNameValidation} ></input>
                {
                    firstNameValidationErr?
                    <p>{firstNameValidationErr}</p>:
                    ""

                }

                <label htmlFor="lastName">Last Name</label>
                <label htmlFor="email"> email</label>
                <label htmlFor="password">Password</label>
                <label htmlFor="password">Confirm Password</label>

            </div>

        </form>
    );
}

export default User;