const Restaurant = require('../models/restaurant.model')


module.exports.index = (req, res)=>{
    res.json(
        {
            message: "connection from back-end is setup"
        }
    )
}

module.exports.createRestaurant= (req, res)=>{
    // req.body is form data object
    Restaurant.create(req.body)
      // success case send client new restqurant doc
      .then((newlyCreatedRestaurant) => res.json(newlyCreatedRestaurant))
      .catch((err) => res.status(400).json(err));
  };


module.exports.getAllRestaurant = (req,res)=>{
    Restaurant.find({})
    .then(allRestaurants => res.json(allRestaurants))
    .catch(err => res.status(400).json(err))
}

module.exports.getOneRestaurant = (req, res)=>{
    Restaurant.findOne({_id:req.params.id})
    .then( oneRestaurant => res.json(oneRestaurant) )
    .catch( err => res.status(400).json(err))
}


module.exports.updateController = (req, res)=>{
    Restaurant.findOneAndUpdate({_id:req.params.id}, req.body, {new:true , runValidators:true})
    .then( (result)=> res.json(result))
    .catch(err => res.status(400).json(err))
}

module.exports.deleteRestaurant = (req,res)=>{
    Restaurant.deleteOne({_id:req.params.id})
    .then(result=> res.json(result))
    .catch(err => res.json(err))
}