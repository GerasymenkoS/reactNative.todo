const 
    path = require('./getPath'),
    pathUtil = require('path');

const generateFunctions = ( indexName, folderName  ) => {
    const 
        router = require('express').Router(),
        indexRoot = folderName ? path.join([folderName]) : path.get();

    router.get(/\/(.*).(.*)/, ( req, res, next ) => {
        const filename = pathUtil.basename(req.url);
        res.sendFile( filename, { root : indexRoot } );
    })


    router.get('/', ( req, res, next ) => {
        if(!req.session.authorised && !indexRoot.includes('login')) {
            res.redirect('login');
            return;
        }
        res.sendFile( indexName, { root: indexRoot } );
    })

    return router;
}



module.exports = generateFunctions;