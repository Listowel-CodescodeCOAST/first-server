const express = require("express");

const path = require("path");

const app = express( ); 

app.get("/", (req, res) => {
    res.send("<h1>Hello, World!</h1>");
});

app.get("/greet", (req, res) => {
    res.send("<h1>Hello, Everyone!!!</h1>");
})

app.listen(4000, () =>{
    console.log("🚀Server running on PORT 4000")
});