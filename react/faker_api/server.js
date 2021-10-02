const express = require("express");
const faker = require("faker")
const app = express();
const port = 8000;
app.listen(port, ()=> console.log(`Listening on port : ${port}`))



const createUser =()=>{
    const newUser = {
        fname: faker.name.firstName(),
        lname: faker.name.lastName(),
        title : faker.name.title()
    }
    return newUser
}

const createCompany = ()=>{
    const newCompany={
        suffix: faker.company.suffixes(),
        companyName :faker.company.companyName(),
        phrase: faker.company.catchPhrase(),

    }

    return newCompany
}

app.get("/api/users/new", (req, res)=>{
    console.log(createUser())
    res.json(createUser());
})

app.get("/api/companies/new", (req,res)=>{
    res.json(createCompany())
})

app.get("/api/company/new", (req,res)=>{
    user = createUser()
    company = createCompany()
    res.json({...user, ...company})
})






