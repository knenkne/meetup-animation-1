const _ = require('lodash')

const getInitialMiddleware = (params) => (req, res, next) => {
    global.flow.state = global.flow.state || params.start
    global.flow.stack = global.flow.stack || []
    global.flow.flowName = req.baseUrl
    res.locals.form = { data: {} } // eslint-disable-line no-param-reassign, comment: Расширение стандартного объекта express
    res.locals.end = _.get(params, 'end', []) // eslint-disable-line no-param-reassign, comment: Расширение стандартного объекта express
    next()
}

module.exports = getInitialMiddleware
