//const PORT = process.env.PORT || 4005;
const express = require("express");
//const { Server } = require("http");

const path = require('path');

const app = express();

// include and initialize the rollbar library with your access token

var Rollbar = require("rollbar");
var rollbar = new Rollbar({
  accessToken: '6de733e5af174a459b2227c26a5497a1',
  captureUncaught: true,
  captureUnhandledRejections: true
});

// record a generic message and send it to Rollbar
rollbar.log("Hello world!");

app.get("/", (req, res) => {
    rollbar.info('This Week Sucks!')
    res.sendFile(path.join(__dirname, '../public/store.html'));
});

//app.get("/", (req, res) => {   
   // res.sendFile(path.join(__dirname, '../public/store.html'));

//});

app.get('/style.css', (req, res) => {
    res.sendFile(path.join(__dirname, '../public/style.css'));
});

//app.get('/', (req,res) => {
    //res.sendFile(path.join(__dirname, '../server/index.js'));

//});

app.get('/images/comfyblanket2.jpg', (req, res) => {
    res.sendFile(path.join(__dirname, '../images/comfyBlanket2.jpg'));
});

app.get('/js', (req, res) => {
    res.sendFile(path.join(__dirname, '../public/main.js'))
  })


app.use('/js', express.static(path.join(__dirname, '../public/main.js')));

app.use('/server/index.js', express.static(path.join(__dirname, '../server/index.js')));

app.use('/images', express.static(path.join(__dirname, '../images')));

app.use(express.static(__dirname +'../public'));

app.use(rollbar.errorHandler());










const port = process.env.PORT || 4005 
app.listen(port, () => {  
    console.log(`My app is on fiya on port ${port}`)
})//changed app.listen to server.listen