// const express = require('express')
// const app = express()
// port = 8000
// const cors = require('cors');
// require('./routes/product.routes')(app);



// app.use(cors()) 
// app.listen(port, ()=> console.log(`Listening on port ${port}`))

const express = require('express');
const cors = require('cors')    
const app = express();
app.use(cors()) 

require('./config/mongoose.config')
app.use(express.json())
app.use(express.urlencoded({ extended: true }));

require('./routes/product.routes')(app);
app.listen(8000, () => {
    console.log("Listening at Port 8000")
})