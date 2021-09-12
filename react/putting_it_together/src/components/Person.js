import React, {useState} from 'react'


const Person = (props)=>{

    const[age, setAge] = useState(props.age);

    return(
        <div>
            <p>{props.fName }, {props.lName} </p>
            <p>Age: {age}</p>
            <button onClick={ (event)=> setAge(age+1) } > Add 1 year to {props.fName}</button>
            <button onClick={ (event)=> setAge(age-1) } > Subtract 1 year to {props.fName}</button>

            

        </div>
    )
}

 export default Person