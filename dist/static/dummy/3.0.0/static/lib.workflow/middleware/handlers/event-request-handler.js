const _ = require('lodash')

const utils = require('../utils')
const { SUCCESS, END } = require('../constants').statusMappings

const shouldSwitchFlow = (states, currentState) => _.get(states, [currentState, 'events', 'next', 'subFlow'], false) && !global.flow.returningFromSubflow
const getSubFlow = (states, currentState) => _.get(states, [currentState, 'events', 'next'], {})

const filterOutputPayload = (data) => _.omitBy(data, (value, entity) =>
    (!_.isEmpty(data.fields) && entity === 'screens') || _.isEmpty(value)
)


const eventRequestHandler = (params, state, req) => {
    const { pid } = global.flow

    if (shouldSwitchFlow(params.states, global.flow.state)) {

        const currentState = global.flow.state
        const command = getSubFlow(params.states, global.flow.state).result

        if (command === 'EXTERNAL_ENTER') {
            global.flow.stack.push(currentState)
        } else if (command === 'EXTERNAL_RETURN') {
            global.flow.state = global.flow.stack.pop()
            global.flow.returningFromSubflow = true
        }

        return {
            subFlow: true,
            url: getSubFlow(params.states, currentState).url,
            result: getSubFlow(params.states, currentState).result,
            pid
        }
    }
    global.flow.returningFromSubflow = false

    const stepId = _.invert(global.flow.mappings)[state]
    global.flow.values[stepId] = _.get(req.body, 'fields', {})

    const nextState = utils.getNextStep(params.states, global.flow.state, req.query.name)
    const newStepId = nextState
    global.flow.history.unshift(newStepId)

    global.flow.mappings = _.merge({}, global.flow.mappings, { [newStepId]: nextState })
    global.flow.state = nextState

    if (nextState === END) {
        return {}
    }

    const stepData = _.get(params, ['states', nextState, 'data'], {})

    const flow = global.flow.flowName

    return {
        result: SUCCESS,
        state: nextState,
        flow,
        pid,
        ...filterOutputPayload(stepData),
        document: global.flow.document
    }
}

module.exports = eventRequestHandler
