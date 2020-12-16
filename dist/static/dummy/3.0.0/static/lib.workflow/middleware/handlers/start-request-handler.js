const _ = require('lodash')

const { statusMappings, DEFAULT_PID } = require('../constants')
const utils = require('../utils')


const startRequestHandler = (params, flow, state, req) => {

    const pid = DEFAULT_PID
    global.flow.pid = pid

    const newStepId = state

    const stepData = params.states[state].data
    const { screens, events, references, progress } = stepData

    global.flow.mappings = { [newStepId]: state }
    global.flow.state = state
    global.flow.history = [newStepId]
    global.flow.document = utils.createDocumentResponse(_.get(req, 'body.document', {}))

    return {
        result: statusMappings.SUCCESS,
        state,
        flow,
        pid,
        screens,
        events,
        references,
        progress,
        document: global.flow.document
    }
}

module.exports = startRequestHandler
