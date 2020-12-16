const _ = require('lodash')

const { SUCCESS } = require('../constants').statusMappings

const onEnterHandler = (params, state/* , req */) => {

    const { pid, flowName, document } = global.flow
    let correctState = state

    /* Если в текущем флоу-конфиге мы не нашли состояния, к которому переходим, сбрасываем состояние к стартовому. Требуется при переходе в subFlow. */
    if (!_.get(params, ['states', state], false)) {
        correctState = params.start
        global.flow.state = correctState
    }

    const stepData = _.get(params, ['states', correctState, 'data'], {})
    const { screens, events, references, progress } = stepData

    return {
        result: SUCCESS,
        state: correctState,
        flow: flowName,
        pid,
        screens,
        events,
        references,
        progress,
        document
    }
}

module.exports = onEnterHandler
