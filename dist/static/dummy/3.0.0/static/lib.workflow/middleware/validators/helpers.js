const _ = require('lodash')

const { messageType } = require('../workflow/json')
const { DEFAULT_MESSAGE_UUID } = require('../constants')

const { VALIDATION } = require('./message-types-map')

const messageFactory = (messageProperties, map) => {
    const result = _(map)
        .mapValues((value, key) => _.get(messageProperties, key, value))
        .omitBy((value, key) => key === 'code' && !_.has(messageProperties, key))
        .value()

    return result
}

const createValidationMessage = (messageObj) => messageFactory(_.merge({}, messageObj, { uuid: DEFAULT_MESSAGE_UUID }), messageType)

const createMessageWithValidationError = (title, text, code, uuid = DEFAULT_MESSAGE_UUID) => messageFactory({
    type: VALIDATION,
    title,
    text,
    code,
    uuid
}, messageType)

const doesEventExist = (event, events) => _.has(events, event)

module.exports = {
    messageFactory,
    createValidationMessage,
    createMessageWithValidationError,
    doesEventExist
}
