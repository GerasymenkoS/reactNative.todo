const router = require('express').Router();

const checkLogin = ( req, res, next ) => {
    if(!req.session.authorised && !req.url.includes('login') && !req.url.includes('auth')) {
        console.log(req.session.authorised);
        console.log(req.url);
        res.redirect('/login');
        console.log('redirect');
        return;
    }
    next();
};

router.use(checkLogin);


module.exports = router;