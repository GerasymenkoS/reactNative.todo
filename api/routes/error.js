module.exports = (err, req, res, next) => {
    console.log(err);
    res.status(err);
    res.end(req.statusText);
};


const errors = {}