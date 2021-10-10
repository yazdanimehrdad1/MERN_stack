const express = require("express");
const app = express();
port = 8000;

// this is required for req,res across ports
const cors = require('cors')
app.use(cors())  // This must come before trigering the routes


// this is required for post
require('./config/mongoose.config');               
app.use(express.json());                           
app.use(express.urlencoded({ extended: true }));   





require('./routes/restaurant.routes')(app);
app.listen(port, ()=> console.log(`Listening on port: ${port}`))

