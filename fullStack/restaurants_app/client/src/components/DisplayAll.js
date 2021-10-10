import React, {useState, useEffect} from 'react';
import axios from 'axios';
import {Link, navigate} from "@reach/router"


const DisplayAll = ()=>{
    
    const [ restaurants, setRestaurants] = useState([])
    const [ itemDeleted, setItemDeleted] = useState(false)

    useEffect(()=>{
        axios.get("http://localhost:8000/api/restaurant")
        .then(res => {
            setRestaurants(res.data);
            console.log(res.data);
            })

    },[itemDeleted])
    
    
    const handleEditClick = (id)=>{

        navigate(`/edit/${id}`)

    }

    const handleDeleteRestaurant = (id, index)=>{
        console.log(id)
        axios.delete(`http://localhost:8000/api/restaurant/${id}`)
        .then( (res)=>{
            console.log(res);
            setItemDeleted(!itemDeleted);

        })
        .catch((err)=> console.log(err))

    }
    
    return(
        <div className="container">
            <div className="row">
                <div className="col-10">
                <Link to="/new">Add a restaurant</Link>
                <p className="pink-text">We have restaurtants:</p>




                <table className="table">
                    <thead>
                    <tr>
                        <th>Name</th>
                        <th>Cuisine</th>
                        <th>Delivers?</th>
                        <th>Img URL</th>
                        <th>Actions Available</th>
                    </tr>
                    </thead>
                    <tbody>

                        
                     {restaurants.map((element, index) => (
                        <tr key={index}>
                        <td>{element.name}</td>
                        <td>{element.cuisine}</td>
                        {element.hasDelivery ? <td>Yes</td> : <td>No</td>}
                        <td>
                            {element.dishImg && (
                            <img className="table-img" src={element.dishImg} alt="" />
                            )}
                        </td>
                        <td>
                            <button
                            type="button"
                            className="btn btn-warning"
                            onClick={() => handleEditClick(element._id)}
                            >
                            Edit
                            </button>
                            <button
                            id="right-form-btn"
                            type="button"
                            className="btn btn-danger"
                            onClick={() => handleDeleteRestaurant(element._id, index)}
                            >
                            DELETE
                            </button>
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