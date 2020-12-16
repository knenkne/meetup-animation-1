const _ = require('lodash')

const { ACTIVE } = require('../constants').statusMappings

const createHistoryItem = (historyParams) => {

    const historyItem = {
        id: null,
        flow: null,
        state: null,
        title: '',
        value: null,
        status: ACTIVE
    }

    return _(historyItem)
        .mapValues((value, key) => historyParams[key] ? historyParams[key] : value)
        .value()
}

module.exports = createHistoryItem
