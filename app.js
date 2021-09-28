const express = require('express');

const PORT = 2021

const app = express();

app.get('/', function(req, res) {
    res.send("hello world")
})

app.listen(PORT, ()=> { 
    console.log(`App listening on http://localhost:${PORT}`)
})