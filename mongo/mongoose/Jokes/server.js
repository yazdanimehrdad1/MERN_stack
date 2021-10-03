const express = require("express");
const app = express();
const port = 8000;

require("./server/config/mongoose.config");
app.use(express.json(), express.urlencoded({ extended: true }));

// const jokeApiRoutes = require("./server/routes/joke.routes");
// jokeApiRoutes(app);
app.listen(port, ()=> console.log(`connected to port ${port}`))