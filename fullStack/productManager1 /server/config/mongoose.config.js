const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017/productDB')
.then( ()=> console.log("Established connection to the DB"))
.catch((err)=> console.log("something went wrong when connecting to mongoDB", err))