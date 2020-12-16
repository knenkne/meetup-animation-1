const _ = require('lodash')

const reduceHistoryToStep = (history, step) => {
    const stepIndex = _.indexOf(history, step)
    return _.takeRight(history, history.length - stepIndex)
}

module.exports = reduceHistoryToStep
