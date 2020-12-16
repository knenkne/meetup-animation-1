const { createValidationMessage } = require('./helpers')
const { MISSING_QUERY_CMD } = require('./errors-map')
const { ERROR } = require('./message-types-map')

const coreQuery = (req) => {
    const errors = []

    if (!req.query.cmd) {
        const error = createValidationMessage({ title: MISSING_QUERY_CMD, text: MISSING_QUERY_CMD, type: ERROR })
        errors.push(error)
    }

    return errors
}

module.exports = coreQuery
