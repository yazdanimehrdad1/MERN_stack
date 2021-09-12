import React, {useState} from 'react';

const UserInput = (props) =>{

    const {boxColorArr, setBoxColorArray} = props;
    
    const [color, setColor] = useState("");

    const submitHandler = (e)=>{

        e.preventDefault();
        setBoxColorArray([...boxColorArr, color])

    }
    return(
        <div>
            <form onSubmit={ submitHandler } style={{ margin: "20px" }}>
            <div>
                <label htmlFor="color">Color</label>
                <input 
                type="text" 
                name="color"
                onChange={ (e) => setColor(e.target.value) }
                />
            </div>
            <button>Add</button>
            </form>
  
        </div>

    );
}

export default UserInput;


