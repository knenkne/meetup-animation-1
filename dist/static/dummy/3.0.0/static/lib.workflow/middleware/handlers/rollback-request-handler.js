const _ = require('lodash')

const { SUCCESS } = require('../constants').statusMappings
const utils = require('../utils')

const rollbackRequestHandler = (params, rollbackDestinationID) => {
    const { mappings } = global.flow

    const destinationState = mappings[rollbackDestinationID]
    const stepData = params.states[destinationState].data

    const stepValues = _.pick(global.flow.values, rollbackDestinationID)[rollbackDestinationID]
    const { screens, events, references, progress } = stepData
    const screensWithValues = utils.updateFieldValuesAtScreens(screens, stepValues)

    const reducedHistory = utils.reduceHistory(global.flow.history, rollbackDestinationID)
    const reducedValues = _.pick(global.flow.values, reducedHistory)
    global.flow.mappings = _.merge({}, global.flow.mappings, { [rollbackDestinationID]: destinationState })
    global.flow.state = destinationState
    global.flow.history = reducedHistory
    global.flow.values = reducedValues

    return {
        result: SUCCESS,
        state: global.flow.state,
        flow: global.flow.flowName,
        pid: global.flow.pid,
        screens: screensWithValues,
        events,
        references,
        progress,
        document: global.flow.document
    }
}

module.exports = rollbackRequestHandler
