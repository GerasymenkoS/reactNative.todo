const MongoClient = require('mongodb').MongoClient,
        url = 'mongodb://localhost:27017/mytodolist';

let db;


MongoClient.connect(url, (err, database) => {
    if (err) {
        throw err;
    } else {
        console.log('connected');
    }
    module.exports = database;
})

