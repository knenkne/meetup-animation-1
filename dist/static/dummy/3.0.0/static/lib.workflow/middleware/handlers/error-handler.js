const _ = require('lodash')

const validators = require('../validators')
const { SUCCESS } = require('../constants').statusMappings

const errorHandler = (params, req) => {
    let messages = []

    const coreErrors = validators.coreQuery(req)

    if (!_.isEmpty(coreErrors)) {
        messages = _.concat(messages, coreErrors)
    } else {
        const command = req.query.cmd.toLowerCase()
        const commandLevelValidator = validators[command]

        if (commandLevelValidator) {
            const { pid, state } = global.flow
            const queryValidationErrors = commandLevelValidator(req, pid, state, params)

            if (!_.isEmpty(queryValidationErrors)) {
                messages = _.concat(messages, queryValidationErrors)
            }
        }
    }

    const { state, flowName: flow, pid, document } = global.flow

    const data = {
        result: SUCCESS,
        state,
        flow,
        pid,
        messages,
        document
    }

    return data
}

module.exports = errorHandler
