const router = require('express').Router();
const UserModel = require('../models/users');

const doLogin = async (req, res, next) => {
    const { login, password } = req.query;
    const dbUsers = await UserModel.find({login});
    dbUsers.forEach( dbUser => {
        if(dbUser.password === password) {
            req.session.authorised = true;
            req.session.login = login;
            res.redirect('/');
            return;
        }
    });
    if ( !req.session.authorised ) { 
        req.statusText = 'Wrong login or password';
        next(400);
     }
};

const doLogout = ( req, res, next ) => {
    req.session.destroy();
    res.redirect('/login');
};


const actions = {
    'login' : doLogin,
    'logout' : doLogout
}

router.use(( req, res, next ) => {
    const type = req.query.type;
    actions[type](req, res, next);
})



// router.use(loginPageUrl, ( req, res, next ) => {
//     const fPath = ['login.html'];
//     req.session.authorising = true;
//     res.sendFile( path.join( fPath ) )
// })


module.exports = router;