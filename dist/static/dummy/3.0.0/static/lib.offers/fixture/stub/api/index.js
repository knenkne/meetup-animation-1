const router = require('express').Router()

module.exports = router
    .use(require('./public-stub'))
    .use(require('./fixture-stub'))
    .use('/api/offers', require('./public-stub'))
