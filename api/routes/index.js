
const routes = require('express').Router();

const middleware = [
    require('./create.js'),
    require('./read.js'),
    require('./headers.js'),
    require('./update.js'),
    require('./delete.js')
]

const getRoutes = reqUrl => {
    routes.get( reqUrl, middleware);
    return routes;
}

module.exports = getRoutes;