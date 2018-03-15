const app = require('express')(),
    url = 'mongodb://localhost:27017/mytodolist',
    mongoose = require('mongoose'),
    port = '1300',
    path = require('path');
    bodyParser = require('body-parser'),
    cookieParser = require('cookie-parser'),
    localtunnel  = require('localtunnel');
    dirName = path.join(__dirname, '../client/dist');

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


app.get('/', (req, res) => {
    // console.log(req.cookies);
    // res.cookie('dirName', 'views');
    // res.render('index', {title : "this is shit"});
    // console.log(path.join(__dirname, '../client/dist', 'index.html'));
    res.sendFile(path.join(dirName, 'index.html'));

})

// app.get('/bundle.js', (req, res) => {
//     const fileName = req.url;
//     const { dirName } = req.cookies;

//     const fPath = path.join( __dirname, dirName, fileName );
//     res.sendFile( fPath );
//     // res.sendStatus(404);
// })
// app.get('/style.css', (req, res) => {
//     const fileName = req.url;
//     const { dirName } = req.cookies;

//     const fPath = path.join( __dirname, dirName, fileName );
//     res.sendFile( fPath );
//     // res.sendStatus(404);
// })


app.get(/(.*\..*)/, (req, res) => {
    const fileName = req.url;
    const fPath = path.join( dirName, 'build', fileName );
    res.sendFile( fPath );
})




//===========  starting a server ======================
app.listen(port, '0.0.0.0', () => {
    console.log('App is listening on port ' + port);
})


localtunnel(port, (err, tunnel) => {
    if(err) {
        console.log(err);
        return;
    }
    console.log(tunnel.url);
});