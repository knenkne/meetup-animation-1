class Link {
    static createUrl = (id, additional = {}) => {
        let url = ''

        switch (id) {
            case 'appeals':
                url = '/appeals'
                break
            case 'catalog':
                url = '/catalog'
                break
            case 'cards.details':
                url = '/cards/details'
                break
            case 'accounts.details':
                url = '/accounts/details'
                break
            case 'cards.dashboard':
                url = '/cards'
                break
            case 'loans.dashboard':
                url = '/loans'
                break
            case 'cards.credit':
                url = '/cards/credit'
                break
            default:
                break
        }

        return url
    }
}

module.exports = {
    getConfigValue: (key, fallback) => {
        if (key === 'isSbolPro' && !fallback && typeof fallback === 'boolean') {
            return false
        }

        if (key === 'base.client.url' && !fallback && typeof fallback === 'string') {
            return 'some.base.client.url.value'
        }

        if (key === 'erib.url') {
            return ''
        }

        return false
    },
    Link,
    getAllFeatures: () => ({}),
    axiosConfig: {
        useMultipleInterceptors: (args) => args,
        rq: {
            defaultInterceptors: [],
            prolongERIBSession: (args) => args,
            disableCache: (args) => args,
            addRequestType: (args) => args,
            checkSession: (args) => args
        },
        rs: {
            defaultInterceptors: []
        }
    },
    getConfig: (args) => args,
    getNavigationValue: (key) => {
        let result = ''

        switch (key) {
            case 'PAYMENTS':
                result = 'payments'
                break
            case 'payments.dashboard':
                result = 'some.payments.dashboard.value'
                break
            default:
                break
        }

        return result
    },
    getFeatureValue: (key, app) => {
        if (key === 'quickSuggestionsFromDDP' && app === 'region.search') {
            return false
        }

        return false
    },
    getBroker: (args) => args,
    getOption: (key) => {
        if (key === 'showBlockedCardsTerm') {
            return 0
        }

        return null
    },
    log: {
        error: (args) => args
    },
    i18nextInit: () => Promise.resolve(1)
}
