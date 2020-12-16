const handlers = require('../handlers')
const commands = require('../constants').workFlowCommands

const helpers = require('./helpers')

const startMiddleware = (params) => (req, res, next) => {

    const { form: { data } } = res.locals
    const { state } = global.flow

    if (helpers.shouldBeSkippedOnMessagesAndEnd(data.messages, state)) {
        return next()
    }

    const { cmd } = req.query

    if (cmd === commands.START) {
        /* В качестве имени для flow используем его URL, чтобы избежать проблем при переключении между flow. */
        res.locals.form.data = handlers.startRequestHandler(params, global.flow.flowName, state, req) // eslint-disable-line no-param-reassign
    }

    return next()
}

module.exports = startMiddleware
