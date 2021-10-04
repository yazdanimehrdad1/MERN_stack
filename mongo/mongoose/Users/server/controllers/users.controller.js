const User = require('../models/users.model');



const findAllUsers = (req, res) =>{
    User.find()
    .then( allData => res.json({users: allData}))
    .catch(err => console.log("err in findAllUsers"))
}

const findOneSingleUser = (req, res) => {
    console.log(req.params.id)
    User.findOne({ _id: req.params.id })
        .then((singleUser) => res.json(singleUser))
        .catch(err => res.json({ message: 'Something went wrong', error: err }));
}

const createNewUser = (req, res) => {
    User.create(req.body)
        .then(newlyCreatedUser => res.json({ user: newlyCreatedUser }))
        .catch(err => res.json({ message: 'Something went wrong', error: err }));
}

const updateExistingUser = (req, res) => {
    User.findOneAndUpdate(
        { _id: req.params._id },
        req.body,
        { new: true, runValidators: true }
    )
        .then(updatedUser => res.json({ user: updatedUser }))
        .catch(err => res.json({ message: 'Something went wrong', error: err }));
}

const deleteAnExistingUser = (req, res) => {
    User.deleteOne({ _id: req.params._id })
        .then(result => res.json(result))
        .catch(err => res.json({ message: 'Something went wrong', error: err }));
}

module.exports = {
    findAllUsers,
    findOneSingleUser,
    createNewUser,
    updateExistingUser,
    deleteAnExistingUser,

}