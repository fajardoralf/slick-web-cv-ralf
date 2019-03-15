const express = require('express');
const fs = require('fs');
const path = require('path');
const app = express();
const pug = require('pug');
const port = 8081

// load data from data.json
let rawData = fs.readFileSync("person.json");
const data = JSON.parse(rawData);

// Set static resources
app.use(express.static(path.join(__dirname + '/resources')));


// pug
app.set('view engine', 'pug')

// routes
app.get('/data', (req, res) => res.send(data));

app.get('/', (req, res) => {
   res.render('index', data)
});

app.get('/resume', (req, res) => {
   res.render('resume', data)
});

app.listen(process.env.PORT || port)