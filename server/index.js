const express = require("express");

const path = require('path');

const app = express()

app.get("/", (req, res) => {   
    res.sendFile(path.join(__dirname, '../store.html'));

}) 














const port = process.env.PORT || 4005 
app.listen(port, () => {  
    console.log(`My app is JAMMIN on port number ${port}`)
})