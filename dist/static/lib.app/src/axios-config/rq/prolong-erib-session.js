import { getConfigValue } from '../../config'

/**
 * Prolong ERIB session with pixel on every request
 * @param {Object} rqConfig - request configuration
 * @return {Object} - same rqConfig
 */
export default (rqConfig) => {
    const pingUrl = getConfigValue('ping.url')

    if (pingUrl) {
        new Image().src = `${pingUrl}?${Math.random()}`
    }

    return rqConfig
}
