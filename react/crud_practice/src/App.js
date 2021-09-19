import logo from './logo.svg';
import './App.css';
import React, {useState} from 'react'

function App() {

  const [skill, setSkill] = useState("");
  const [skillArr, setSkillArr] = useState([])

  const handleSubmitSkill = (e)=>{
    e.preventDefault();

    const newSkil = {
      skill:skill,
      level :1
    }
    setSkillArr([newSkil, ...skillArr])

    setSkill("")
  };


  const handleIncreaseSkillLevel = (index)=>{
    const skillToUpdate = {...skillArr[index]}
    skillToUpdate.level ++;
    setSkillArr([...skillArr.slice(0,index), skillToUpdate].concat(skillArr.slice(index+1)))
    console.log(skillToUpdate)
  }

  // console.log(skillArr)


  return (
    <div>
      <h1> You got mad skills </h1>
      <form onSubmit={handleSubmitSkill}>
        <h3> Add a skill</h3>
        <input value={skill} type="text" onChange={(e)=> setSkill(e.target.value)} ></input>
        <input type="submit"></input>
      </form>

      <h1> All Skills</h1>

      {skillArr.map((element, index) => (
        <div key={index}>
          <p>Skill: {element.skill}</p>
          <p>Level: {element.level}</p>
          <button onClick={() => handleIncreaseSkillLevel(index)}>Level Up</button>
          <hr></hr>
          
        </div>
      ))}

  


    </div>
  );
}

export default App;
