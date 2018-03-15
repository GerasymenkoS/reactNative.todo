
const items = require('express').Router();

// const middlewares = [
//     require('./create.js'),
//     require('./read.js'),
//     require('./update.js'),
//     require('./delete.js')
// ]

// items.post('/items/:method', middlewares);


items.post('/items/:method', function (req, res, next) {
    const handler = require(`./${req.params.method}.js`);
    handler ? handler(...arguments) : next();
} )
module.exports = items;
