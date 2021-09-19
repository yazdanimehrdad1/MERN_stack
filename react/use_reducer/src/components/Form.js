import React , {useReducer} from 'react'


const initialState ={
    email:{
        text:"",
        error:"",
    },
    password:{
        text:"",
        error:""
    },
    counter:0
}

const reducer = (state, action)=>{


    switch(action.type){
        case "INCREMENT_COUNTER":
            return{
                ...state,
                counter:state.counter +1
            }
        case "RESET_COUNTER":
            return{
                ...state,
                counter:0
            }
        
        case "SET_EMAIL":
            return{
                ...state,
                email:{
                    ...state.email, 
                    text:action.payload,
                }
            };

        case "SET_EMAIL_ERROR":
            return{
                ...state, email:{
                    ...state.email, error:action.payload
                }
            }
        
        case "SET_PASSWORD":
            return{
                ...state, password:{
                    ...state.password,text:action.payload
                }
            }
    }



}

const Form = (props)=>{
    const [state, dispatch] = useReducer(reducer, initialState)
    
    const handleIncrement = ()=>{
        dispatch(
            {
                type: "INCREMENT_COUNTER"
            }
        )
    }

    const handleReset = ()=>{
        dispatch(
            {
                type: "RESET_COUNTER"
            }
        )
    }

    const handleEmailChange = (e)=>{

        if(e.target.value.length<6){
            dispatch(
                {
                    type:"SET_EMAIL_ERROR",
                    payload:"Email must be at least 6 characters"
                }
            )
        }else{
            dispatch(
                {
                    type:"SET_EMAIL_ERROR",
                    payload:""
                }
            )

        }


        dispatch(
            {
                type:"SET_EMAIL",
                payload: e.target.value
            }

        );
    };

    const handlePasswordChange = (e)=>{
        dispatch(
            {
            type: "SET_PASSWORD",
            payload:e.target.value
            }
        )
    }



    
    return(
        <div>

            <h1>Counter: {state.counter}</h1>
            <button onClick={()=>handleIncrement()} > Increment </button>
            <button onClick={()=>handleReset()} > RESET </button>

            <form >
                <div>
                    <lable htmlFor="email">Email</lable>
                    <input
                        type="text"
                        onChange={(e)=>handleEmailChange(e)}
                        value = {state.email.text}
                    
                    >
                        
                    </input>
                </div>
                {state.email.error.length>0 &&<p>{state.email.error}</p>}

                
                <div>
                    <label htmlFor="password">Password</label>
                    <input
                        type="password"
                        onChange={(e)=>handlePasswordChange(e)}
                        value = {state.password.text}


                    >
                    </input>
                
                </div> 

            </form>



            <h2>display info</h2>
            <h2>EMail: {state.email.text}</h2>
            <h2>Password: {state.password.text}</h2>




        
        </div>

    );
}

export default Form