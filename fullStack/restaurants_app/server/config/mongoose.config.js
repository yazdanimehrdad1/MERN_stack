const mongoose = require("mongoose");

mongoose.connect("mongodb://localhost/restaurants",{
    useNewUrlParser: true,
    useUnifiedTopology: true,
})
.then( ()=> console.log("Established connection to the database"))
.catch( (err)=> console.log("There was an error connecting to the db",err))

