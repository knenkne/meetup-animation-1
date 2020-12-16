import { getTrackers } from './get-trackers'
import { trackersMeta } from './trackers-meta'

export const trackers = getTrackers(trackersMeta)

export const commonEvent = (eventType, defaultOptions = {}) => (options = {}) => new Promise((resolveEvent, rejectEvent) => {
    const mergedOptions = { ...defaultOptions, ...options }

    const events = Object
        .keys(trackers)
        .map((key) => new Promise((resolveTracker) => trackers[key].invokeEvent(eventType, mergedOptions, resolveTracker)))

    return Promise
        .all(events)
        .then(resolveEvent, rejectEvent)
})
