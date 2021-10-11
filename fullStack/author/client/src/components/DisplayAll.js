import React, {useState, useEffect} from 'react'
import axios from 'axios'
import {Link, navigate} from '@reach/router'
import { set } from 'mongoose'

const DisplayAll = (props)=>{

    const [authors, setAuthors] = useState([])
    const [seccessDelete, setSuccessDelete] = useState(false)


    useEffect( ()=>{
        axios.get("http://localhost:8000/api/project")
        .then( response => setAuthors(response.data) )
    },[] )


    const handleEdit = (id, index)=>{

        navigate(`/edit/${id}`)

    }

    const handleDelete = (id, index)=>{

        console.log("id received to delete",id)

        axios.delete(`http://localhost:8000/api/project/${id}`)
        .then( response =>  {
                console.log(response);

                const authorArrCopy =  [...authors]
                const authorFilter = authorArrCopy.filter( 
                    (element, idx)=>(idx != index)
                )

                setAuthors(authorFilter)
        })
        .catch( err => console.log(err))




    }


    return(


        <div className="container">
            <div className="row">
                <div className="coll-10">

                <Link to="/new">Add an Author</Link>
                <table className="table">
                    <thead>
                        <tr>
                        <th>Title</th>
                        <th>Age</th>
                        <th>Available Actions</th>
                        </tr>
                    </thead>

                    <tbody>
                        {authors.map( (element, idx)=>( 

                            <tr key={idx}>
                                <td>{element.title}</td>

                                <td>{element.age}</td>

                                <td>
                                    <button
                                        onClick ={() => handleEdit(element._id, idx)}

                                    >Edit</button>
                                    <button
                                        onClick= {()=> handleDelete(element._id, idx)}
                                    >Delete</button>
                                </td>

                                
                                
                            </tr>


                        ))}

                    </tbody>



                </table>


                </div>
            </div>
        </div>
    )
}

export default DisplayAll