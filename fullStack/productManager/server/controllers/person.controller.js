const { response } = require('express');
const Person = require('../models/person.model');

module.exports.index =(request, response)=>{
    response.json({
        message: "Hello World"
    })
}

module.exports.createPerson = (request, response) =>{
    const {firstName, lastName} = request.body;
    Person.create({
        firstName, lastName
    })
    .then(Person => response.json(person))
    .catch(err => response.json(err))

}



module.exports.getAllPeople = (request, response)=>{
    Person.find({})
    .then(persons => response.json(persons))
    .catch(err => response.json(err))
}


module.exports.getPerson = (request, response)=>{
    Person.findOne({_id: request.params.id})
    .then( person => response.json(person))
    .catch( err=> response.json(err))
}

module.exports.updatePerson = (request,response)=>{
    Person.findByIdAndUpdate({_id: request.params.id}, request.body, {new:true})
    .then(updatedPerson =>{ response.json(updatedPerson)})
    .catch(err => response.json(err))
}




// const Person = require('../models/person.model');    /* this is new */
// module.exports.index = (request, response) => {
//     response.json({
//         message: "Hello World"
//     });
// }
//           /* The method below is new */
// module.exports.createPerson = (request, response) => {
//     const { firstName, lastName } = request.body;
//     Person.create({
//         firstName,
//         lastName
//     })
//         .then(person => response.json(person))
//         .catch(err => response.json(err));
// }

