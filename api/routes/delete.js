
const deleteF = (req, res, next) => {
    if(req.params.method === 'delete') {
        console.log('delete');
    }
    next();
}




module.exports = deleteF;
