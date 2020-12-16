const {
    AUTOTESTING_PLACEMENT: env = 'dev',
    PORT_DEV_SERVER
} = process.env

const getAuthUrl = () => {
    if (getAuthUrl.options.isIftSigma()) {
        return getAuthUrl.options.getIftSigmaAuthUrl()
    }

    if (getAuthUrl.options.isIftAlpha()) {
        return getAuthUrl.options.getIftAlphaAuthUrl()
    }

    return getAuthUrl.options.getDevAuthUrl()
}

getAuthUrl.options = {
    userId: '',
    isDev: () => !env || env === 'dev',
    isIft: () => env.startsWith('ift'),
    isIftAlpha: () => env === 'ift_alpha',
    isIftSigma: () => env === 'ift' || env === 'ift_sigma',
    getDevAuthUrl: () => `http://localhost:${PORT_DEV_SERVER}/set_client/${getAuthUrl.options.userId}`,
    getIftSigmaAuthUrl: () => 'https://ift-csa.testonline.sberbank.ru:4456/CSAFront/index.do',
    getIftAlphaAuthUrl: () => 'http://tv-ball-8r2-39:9080/CSAFront/index.do',
}

module.exports = getAuthUrl
