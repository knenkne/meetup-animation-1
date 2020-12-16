const getRouteLikeName = require('../utils/get-route-like-name')
const getProjectPackage = require('../utils/get-project-package')

const {
    __: {
        cleanName: name
    }
} = getProjectPackage()

module.exports = {
    [getRouteLikeName(name)]: `/${getRouteLikeName(name)}`,

    // Старая главная страница ЕРИБ
    MAIN: '/PhizIC/private/accounts.do',
    // Основное навигационное меню
    index: '/main',
    'payments.dashboard': '/payments',
    operations: '/operations',
    catalog: '/catalog',

    // Основные страницы
    'cards.dashboard': '/cards',
    'cards.debit': '/cards/debit',
    'cards.credit': '/cards/credit',
    'pro.cards.credit.delivery': '/cards/credit/delivery',
    'loans.dashboard': '/loans',
    'loans.consumer': '/loans/consumer',
    'loans.delivery': '/cards/delivery',
    'accounts.open': '/accounts/open',
    'payments.provider': '/payments/provider',
    brokerage: '/brokerage'
}
