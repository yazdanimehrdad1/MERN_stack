import logo from './logo.svg';
import './App.css'
import React, {useState} from 'react'

function App() {
  const [newTodo, setNewTodo] = useState("")
  const [todoArr, setTodoArr] = useState([])
  

  const handleSubmit = (e) =>{
    e.preventDefault();

    // Prevent empty submission
    if (newTodo.length ===0 ){
      return;
    }


    const todoItem = {
      text: newTodo,
      complete:false
    }




    // Add to the todoArr[]
    setTodoArr([ ...todoArr, todoItem])
    setNewTodo("")
  }

  const handleDelete = (index)=>{

    const filteredTodos = todoArr.filter( (todo, i) =>{
        return i !== index
    })

    setTodoArr(filteredTodos)

  }


  const handleToggleComplete = (index)=>{
    const newtodo = {...todoArr[index]}

    newtodo.complete = !newtodo.complete

    setTodoArr([...todoArr.slice(0,index),newtodo].concat(todoArr.slice(index+1)) )

  }

  return (
    <div className="App">

      <form onSubmit={  (e)=>{handleSubmit(e)}   }>
        <input 
          type="text"
          onChange={(e)=> setNewTodo(e.target.value)}
          value={newTodo} 
        ></input>
        <button>Add New Todo</button>
      </form>

      <div >
        <h3>Todo List</h3>
        {todoArr.map((element, index) =>{

          const todoClasses=[]
          if(element.complete){
            todoClasses.push("strike", "bold")
          }
          console.log(todoClasses)
          console.log(todoClasses.join(" "))



          return(
          <div style={{border:" solid black", margin:"10px", padding:"20px"}} key={index}>
            

            <p>
              <input type="checkbox"
                      checked={newTodo.complete}
                      onChange={(e)=>{ handleToggleComplete(index)}} 
               ></input> 

               {/* {element.text } */}
               <span className={todoClasses.join(" ")}>{element.text }</span>
            </p>
            
            <button onClick={(e)=>{handleDelete(index)}}>Delete</button>
            

          </div>
          )
        })}
      </div>


    </div>
  );
}

export default App;
