const 
    path = require('../utils/getPath'),
    router = require('express').Router(),
    pathUtil = require('path'),
    fileHandler = require('../utils/fileHandler');

// router.get(/\/(.*).(.*)/, ( req, res, next ) => {
//     const filename = pathUtil.basename(req.url);
//     res.sendFile( filename, { root : path.join( ['login'] ) } );
// })

// router.get('/', ( req, res, next ) => {
//     res.sendFile('login.html', { root: path.join( ['login'] ) } );
// })




module.exports = fileHandler( 'login' );