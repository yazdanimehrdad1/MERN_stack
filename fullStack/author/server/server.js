require('dotenv').config();



const express = require('express');
const app = express();
const cors = require('cors');

const jwt = require("jsonwebtoken");
const cookieParser = require('cookie-parser');


app.use(express.json());                           
app.use(express.urlencoded({ extended: true }));   
app.use(cookieParser());
app.use(cors(
    {
    credentials:true,
    origin: "http://localhost:3000",
    }
));

require('./routes/project.routes')(app);
require('./routes/user.routes')(app);
require('./config/mongoose.config')(process.env.DB_NAME);               




app.listen(process.env.DB_PORT, () => {
    console.log(`Listening at Port ${process.env.DB_PORT}`)
})

