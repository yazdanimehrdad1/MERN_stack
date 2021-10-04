const express = require("express");
const app = express();

app.use(express.json(), express.urlencoded({ extended: true }));
app.listen(8000, ()=> console.log("we are running on port 8000"))

require("./server/config/mongoose.config");

const AllmyUsersRoutes = require("./server/routes/users.routes")
AllmyUsersRoutes(app)