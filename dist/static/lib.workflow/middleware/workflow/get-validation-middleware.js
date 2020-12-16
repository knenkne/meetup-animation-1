const handlers = require('../handlers')

const getValidationMiddleware = (params) => (req, res, next) => {

    res.locals.form.data = handlers.errorHandler(params, req) // eslint-disable-line no-param-reassign
    next()
}

module.exports = getValidationMiddleware
