import React, {useState, useEffect} from 'react';
import axios from 'axios';
import PersonForm from '../components/PersonForm'
import PersonList from '../components/PersonList';


const Main = ()=>{

    const [ message, setMessage] = useState("Loading...")
    const [loaded, setLoaded] = useState(false)
    const [people, setPeople] = useState([])


    useEffect(() => {
        axios.get("http://localhost:8000/api")
        .then( res => setMessage(res.data.message))
    }, []);

    useEffect(() => {
        axios.get("http://localhost:8000/api/people")
        .then(res=>{
            setPeople(res.data);
            setLoaded(true)
        })

    }, [])



    return(
        <div>
            <h2> Message from the backend: {message}</h2>
            <PersonForm />
            <hr/>
            { loaded && <PersonList people={people} /> }
        </div>
    )
}

export default Main;