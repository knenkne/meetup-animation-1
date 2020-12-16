import _ from 'lodash'
import i18next from 'i18next'

import { getAmount } from '../../utils/getAmount'

export const getUnifiedProducts = (products) => {
// для каждого типа продуктов:
//     accounts
//     cards
//     depoaccounts
//     imaccounts
//     loans
//     targets
//  Сначала вытаскиваем унифицированную структуру:
    // Название, подпись, основная сумма, основная валюта, дополнительная сумма, дополнительная валюта, иконка
    const unifiedProducts = []

    unifiedProducts.push(...products.cards.map((card) => ({
        type: 'card',
        id: card.id,
        icon: card.icon,
        title: card.name,
        searchedField: card.lastDigits,
        description: card.lastDigits,
        amount: getAmount(_.get(card, 'currency.amount', '')),
        amountCurrency: _.get(card, 'currency.currency', ''),
        href: _.get(card, 'href', '')
    })))

    unifiedProducts.push(...products.accounts.map((account) => ({
        type: 'account',
        id: account.id,
        icon: account.icon,
        title: account.name,
        searchedField: '',
        description: i18next.t('account.before', { endDate: account.closeDate }),
        amount: getAmount(_.get(account, 'currency.amount', '')),
        amountCurrency: _.get(account, 'currency.currency', ''),
        additionalAmount: account.rate,
        additionalAmountCurrency: '%',
        href: _.get(account, 'href', '')
    })))

    unifiedProducts.push(...products.depoaccounts.map((account) => ({
        type: 'depoaccount',
        id: account.id,
        icon: account.icon,
        title: account.name || i18next.t('depo.title'),
        searchedField: i18next.t('depo.number', { number: _.get(account, 'message.text', '') }),
        description: i18next.t('depo.number', { number: _.get(account, 'message.text', '') }),
        href: _.get(account, 'href', '')
    })))

    unifiedProducts.push(...products.imaccounts.map((account) => ({
        type: 'imaccount',
        id: account.id,
        icon: account.icon,
        title: i18next.t(account.name),
        searchedField: '',
        description: account.openDate,
        amount: getAmount(_.get(account, 'currency.amount', '')),
        amountCurrency: _.get(account, 'currency.currency', ''),
        additionalAmount: getAmount(_.get(account, 'balanceInNationalCurrency.amount', '')),
        additionalAmountCurrency: _.get(account, 'balanceInNationalCurrency.currency', ''),
        href: _.get(account, 'href', '')
    })))

    const filteredLoans = _.filter(products.loans, (loan) => loan.type !== 'ghost')
    unifiedProducts.push(...filteredLoans.map((loan) => ({
        type: 'loan',
        id: loan.id,
        icon: loan.icon,
        title: loan.name,
        searchedField: '',
        description: i18next.t('loan.monthly'),
        amount: getAmount(_.get(loan, 'currency.amount', '')),
        amountCurrency: _.get(loan, 'currency.currency', ''),
        additionalAmount: getAmount(_.get(loan, 'nextPayAmount.amount', '')),
        additionalAmountCurrency: _.get(loan, 'nextPayAmount.currency', ''),
        href: _.get(loan, 'href', '')
    })))

    unifiedProducts.push(...products.targets.map((target) => ({
        type: 'loan',
        id: target.id,
        icon: target.icon,
        title: target.name,
        searchedField: '',
        description: i18next.t('target.before', { endDate: target.endDate }),
        amount: getAmount(_.get(target, 'currency.amount', '')),
        amountCurrency: _.get(target, 'currency.currency', ''),
        additionalAmount: getAmount(_.get(target, 'currentSum.amount', '')),
        additionalAmountCurrency: _.get(target, 'currentSum.currency', ''),
        href: _.get(target, 'href', '')
    })))

    return unifiedProducts
}
