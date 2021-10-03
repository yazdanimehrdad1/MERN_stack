const Joke = require("../models/joke.model")


const getAllJokes = (req, res)=> {
    Joke.find()
    .then( allJokes =>{
        res.json(allJokes)
    })
    .catch(
        (err)=> console.log('There was an error for finding all the jokes', err)   
    )
}

const getJokesById = (req,res)=>{
    Joke.find({_id : req.params._id})
    .then(
        (joke) =>{res.json(joke)}
    )
    .catch(
        (err)=> console.log('There was an error for finding a joke by ID', err)   
    )
}