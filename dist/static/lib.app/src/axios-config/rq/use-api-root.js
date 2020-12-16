import { getConfigValue } from '../../config'

export default (rqConfig) => {
    if (!rqConfig.url.startsWith('http')) {
        rqConfig.originalUrl = rqConfig.url
        rqConfig.url = getConfigValue('base.url', '') + rqConfig.url
    }

    return rqConfig
}
