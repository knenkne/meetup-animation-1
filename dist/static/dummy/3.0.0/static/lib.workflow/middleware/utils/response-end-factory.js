const _ = require('lodash')

const structure = require('../workflow/json')

const responseEndFactory = (flowData) => {
    const { screens, events, references, progress } = flowData
    const output = _.omitBy({ screens, events, references, progress }, _.isEmpty)
    const body = _.assign({}, structure.ufsEndBody, _.isEmpty(output) ? {} : { output })

    return _.assign({}, structure.ufsSuccess, { body })
}

module.exports = responseEndFactory
