const pseudoNavigation = {
    'cards.debit': '/sbtsbol/private/cards/debit',
    'loans.creditability': '/loans/creditability'
}

const options = {
    'res.url': 'http://10.36.9.21/builds/sbol',
    // TODO: поправить импорт версии из package.json
    'common.version': '1.2.5',
    'log.level': 'DEBUG',
}

const features = {
    CapacityStatus: {
        value: 'loans.creditability',
        options: {
            endpointUrl: '/person-credit/v7/ib/banking/products/loans/lending-capacity'
        }
    }
}

export const getOptions = ([context, key], defaultValue) => {
    if (context === 'navigation') {
        return pseudoNavigation[key] || defaultValue
    }
    if (context === 'config') {
        return options[key] || defaultValue
    }
    return defaultValue
}

export const getHistory = () => ({
    createHref: ({ pathname }) => pathname
})

export const getFeatureValue = (feature) => features[feature].value
export const getFeatureOption = (feature, option) => features[feature].options[option]

export const getNotFound = () => ''
export const getInitOptions = () => ''
export const getApps = () => ''
export const getBroker = () => ''
export const getAllFeatures = () => ''
export const getAllOptions = () => ''
export const getFeature = () => ''
export const getOption = () => ''
export const getPrefetch = () => ''
export const getAllLauncher = () => {
}
export const getAppStartLoader = () => ''
export const getAppStopLoader = () => ''

window.bootstrap = {
    navigation: {},
    config: {}
}
