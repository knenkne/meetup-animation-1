import _ from 'lodash'
import axios from 'axios'

import { getConfigValue } from '../../config'

import useAPIRoot from './use-api-root'

export const cleanAxios = axios.create()
cleanAxios.defaults.withCredentials = true
cleanAxios.interceptors.request.use(useAPIRoot)

const sessionAutorenewEvents = getConfigValue('session.autorenew.events')
const sessionAutorenewDebounce = +getConfigValue(
    'session.autorenew.debounce',
    0
)
if (typeof window === 'object') {
    if (!window.__requestForSession) {
        window.__requestForSession = _.throttle(
            () => cleanAxios.post('/api/warmUpSession'),
            sessionAutorenewDebounce,
            {
                // Do not execute session warm up immediately on start
                leading: false
            }
        )
        if (sessionAutorenewEvents) {
            _.forEach(sessionAutorenewEvents.split(','), (event) =>
                window.addEventListener(event, window.__requestForSession)
            )
        }
    }
}

/**
 * Interceptors for warm session
 * @param {Object} rqConfig - request configuration
 * @return {Object} - enhanced rqConfig
 */
export default (rqConfig) => {
    if (typeof window === 'object') {
        window.__requestForSession()
    }

    return rqConfig
}
