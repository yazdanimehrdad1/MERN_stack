const mongoose = require('mongoose');


const ProjectSchema = new mongoose.Schema({
    title:{
        type:String,
        required:[true, "Must have title"],
        minlength: [3, "Must be greater than 3 characters"]
        
    },
    price:{type: Number,
        required:[true, "Must include the price"],
    
    },
    description:{type:String}
},{timestamps:true});

module.exports = mongoose.model('Project', ProjectSchema);