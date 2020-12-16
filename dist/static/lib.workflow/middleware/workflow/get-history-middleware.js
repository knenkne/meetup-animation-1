const utils = require('../utils')

const helpers = require('./helpers')

const getHistoryMiddleware = (params) => (req, res, next) => {

    const { state } = global.flow

    if (helpers.shouldBeSkippedOnEnd(state)) {
        return next()
    }

    const { history, mappings, values, flowName } = global.flow
    const { states } = params

    res.locals.form.data.history = utils.buildHistory(history, mappings, flowName, states, values) // eslint-disable-line no-param-reassign
    return next()
}

module.exports = getHistoryMiddleware
