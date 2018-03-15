const app = require('express')(),
    url = 'mongodb://localhost:27017/mytodolist',
    mongoose = require('mongoose'),
    port = '1300',
    path = require('path');
    bodyParser = require('body-parser'),
    cookieParser = require('cookie-parser');


// =============== set view engine ===================
app.set('view engine', 'ejs');
app.set('views', './views');


//=============   modules root folder ==================
global.__root = __dirname;


//================== db connection ==================
mongoose.connect(url);


//=============   middleware adding   =======================
let items = require('./routes/items');
let headers = require('./routes/headers')
app.use( bodyParser.json() );
app.use( cookieParser() );
app.use( headers );
app.use( '/', items);


app.get('/test', (req, res) => {
    console.log(req.cookies);
    res.cookie('dirName', 'views');
    res.render('index', {title : 'this is shit'});
    // res.sendFile( path.join(__dirname, 'views', 'index.html' ));
    // res.sendFile( path.join(__dirname, 'views', 'script.js' ));
})

app.get('/[A-Za-z]*.js', (req, res) => {
    console.log('get script');
    const fileName = req.url;
    const { dirName } = req.cookies;

    const fPath = path.join( __dirname, dirName, fileName );

    res.sendFile( fPath );
    // res.sendStatus(404);
})


//===========  starting a server ======================
app.listen(port, () => {
    console.log('App is listening on port ' + port);
})

