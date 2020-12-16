const jsonSchemaValidationMiddleware = require('./json-schema-validation-middleware')
const getInitialMiddleware = require('./get-initial-middleware')
const responseMiddleware = require('./response-middleware')
const getValidationMiddleware = require('./get-validation-middleware')
const getStartMiddleware = require('./get-start-middleware')
const getEventMiddleware = require('./get-event-middleware')
const getRollbackMiddleware = require('./get-rollback-middleware')
const getHistoryMiddleware = require('./get-history-middleware')
const getPersistedFieldsMiddleware = require('./get-persisted-fields-middleware')
const helpers = require('./helpers')

helpers.flushServerState()

const flowFactory = (params, { disableSchemaValidation = false } = {}) => {
    const middlewares = []

    if (!disableSchemaValidation) {
        middlewares.push(jsonSchemaValidationMiddleware(params))
    }

    middlewares.push(getInitialMiddleware(params))
    middlewares.push(getValidationMiddleware(params))
    middlewares.push(getStartMiddleware(params))
    middlewares.push(getRollbackMiddleware(params))
    middlewares.push(getEventMiddleware(params))
    middlewares.push(getHistoryMiddleware(params))
    middlewares.push(getPersistedFieldsMiddleware)
    middlewares.push(responseMiddleware)

    return middlewares
}

module.exports = flowFactory
module.exports.helpers = helpers
