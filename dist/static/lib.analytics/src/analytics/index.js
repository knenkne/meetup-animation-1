import { getConfigValue as getAppConfigValue } from '@sbol/lib.app/src/config'

import { Tracker } from './trackers/tracker'
import { EVENT_TYPES } from './utils'
import { commonEvent } from './common-event'
import { workflowTransition } from './workflow-transition'

const identity = (arg) => arg

const defaultConfig = {
    channel: getAppConfigValue('isSbolPro') ? 'SBOL_WEB_PRO' : 'SBOL_WEB',
    modifier: identity
}

export const analytics = {
    [EVENT_TYPES.transition]: commonEvent(EVENT_TYPES.transition, { modifier: identity }),
    [EVENT_TYPES.event]: commonEvent(EVENT_TYPES.event, defaultConfig),
    [EVENT_TYPES.stage]: commonEvent(EVENT_TYPES.stage, defaultConfig),
    [EVENT_TYPES.finish]: commonEvent(EVENT_TYPES.finish, defaultConfig),
    [EVENT_TYPES.private]: commonEvent(EVENT_TYPES.private, defaultConfig),
    utils: {
        setCleanUpParams: Tracker.setCleanUpParams,
        defaultCleanUpParams: Tracker.defaultCleanUpParams,
        stopAutoTrackTransitions: Tracker.stopAutoTrackTransitions,
        startAutoTrackTransitions: Tracker.startAutoTrackTransitions
    },
    workflow: {
        stopAutoTrackTransitions: Tracker.stopAutoTrackTransitions,
        startAutoTrackTransitions: Tracker.startAutoTrackTransitions,
        transition: workflowTransition
    }
}
