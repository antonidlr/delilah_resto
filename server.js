const express = require('express');
const bodyParser = require('body-parser');
const port = 3000;
const app = new express();

let users = [
    {
        username: "username",
        name: "name",
        lastnamer: "lastname",
        email: "email",
        phone: "phone",
        address: "address",
        pass: "password"
    }
]

let products = [
    {
        id: "id",
        name: "name",
        price: "price",
        image: "image"
    }
]

//Middleware

app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());


app.get("/", (req, res) => {
    res.send("Hola API");
})

app.get("/products", (req, res) => {
    res.send(products);
})

//Register

app.post("/register", (req, res) => {
    let username = req.body.username;
    let name = req.body.name;
    let lastname = req.body.lastname;
    let email = req.body.email;
    let phone = req.body.phone;
    let address = req.body.address;
    let pass = req.body.pass;

    users.push({
        username: username,
        name: name,
        lastname: lastname,
        email: email,
        phone: phone,
        address: address,
        pass: pass
    });

    res.send({
        code: 200,
        msg: "User was created"
    });

})

// LOGIN

app.post("/login", (req, res) => {
    let email = req.body.email;

})

app.listen(port, () => {
    console.log('Web Server running port: ' + port);
})


