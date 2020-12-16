const pseudoContext = {
    navigation: {
        'cards.debit': '/sbtsbol/private/cards/debit'
    },
    config: {
        'res.url': 'http://10.36.9.21/builds/sbol',
        'common.version': 'master'
    }
}

export const getOptions = ([context, key], defaultValue) => {
    const stubContext = pseudoContext[context] || {}

    return stubContext[key] || defaultValue
}

export const getHistory = () => ({
    createHref: ({ pathname }) => pathname
})
export const getNotFound = () => ''
export const getInitOptions = () => ''
export const getApps = () => ''
export const getAppStartLoader = () => ''
export const getAppStopLoader = () => ''
export const getBroker = () => ''
export const getAllFeatures = () => ''
export const getAllLauncher = () => ''
export const getAllOptions = () => ''
export const getFeature = () => ''
export const getFeatureOption = () => ''
export const getFeatureValue = () => ''
export const getLauncherConfig = () => ''
export const getLauncherConfigValue = () => ''
export const getOption = () => ''
export const getPrefetch = () => ''

window.bootstrap = {
    navigation: {},
    config: {}
}
