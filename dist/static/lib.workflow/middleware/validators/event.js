const _ = require('lodash')

const { createValidationMessage } = require('./helpers')
const { ABSENT_PID, WRONG_PID, MISSING_QUERY_NAME } = require('./errors-map')
const { ERROR } = require('./message-types-map')

const eventRequest = (req, systemPID, state, params) => {
    let messages = []

    if (!req.query.pid && !req.query.documentId) {
        messages.push(createValidationMessage({ type: ERROR, title: ABSENT_PID, text: ABSENT_PID }))
    } else if (req.query.pid !== systemPID && !req.query.documentId) {
        messages.push(createValidationMessage({ type: ERROR, title: WRONG_PID, text: WRONG_PID }))
    }

    const eventName = _.get(req.query, 'name', '').toLowerCase()

    if (!eventName) {
        messages.push(createValidationMessage({ type: ERROR, title: MISSING_QUERY_NAME, text: MISSING_QUERY_NAME }))
    }

    const validate = _.get(params, ['states', state, 'events', eventName, 'validate'], null)

    if (validate) {
        const handlerMessages = validate(req.body.fields)
        if (!_.isEmpty(handlerMessages)) {
            messages = _.concat(messages, handlerMessages)
        }
    }

    return messages
}

module.exports = eventRequest
