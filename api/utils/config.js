const
    session = require('express-session'),
    express = require('express'),
    db_url = 'mongodb://localhost:27017/mytodolist',
    mongoose = require('mongoose'),
    getPath = require('./getPath').get,
    joinPath = require('./getPath').join,
    sessionConfig = {
        secret : 'tvoya mamasha',
        name : 'session.auth',
        resave : true,
        saveUninitialized : true
    };
    
// ============ middlewares ==================
const
    headers = require('./headers'),
    bodyParser = require('body-parser'),
    cookieParser = require('cookie-parser'),
    login = require('../routes/login'),
    root = require('../routes/root'),
    auth = require('../routes/auth'),
    items = require('../routes/items');
    // errors = require('../routes/error')

const doConfig = (app) => {
    // =============== set view engine ===================
    // app.set('view engine', 'ejs');
    // app.set('views', './views');

    //================== db connection ==================
    mongoose.connect(db_url);

    app.use( '/', headers );
    app.use( '/', bodyParser.json() );
    app.use( '/', cookieParser() );
    app.use( '/', session(sessionConfig) );

    app.use( '/login', login );
    app.use( '/items', items);
    app.use( '/auth', auth );
    app.use( '/', root );

    // app.use( '/', express.static( getPath() ) );
    // app.use( '/login', express.static( joinPath(['login']) ) );
    // // app.use( root );
    // app.use( errors );

    
}


module.exports = doConfig;