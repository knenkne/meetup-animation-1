import _ from 'lodash'

import modules from '../../../../stub/templates/modules.json'

class Link {
    static createUrl = (id) => {
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
            case 'loans.creditability':
                url = '/loans/creditability'
                break
            default:
                break
        }

        return url
    }
}

module.exports = {
    i18nextInit: () => {},
    getConfigValue: (key, fallback) => {
        if (key === 'isSbolPro' && !fallback && typeof fallback === 'boolean') {
            return false
        }

        if (key === 'base.client.url' && !fallback && typeof fallback === 'string') {
            return 'some.base.client.url.value'
        }

        if (key === 'history') {
            return {
                UfsDebitCardClaim: '/sbtsbol/private/cards/debit#?document={0}&archive={1}'
            }
        }

        if (key === 'isErib') {
            return `http://localhost:${process.env.PORT || '4242'}/ERIB`
        }

        return false
    },
    Link,
    getAllFeatures: () => ({}),
    axiosConfig: {
        useMultipleInterceptors: (args) => args,
        rq: {
            defaultInterceptors: [],
            mapiInterceptors: [],
            prolongERIBSession: (args) => args,
            disableCache: (args) => args,
            addRequestType: (args) => args,
            checkSession: (args) => args
        },
        rs: {
            defaultInterceptors: [],
            mapiInterceptors: []
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
    getFeatureValue: (args) => args,
    getBroker: () => ({ on: () => {} }),
    getOption: (key) => {
        if (key === 'showBlockedCardsTerm') {
            return 0
        }

        return null
    },
    getFeatureOption: (feature, key) => _.get(
        modules,
        ['region.scaffold', 'features', feature, 'options', key]
    ),
    log: {
        error: (args) => args
    }
}
