const _ = require('lodash')

const getStepFieldsIDs = (states, state) => {
    const fields = []
    const stepData = states[state].data

    _.forEach(stepData.screens, (screen) => {
        _.forEach(screen.widgets, (widget) => {
            _.forEach(widget.fields, (field) => {
                fields.push(field.id)
            })
        })
    })

    return fields
}

module.exports = getStepFieldsIDs
