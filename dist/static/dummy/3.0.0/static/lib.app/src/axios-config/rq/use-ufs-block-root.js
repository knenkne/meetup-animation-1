import { getConfigValue } from '../../config'

const getUfsBlockRoot = (defaultValue = void 0) =>
    getConfigValue('ufs.block.root.url', '') &&
    getConfigValue('ufs.block.root.url', '').startsWith('http')
        ? getConfigValue('ufs.block.root.url', '')
        : defaultValue

/**
 * Enhance request adding proper api root to request url
 * @param {Object} rqConfig - request configuration
 * @param {Object} rqConfig.appConfig.baseUrl - root API url
 * @return {Object} - enhanced rqConfig
 */
export default (rqConfig) => {
    if (getUfsBlockRoot()) {
        rqConfig.withCredentials = true
    }

    // if url does not start with http
    // and if original url does not exist
    if (!rqConfig.url.startsWith('http') && !rqConfig.originalUrl) {
        // save original request url
        rqConfig.originalUrl = rqConfig.url
    }

    if (rqConfig.originalUrl) {
        // if ufs block root url is ok, set it as root
        // by default, root is empty
        const rootUrl = getUfsBlockRoot(getConfigValue('base.url', ''))

        // set url root to ufs block
        rqConfig.url = rootUrl + rqConfig.originalUrl
    }

    return rqConfig
}
