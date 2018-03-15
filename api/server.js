const express = require('express'),
    app = express(),
    port = '1300',
    db = require('./db.js');

const reqUrl = '/:method/:name/:surname/:status';
    
let counter = 0;
let routes = require('./routes')(reqUrl);

app.use( '/', routes);
app.get( reqUrl, (req, res) => {
    let {name, surname, status} = req.params;
    let person = { name, surname, status };
    // db.collection('persons').insertOne()
    res.send(person);
});


