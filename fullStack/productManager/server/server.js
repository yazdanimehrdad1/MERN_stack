const express = require('express')
const app = express()
const cors = require('cors')
const port = 8000
require('./config/mongoose.config')

app.use(cors())
app.use(express.json())
app.use(express.urlencoded({ extended: true })); 
require('./routes/person.routes')(app);
app.listen(port, ()=>console.log(`Listening on port: ${port}`)) ;




// const express = require('express');
// const cors = require('cors');
// const app = express();
// require('./config/mongoose.config');               /* This is new */
// app.use(cors());
// app.use(express.json());                           /* This is new */
// app.use(express.urlencoded({ extended: true }));   /* This is new */
// require('./routes/person.routes')(app);
// app.listen(8000, () => {
//     console.log("Listening at Port 8000")
// })
