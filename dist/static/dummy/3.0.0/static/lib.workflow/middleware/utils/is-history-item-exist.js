const _ = require('lodash')

const isHistoryItemExist = (item, history) => _.findIndex(history, (historyItem) => historyItem === item) !== -1

module.exports = isHistoryItemExist
