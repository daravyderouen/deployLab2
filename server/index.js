const express = require("express");

const path = require('path');

const app = express()

app.get("/", (req, res) => {   
    res.sendFile(path.join(__dirname, '../public/store.html'));

}) 

app.get('/styles.css', (req, res) => {
    res.sendFile(path.join(__dirname, '../public/styles.css'));
})

app.get('/', (req,res) => {
    res.sendFile(path.join(__dirname, '../server/index.js'));

});

app.get('/images/comfyblanket2.jpg', (req, res) => {
    res.sendFile(path.join(__dirname, '../images/comfyBlanket2.jpg'));
});

app.get('/js', (req, res) => {
    res.sendFile(path.join(__dirname, '../public/main.js'))
  })


  app.use('/js', express.static(path.join(__dirname, '../public/main.js')));

  app.use('/server/index.js', express.static(path.join(__dirname, '../server/index.js')));

  app.use('/images', express.static(path.join(__dirname, '../images')));

  app.use('/public/styles.css', express.static(path.join(__dirname, '../public/styles.css')));











const port = process.env.PORT || 4005 
app.listen(port, () => {  
    console.log(`My app is on fiya on port ${port}`)
})