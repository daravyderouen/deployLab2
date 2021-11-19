//const PORT = process.env.PORT || 4005;
const express = require("express");
//const { Server } = require("http");

const path = require('path');

const app = express()

// include and initialize the rollbar library with your access token
const server = express()
var Rollbar = require("rollbar");
var rollbar = new Rollbar({
  accessToken: '6de733e5af174a459b2227c26a5497a1',
  captureUncaught: true,
  captureUnhandledRejections: true
});

// record a generic message and send it to Rollbar
rollbar.log("Hello world!");
let welcomeResponse = "Welcome to the API"
let names = ['Katie', 'Edrea', 'Cam']

// record a generic message and send it to Rollbar
// rollbar.warning("warning message")
// rollbar.critical("critical message")
// rollbar.log('Hello world!')
// rollbar.debug("Cron job starting");


app.get('/', function(req,res) {
    res.send('Request')
    if(!names.includes('Jerrell')){
        rollbar.warning('GET: Jerrell is not in array')
    }
})

app.post('/post', function(req,res) {
    res.send('Request')
    if(!names.includes('Jerrell')){
        rollbar.critical('POST: Student cannot post')
    }
})

app.put('/put', function(req,res) {
    res.send('Request')
    if(!names.includes('Jerrell')){
        rollbar.critical('PUT: Student name cannot be updated')
    }
})

app.delete('/delete', function(req,res) {
    res.send('Delete Request')
    .catch((err) => {
        Rollbar.error('DELETE: Student cannot be deleted')
    })
})

app.put('/put', function(req,res) {
    rollbar.info('Someone tried to update')
    res.send('Update data')
    .catch((err) => {
        const Error = err
        Rollbar.error(Error)
    })
})

app.post('/post', function(req,res) {
    let name = req.body
    rollbar.info('Someone tried to post')
    res.send('Post data')
    MrJamesArray.push(name)
    .catch((err) => {
        const Error = err
        Rollbar.error(Error)
    })
})

app.delete('/delete', function(req,res) {
    let name = req.body
    rollbar.info('Someone made an attempt to delete a user')
    res.send('Delete data')
    db("NAMES")
    .insert(name)
    .then((ids) => {
      res.status(201).json(ids);
    })
    .catch((err) => {
        const Error = err
        console.log('ERROR', Error)
        rollbar.error(Error)
    })
})


//ROLLBAR SECTION END/////////////////////////////////

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

server.use(rollbar.errorHandler());

app.listen(port, () => {  
    console.log(`My app is on fiya on port ${port}`)
})//changed app.listen to server.listen