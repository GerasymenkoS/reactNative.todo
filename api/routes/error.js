module.exports = (err, req, res, next) => {
    console.log(err);
    res.status(req.statusCode || 500);
    res.end(err);
};
