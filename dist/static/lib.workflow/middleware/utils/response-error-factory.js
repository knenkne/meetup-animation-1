const _ = require('lodash')

const structure = require('../workflow/json')

const responseErrorFactory = (flowData) => {

    const references = {}

    const body = _({})
        .merge(structure.ufsBody)
        .mapValues((value, key) => flowData[key] ? flowData[key] : value)
        .merge({ output: _.omitBy({ references, }, _.isEmpty) })
        .value()

    return _({})
        .merge(structure.ufsSuccess)
        .merge({ body })
        .merge({ messages: flowData.messages })
        .value()
}

module.exports = responseErrorFactory
