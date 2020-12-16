import { log } from '@sbol/lib.app/src/log'

import { getIdsList, LEVELS } from './utils'

/**
 * @return {Array} - множество трекеров уникальных вендоров и id
 */
export const getTrackers = ({ trackers, userId }) =>
    trackers.reduce((trackersCollection, { builder: Tracker, level, ids = '' }) => {
        const listIds = getIdsList(ids || '')

        if (!process.env.TESTING
            && listIds.length
            && level !== LEVELS.silent
            && Tracker.src
            && !document.querySelector(`[src*="${Tracker.src.replace(/https?:\/\//, '')}"]`)) {

            if (Tracker.preflight) {
                Tracker.preflight()
            }

            const script = document.createElement('script')
            const where = document.getElementsByTagName('script')[0]
            script.async = true
            script.src = Tracker.src
            where.parentNode.insertBefore(script, where)
        }

        const currentTracker = listIds.reduce((currentTrackerCollection, id) => {
            try {
                // Процесс создания экземпляров трекеров - для каждой метрики и айди свой трекер
                const tracker = new Tracker({ id, level, userId })
                const trackerId = `${tracker.trackerName}${id}`

                return { ...currentTrackerCollection, [trackerId]: tracker }
            } catch (error) {
                log.error(error)
                return currentTrackerCollection
            }
        }, {})

        return { ...trackersCollection, ...currentTracker }
    }, {})
