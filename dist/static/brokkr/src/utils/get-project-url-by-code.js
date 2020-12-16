const IFT_ENVS = ['ift', 'ift_sigma', 'ift_alpha']

const getProjectUrlByCode = (code) => {
    if (IFT_ENVS.includes(process.env.AUTOTESTING_PLACEMENT)) {
        return getProjectUrlByCode.options.getIftProjectUrl(code)
    }

    return getProjectUrlByCode.options.getDevProjectUrl(code)
}

getProjectUrlByCode.options = {
    getDevProjectUrl: (code) => `http://localhost:${process.env.PORT_DEV_SERVER}/private/${code}`,
    getIftProjectUrl: (code) => {
        const [, node = 1] = browser.getUrl().match(/node(\d)/) || []
        const relativeUrl = getProjectUrlByCode.options.navigation[code]
        return `https://front.ift-node${node}.testonline.sberbank.ru:9443${relativeUrl}`
    },
    /* eslint-disable quote-props, comment: консистентность */
    navigation: {
        'gos.seizure': '/sbtsbol/private/gos/seizure',
        'brokerage': '/sbtsbol/private/brokerage',
        'cards.credit': '/sbtsbol/private/cards/credit',
        'cards.dashboard': '/sbtsbol/private/cards',
        'cards.debit': '/sbtsbol/private/cards/debit',
        'insurance.cards': '/sbtsbol/private/insurance/cardholder',
        'investments.dashboard': '/sbtsbol/private/investments',
        'investments.tma': '/sbtsbol/private/investments/tma',
        'lab': '/sbtsbol/private/lab',
        'loans.dashboard': '/sbtsbol/private/loans',
        'loans.car': '/sbtsbol/private/loans/car',
        'loans.consumer': '/sbtsbol/private/loans/consumer',
        'loans.creditability': '/sbtsbol/private/loans/creditability',
        'loans.delivery': '/sbtsbol/private/loans/delivery',
        'moneybox': '/sbtsbol/private/moneybox',
        'operations': '/sbtsbol/private/operations',
        'payments.intertransfer': '/sbtsbol/private/payments/intertransfer',
        'payments.ondemand': '/sbtsbol/private/payments/ondemand',
        'payments.overseas': '/sbtsbol/private/payments/overseas',
        'payments.tariffs': '/sbtsbol/private/payments/tariffs',
        'pension.dashboard': '/sbtsbol/private/pension',
        'pension.personalplan': '/sbtsbol/private/pension/personalplan',
        'pfm': '/sbtsbol/private/alf',
        'telecom': '/sbtsbol/private/telecom',
        'welfare.insurance': '/sbtsbol/private/insurance',
        'welfare.insurance.selfservice': '/sbtsbol/private/insurance/selfservice'
    }
}


module.exports = getProjectUrlByCode
