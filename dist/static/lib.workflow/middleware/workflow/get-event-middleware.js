const handlers = require('../handlers')
const constants = require('../constants')

const helpers = require('./helpers')

const eventMiddleware = (params) => (req, res, next) => {

    const { form: { data } } = res.locals
    const { state } = global.flow

    if (helpers.shouldBeSkippedOnMessages(data.messages)) {
        return next()
    }

    const { cmd, name } = req.query

    if (cmd === constants.workFlowCommands.EVENT) {
        if (name === constants.eventNames.ON_ENTER) {
            res.locals.form.data = handlers.onEnterHandler(params, state, req) // eslint-disable-line no-param-reassign
        } else {
            res.locals.form.data = handlers.eventRequestHandler(params, state, req, res) // eslint-disable-line no-param-reassign
        }
    }

    return next()
}

module.exports = eventMiddleware
