import { getConfigValue } from '../../config'

export default (rqConfig) => {
    if (!rqConfig.url.startsWith('http')) {
        rqConfig.originalUrl = rqConfig.url
        rqConfig.url = getConfigValue('erib.url') + getConfigValue('mapi.url') + rqConfig.url
    }

    rqConfig.withCredentials = true
    rqConfig.headers['Content-Type'] = 'application/json'
    return rqConfig
}
