const express = require("express");
const app = express();
const port = 8000;

require("./server/config/mongoose.config");
const JokeRoutes = require("./server/routes/jokes.routes");

app.use(express.json(), express.urlencoded({ extended: true }));
app.listen(port, () => console.log(`Express running on port ${port}`));


JokeRoutes(app);

