const express = require("express");
const app = express();
require("dotenv").config();

const PORT = process.env.PORT || 8000;

app.get('/', (req,res) => {
    res.send("hello")
})

app.get('/name', (req,res) => {
    res.send(`The name is ${process.env.NAME}`)
})

app.listen(PORT, () => {
     console.log(`Listening on Port ${PORT}`)
})