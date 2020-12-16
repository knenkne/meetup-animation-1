import { commonEvent } from './common-event'
import { EVENT_TYPES, get } from './utils'

export const workflowTransition = (stepData) => {
    commonEvent(EVENT_TYPES.transition)({
        url: `${window.location.pathname}${window.location.search}${window.location.hash}`,
        title: get(stepData, 'output', 'screens', 0, 'title')
    })
}
