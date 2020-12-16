const _ = require('lodash')

const structure = require('../workflow/json')

const responseFactory = (flowData) => {

    const { document, screens, events, references, progress, fields } = flowData

    const body = _({})
        .merge(structure.ufsBody)
        .mapValues((value, key) => flowData[key] ? flowData[key] : value)
        .merge({ output: _.omitBy({ document, screens, events, references, progress, fields }, _.isEmpty) })
        .value()

    return _({})
        .merge(structure.ufsSuccess)
        .merge({ body })
        .value()
}

module.exports = responseFactory
