import React, {useState, useEffect} from 'react'
import axios from 'axios'
import {Link, navigate} from '@reach/router'


const Edit = (props)=>{
    const {id} = props

    const [title, setTitle] = useState("")
    const [ age, setAge] = useState()
    const [bio, setBio] = useState("")
    const [errors, setErrors] = useState({})

    useEffect( ()=>{
        axios.get(`http://localhost:8000/api/project/${id}`)
        .then( res=>{
            console.log(res.data)

            setTitle(res.data.title)
            setAge(res.data.age)
            setBio(res.data.bio)

        })
        .catch(err => console.log(err))
    },[] )

    const handleFormSubmit = (e)=>{

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


        </form>
        

    </div>
    );
}

export default Edit