const express = require("express");
const app = express();
const port = 8000;


app.listen(port, ()=> console.log(`Listening on port : ${port}`))
app.use( express.json() );
app.use( express.urlencoded({ extended: true }) );

///////////////////////////////Get Data///////////////////////////////////////////

app.get("/api", (req,res) =>{
    res.json({message: "Hello World"});
})



const users = [
    { firstName: "Reimu",  lastName: "Hakurei"    },
    { firstName: "Marisa", lastName: "Kirisame"   },
    { firstName: "Sanae",  lastName: "Kochiya"    },
    { firstName: "Sakuya", lastName: "Izayoi"     },
    { firstName: "Momiji", lastName: "Inubashiri" }
];


app.get("/api/users", (req, res) =>{
    res.json(users)
})


///////////////////////////////Post Data///////////////////////////////////////////
//In order to be able to access POST data, we need to be able to pull it out of the 
//request object. To do this, we first have to add a new setting to our server.js file:
// make sure these lines are above any app.get or app.post code blocks
//app.use( express.json() );
//app.use( express.urlencoded({ extended: true }) );
// both express.urlencoded() and express.json() are Express middleware functions. They are 
// responsible for providing and parsing the request.body data.


app.post("/api/users", (req, res)=>{
    console.log(req.body);
    users.push(req.body);
    res.json({status:"OK"})
})



///////////////////////////////Route Parameters///////////////////////////////////////////
app.get("/api/users/:id", (req, res)=>{
    console.log(req.params.id);
    res.json( users[req.params.id]);
})


///////////////////////////////Update Data///////////////////////////////////////////

app.put("/api/users/:id", (req,res)=>{
    const id = req.params.id

    users[id] = req.body;

    res.json({ status:"OK"})
})

///////////////////////////////Delete Data///////////////////////////////////////////
app.delete("/api/users/:id", (req, res)=>{
    const id = req.params.id;

    users.splice(id,1)
    res.json({status:"Deleted"})
})


