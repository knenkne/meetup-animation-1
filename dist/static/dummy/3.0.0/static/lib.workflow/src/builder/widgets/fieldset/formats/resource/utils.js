import _ from 'lodash'
import { Input, Currency } from '@sbol/lib.ui'

const UNIVERSAL_METAL_CURRENCY = 'гр.'

const METAL_CURRENCIES = ['a33', 'a76', 'a98', 'a99']

const metalToLocale = {
    au: 'Золото',
    ag: 'Серебро',
    pt: 'Платина',
    pd: 'Палладий'
}

const typeToIcon = {
    goal: {
        $: 'other',
        education: 'education',
        auto: 'auto',
        reserve: 'reserve',
        renovation: 'renovation',
        vacation: 'vacation',
        appliance: 'appliance',
        furniture: 'furniture',
        business: 'business',
        estate: 'estate',
        holidays: 'holidays',
        other: 'other'
    },
    card: {
        $: 'card',
        amex: 'amexCard',
        visa: 'visaCard',
        maestro: 'maestroCard',
        mastercard: 'masterCard',
        mir: 'mirCard',
        visaMir: 'visaCardMir',
        mastercardMir: 'masterCardMir',
        pro100: 'pro100Card',
        // TODO: uec icon must be another
        uec: 'uecCard',
        // TODO: faceless card, at first it is default icon
        virtual: 'card',
        'visa-mir': 'visaCard',
        'mastercard-mir': 'mirCard'
    },
    metal: {
        $: 'box',
        au: 'goldMetal',
        ag: 'silverMetal',
        pt: 'platinumMetal',
        pd: 'palladiumMetal'
    },
    loan: {
        $: 'wallet',
        auto: 'wallet',
        consumer: 'wallet',
        mortgage: 'wallet'
    },
    deposit: {
        $: 'box'
    },
    account: {
        $: 'box'
    },
    offer: {
        $: 'box'
    }
}

const joinAdditional = (balance, measureUnit) =>
    balance && measureUnit && `${Input.formatNumberValue(balance)} ${Currency.options.symbols[measureUnit.toLowerCase()] || measureUnit}`

const getAlias = (currency, type, title) =>
    type === 'metal' && currency ? `${metalToLocale[type] || ''} | ${title}` : title

const getMeasureUnit = (currency, type) =>
    type === 'metal' || METAL_CURRENCIES.includes(currency) ? UNIVERSAL_METAL_CURRENCY : currency

const warnAside = _.once(() => {
    if (process.env.NODE_ENV !== 'production') {
        console.warn('К сожалению, aside параметры опции resource на данный момент игнорируются, скоро добавим')
    }
})

const warnUnavailable = _.once(() => {
    if (process.env.NODE_ENV !== 'production') {
        console.warn('К сожалению, unavailable параметр опции resource на данный момент игнорируются, скоро добавим')
    }
})

export const parseResource = ({ title, value, properties } = {}) => {
    const {
        title: propertyTitle,
        type,
        balance,
        paymentSystem,
        name,
        number,
        currency,

        asideTitle,
        asideAmount,
        asideMeasureUnit,
        unavailable
    } = properties

    if (process.env.NODE_ENV !== 'production' && (asideTitle || asideAmount || asideMeasureUnit)) {
        warnAside()
    }

    if (process.env.NODE_ENV !== 'production' && unavailable) {
        warnUnavailable()
    }

    const icon = `icon:core/resource/${typeToIcon.card[paymentSystem] || _.get(typeToIcon[type], '$', 'box')}`

    const measureUnit = getMeasureUnit(currency, type)

    const alias = getAlias(currency, type, propertyTitle || name || title)

    return {
        icon,
        title,
        description: number || alias,
        value,
        additional: joinAdditional(balance, measureUnit)
    }
}
