const _ = require('lodash')

const stepProperties = ['meta', 'title', 'description', 'nav', 'fieldsets']


const mapStepData = (stepData) => {
    const result = {}
    _.forEach(stepProperties, (stepProperty) => {
        result[stepProperty] = stepData[stepProperty]
    })

    return result
}


module.exports = mapStepData
