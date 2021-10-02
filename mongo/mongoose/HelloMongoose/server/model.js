const mongoose = require('mongoose')
mongoose.connect('mongodb://localhost/Form',{
    useNewUrlParser: true,
    useUnifiedTopology:true
})
.then(()=>{
    console.log("Established a connection to the database")
})
.catch( err => {
    console.log("There was an error")
    console.log(err)
})


const UserSchema = new mongoose.Schema({
    name: String,
    age: Number
})

const User = mongoose.model('User', UserSchema);

module.exports = User;
