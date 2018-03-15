const 
    path = require('./getPath'),
    pathUtil = require('path');

const generateFunctions = ( indexName ) => {
    const router = require('express').Router();

    router.get('/', ( req, res, next ) => {
        res.render(indexName);
    })

    return router;
}



module.exports = generateFunctions;