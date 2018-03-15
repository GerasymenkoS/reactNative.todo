const app = require('express')(),
    port = '1300',
    localtunnel  = require('localtunnel');
    config = require('./utils/config');
    config(app);

//===========  starting a server ======================
app.listen(port, () => {
    console.log('App is listening on port ' + port);
})


// localtunnel(port, (err, tunnel) => {
//     if(err) {
//         console.log(err);
//         return;
//     }
//     console.log(tunnel.url);
// });