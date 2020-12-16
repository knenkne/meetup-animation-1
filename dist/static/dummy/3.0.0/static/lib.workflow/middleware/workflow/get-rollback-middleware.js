const handlers = require('../handlers')
const commands = require('../constants').workFlowCommands

const helpers = require('./helpers')

const getRollbackMiddleware = (params) => (req, res, next) => {

    const { form: { data } } = res.locals
    const { state } = global.flow

    if (helpers.shouldBeSkippedOnMessagesAndEnd(data.messages, state)) {
        return next()
    }

    const { cmd, name } = req.query

    if (cmd === commands.ROLLBACK) {
        res.locals.form.data = handlers.rollbackRequestHandler(params, name) // eslint-disable-line no-param-reassign
    }

    return next()
}

module.exports = getRollbackMiddleware
