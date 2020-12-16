const _ = require('lodash')

const createHistoryItem = require('./create-history-item')

const buildHistory = (idsArr, idStateMap, flow, states/* , values */) => {

    const history = _.map(idsArr, (id) => {
        const state = _.get(idStateMap, id)
        /**
         * TODO
         * which screen title take if screens more than 1 ?
         * */
        const title = _.get(states, [state, 'data', 'screens', '0', 'title'], '')
        /**
         * TODO
         * stringify or remove values from history item
         * TODO
         *  hardcode value
         *  // const value = values[id]
         * */
        const value = 'value'
        const historyParams = { id, flow, state, title, value }

        return createHistoryItem(historyParams)
    })


    return history
}

module.exports = buildHistory
