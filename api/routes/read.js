
const read = (req, res, next) => {
    if(req.params.method === 'read') {
        console.log('read');
    }
    next();
}

module.exports = read;