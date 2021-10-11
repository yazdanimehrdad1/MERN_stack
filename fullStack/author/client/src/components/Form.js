import axios from 'axios'
import { set } from 'mongoose'
import React, {useState, useEffect} from 'react'
import {Link} from '@reach/router'




const Form = (props)=>{

    const [title, setTitle] = useState("")
    const [ age, setAge] = useState()
    const [bio, setBio] = useState("")
    const [errors, setErrors] = useState({})
    
    
    const handleFormSubmit = (e)=>{
        e.preventDefault()

        const newAuthor ={
            title,
            age,
            bio
        };

        axios.post("http://localhost:8000/api/project", newAuthor )
        .then( response => console.log(response))
        .catch( err => console.log(err))

        setTitle("")
        setAge("")
        setBio("")
    }


    return(

        <div className="container">

            <form onSubmit={handleFormSubmit}>


                <label htmlFor="title">Title</label>
                <input
                    id="title"
                    name="title"
                    type="text"
                    value = {title}
                    onChange = {e => setTitle(e.target.value)}
                ></input>


                <label htmlFor="age">age</label>
                <input
                    id="age"
                    name="age"
                    value = {age}
                    type="number"
                    onChange = {e => setAge(e.target.value)}
                ></input>


                <label htmlFor="bio">Bio</label>
                <input
                    id="bio"
                    name="bio"
                    value = {bio}
                    type="text"
                    onChange = {e => setBio(e.target.value)}
                ></input>

                <button type="submit">Add Author</button>

                <Link to="/">To Home</Link>


            </form>
            

        </div>

    );
}

export default Form