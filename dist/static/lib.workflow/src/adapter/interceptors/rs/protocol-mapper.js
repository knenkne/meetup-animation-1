import _ from 'lodash'

const getCoreButtons = (events) => ({
    type: 'CoreButtons',
    events
})

export const protocolMapper = {
    handleSuccess: (response) => {
        // protocol 1.0 => 2.0
        const output = _.get(response, ['data', 'body', 'output'], {})
        const { screens, events } = output
        // sort of 🦆-typing for events
        if (screens && events) {
            const lastScreen = _.last(screens) || {}
            lastScreen.widgets = lastScreen.widgets || []
            lastScreen.widgets.push(getCoreButtons(events))
        }
        return Promise.resolve(response)
    }
}
