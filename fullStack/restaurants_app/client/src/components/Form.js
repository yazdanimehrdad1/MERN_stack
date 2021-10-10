import React, {useState} from 'react';
import axios from 'axios';
import "../App.css";
import {Link, navigate} from '@reach/router'
const cuisineOPtions = ["Mexican", "Pizza", "Burgers"]



const Form = (props)=>{
    
    const [name, setName] = useState("");
    const [cuisine, setCuisine] = useState("");
    const [hasDelivery, setHasDelivery] = useState(false);
    const [dishImg, setDishImg] = useState("");
    const [errors, setErrors] = useState({});

    const handleCancel = (e)=>{
        navigate('/')

    }

    const handleSubmit = (e)=>{

        e.preventDefault()

        const newRestaurant = {
            name,
            cuisine,
            hasDelivery,
            dishImg
        }

        axios.post("http://localhost:8000/api/restaurant", newRestaurant)
        .then( response => {
                console.log(response);
                navigate('/')
            })
        .catch( (err)=> {
            console.log(err.response.data.errors)
            setErrors(err.response.data.errors)
        })

    }
    
    return(

        <div>
            <h2>Add Favorit restaurants</h2>
            <form onSubmit={handleSubmit}>
                <div>
                    <label className="form-label" htmlFor="restName">Name:</label>
                    <input
                        id="restName"
                        name="restName"
                        type="text"
                        onChange={(e) => setName(e.target.value)}
                        value={name}
                    />
                    {errors && errors.name && (
                    <p className="error-text">{errors.name.message}</p>
                    )}
                </div>


                <div>
                    <label className="form-label" htmlFor="cuisine">Cuisine:</label>
                    <select
                    id="cuisine"
                    name="cuisine"
                    onChange={(e) => setCuisine(e.target.value)}
                    value={cuisine}
                    >
                    {/* {cuisineOptions.map((cuisine, index) => (
                <option value={cuisine} key={index}>
                    {cuisine}
                </option>
                ))} */}
                    <option>--------</option>
                    <option value="Mexican">Mexican</option>
                    <option value="Pizza">Pizza</option>
                    <option value="Burgers">Burgers</option>
                    </select>
                    {errors && errors.cuisine && (
                    <p className="error-text">{errors.cuisine.message}</p>
                    )}
              </div>


              <div>
                Delivery?
                <input
                  type="checkbox"
                  onChange={() => setHasDelivery(!hasDelivery)}
                  readOnly
                  checked={hasDelivery}
                />
              </div>
              <div>
                Dish Image Url
                <input
                  type="text"
                  onChange={(e) => setDishImg(e.target.value)}
                  value={dishImg}
                />
              </div>
              <button type="submit">Add Restaurant</button>

              <button
                type="button"
                id="right-form-btn"
                onClick={() => handleCancel()}
              >
                Cancel
              </button>
            </form>

        </div>
    )
}


export default Form