const _ = require('lodash')

const structure = require('../workflow/json')

const responseSubFlowFactory = (result, url, pid) => _({})
    .merge(structure.ufsSuccess)
    .merge({ body: { result, url, pid } })
    .value()

module.exports = responseSubFlowFactory
