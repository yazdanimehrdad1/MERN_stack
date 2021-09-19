// https://www.youtube.com/watch?v=ALy5Srt4R9E

import React, {useState, useReducer} from 'react'
import './Register.css'


const initialState={
    name:'',
    email:'',
    password:'',
    passwordConfirm:'',
    termsAccepted:''
}

function reducer(state, action){
   return {...state, [action.input]: action.value}
}


// const validateState = (state)=>{
//     return state.password === state.passwordConfirm &&
//            state.termsAccepted && state.password.length >3;
// }



const Register = (props)=>{

    const[state, dispatch] = useReducer(reducer, initialState)

    // console.log(state)
    

    const onChange = (e)=>{

        const {name, value, checked} = e.target;
        const action = {
            input:name, 
            value: name === "termsAccepted"? checked : value,
        }
        dispatch(action);
    }


    return(


        <div className= "RegisterFormContainer">
            <h2 className="RegisterFormContainerHeadline"> Register</h2>
                <form className="RegisterForm">
                    <input
                        className="TextInput"
                        type="text"
                        name="name"
                        placeholder="Name"
                        // onChange={onChange}
                    />
                    

                    
                    <input
                        className="TextInput"
                        type="text"
                        name="email"
                        placeholder="E-mail"
                        // onChange={onChange}

                    />

                    <input
                        className="TextInput"
                        type="password"
                        name="password"
                        placeholder="Password"
                        // onChange={onChange}

                    />

                    <input
                        className="TextInput"
                        type="password"
                        name="confirmPassword"
                        placeholder="Confirm Password"
                        // onChange={onChange}

                    />

                    <label className="TouCheckboxLabel">
                        <input className="TouCheckbox" 
                               type="checkbox"
                               name="termsAccepted"
                            //    onChange={onChange}

                        />
                            
                        
                        Accept Terms of Use
                    </label>

                    {/* <button className={!validateState(state) ? "Disabled": null}>
                        Register
                    </button> */}
                    
                        
                    

                </form>
            
        </div>
    );
}

export default Register