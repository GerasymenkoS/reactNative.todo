
const create = (req, res, next) => {
    if(req.params.method === 'create') {
        console.log('create');
    }
    next();
}

module.exports = create;