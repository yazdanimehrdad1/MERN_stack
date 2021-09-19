import React, {useState, useReducer} from 'react'

const ACTIONS = {
    add_TODO:"add_todo"
}



const reducer =(todos, action)=>{

    switch (action.type){
        // case 'increment':
        //     return{count: state.count +1}
        
        // case 'decrement':
        //     return{count: state.count -1}

        case ACTIONS.ADD_TODO:
            return [...todos, newTodo(action.payload.name)]
        // default:
        //     return state

    }
    
    // return{count: state.count -1}

}

const newTodo = (name)=>{
    return { id: Date.now() , name:name , complete:false}
}

const Element = (props) =>{

    const [state, dispatch] = useReducer(reducer, {count:0})
    // const [ count, setCount] = useState(0);
    const [name, setName] = useState('')


    const decrement = (e)=>{
        // setCount(count-1);
        dispatch({type:"decrement"})
    }

    const increment = (e)=>{
        // setCount(count+1);
        dispatch({type:"increment"})
    }

    const handelSubmit = (e)=>{
        e.preventDefault()
        dispatch({type:ACTIONS.ADD_TODO, payload:{name:name} })
        setName("")
    }

    
    return(
        <div>
            <button onClick={decrement}>-</button>
            {/* <span>{count}</span> */}
            <span>{state.count}</span>
            <button onClick={increment}>+</button>


            <form onSubmit = {handelSubmit}>
                <input type="text" value={name} onChange={(e)=> setName(e.target.value)}></input>
            </form>

        </div>
    );
}

export default Element