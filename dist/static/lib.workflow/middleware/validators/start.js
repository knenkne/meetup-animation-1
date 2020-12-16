const { createValidationMessage } = require('./helpers')
const { MISSING_QUERY_NAME } = require('./errors-map')
const { ERROR } = require('./message-types-map')

const startRequest = (req) => {
    const errors = []

    if (!req.query.name) {
        errors.push(createValidationMessage({ title: MISSING_QUERY_NAME, text: MISSING_QUERY_NAME, type: ERROR }))
    }

    return errors
}

module.exports = startRequest
