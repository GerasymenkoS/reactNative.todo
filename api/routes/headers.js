
const headers = (req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    console.log('headers added');
    next();
}

module.exports = headers;
