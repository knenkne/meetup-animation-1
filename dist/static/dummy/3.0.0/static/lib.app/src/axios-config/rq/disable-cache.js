import _ from 'lodash'

function getCookie (name, defaultValue = '') {
    const matches = document.cookie.match(new RegExp(`(?:^|; )${name}=([^;]*)`))
    return matches ? decodeURIComponent(matches[1]) : defaultValue
}
/**
 * Enhance request with _c parameter
 * @param {Object} rqConfig - request configuration
 * @return {Object} - enhanced rqConfig
 */
export default (rqConfig) => {
    if (rqConfig.method === 'get') {
        _.set(
            rqConfig,
            'params._c',
            getCookie('SESSION_TIMESTAMP', Number(new Date()))
        )
    }

    return rqConfig
}
