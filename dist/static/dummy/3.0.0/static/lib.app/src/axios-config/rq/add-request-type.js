/**
 * Enhance request with AJAX request type headers
 * @param {Object} rqConfig - request configuration
 * @return {Object} - enhanced rqConfig
 */
export default (rqConfig) => {
    rqConfig.headers['X-Requested-With'] = 'XMLHttpRequest'

    return rqConfig
}
