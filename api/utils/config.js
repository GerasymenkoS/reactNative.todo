const
    session = require('express-session'),
    express = require('express'),
    db_url = 'mongodb://localhost:27017/mytodolist',
    mongoose = require('mongoose'),
    path = require('path'),
    sessionConfig = {
        secret : 'tvoya mamasha',
        name : 'session.auth',
        resave : false,
        saveUninitialized : true
    };
    
// ============ middlewares ==================
const
    headers = require('./headers'),
    bodyParser = require('body-parser'),
    cookieParser = require('cookie-parser'),
    auth = require('../routes/auth'),
    items = require('../routes/items'),
    error = require('../routes/error'),
    login = require('../routes/login'),
    root = require('../routes/root');

const doConfig = (app) => {
    // =============== set view engine ===================
    app.set('view engine', 'ejs');
    app.set('views', './views');
    app.use(express.static(path.join(__dirname, '../views/login')));
    app.use(express.static(path.join(__dirname, '../views/homepage')));


    //================== db connection ==================
    mongoose.connect(db_url);

    app.use( '/', bodyParser.json() );
    app.use( '/', cookieParser() );
    app.use( '/', session(sessionConfig) );
    app.use( '/', headers );
    
    app.use( '/auth', auth );
    app.use('/items', items), 
    app.use( '/login', login );
    app.use( '/', root );
    
    
    // error handling
    app.use( '/', error );

    // app.use( '/', express.static( getPath() ) );
    // app.use( '/login', express.static( joinPath(['login']) ) );
    // // app.use( root );
    // app.use( errors );

    
}


module.exports = doConfig;