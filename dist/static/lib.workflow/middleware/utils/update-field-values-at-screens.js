const _ = require('lodash')

const updateFieldValuesAtScreens = (screens, values) => {
    const result = _.concat(screens)
    /**
     * TODO
     * candidate for refactor
     */
    _.forEach(result, (screen) => {
        _.forEach(screen.widgets, (widget) => {
            _.forEach(widget.fields, (field) => {
                const nextValue = _.get(values, [field.id], field.values || field.value)

                if (field.type === 'checkbox') {
                    field.value = nextValue || 'false'
                } else if (field.type === 'multiselect') {
                    field.values = nextValue || []
                } else {
                    field.value = nextValue || ''
                }
            })
        })
    })

    return result
}

module.exports = updateFieldValuesAtScreens
