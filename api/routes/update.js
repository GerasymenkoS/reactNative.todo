
const update = (req, res, next) => {
    if(req.params.method === 'update') {
        console.log('update');
    }
    next();
}

module.exports = update;