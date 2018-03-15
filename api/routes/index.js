const router = require('express').Router();

const routes = [
    require('./items'),
    require('./error')
]

router.use(routes);

module.exports = router;