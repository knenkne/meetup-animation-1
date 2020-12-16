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
    ctaccount: {
        blocked: 'ctaccountBlocked',
        eur: 'ctaccountEur',
        rub: 'ctaccountRub',
        usd: 'ctaccountUsd',
        $: 'box'
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

export const getIconName = (system, type) => {
    switch (type) {
        case 'ctaccount':
            return typeToIcon.ctaccount[system] || typeToIcon.ctaccount.$
        case 'card':
            return typeToIcon.card[system] || typeToIcon.card.$
        default:
            return typeToIcon?.[type]?.$ || 'box'

    }
}

const formatOptions = {
    allowDecimal: true,
    decimalSymbol: ',',
    prefix: '',
    suffix: '',
    includeThousandsSeparator: true,
    thousandsSeparatorSymbol: ' ',
    decimalLimit: null,
    integerLimit: null,
    requireDecimal: false,
    allowNegative: true,
    allowLeadingZeroes: false
}

export const formatNumber = (amount) => Input.formatNumberValue(amount?.toString(), formatOptions)

export const parseResource = ({ title, value, properties } = {}) => {
    const {
        title: propertyTitle,
        type,
        balance,
        paymentSystem,
        name,
        number,
        currency,

        asideTitle = '',
        asideAmount = '',
        asideMeasureUnit = '',
        unavailable
    } = properties

    const additionalDescription = `${asideTitle} ${formatNumber(asideAmount)} ${asideMeasureUnit}`.trim()

    if (process.env.NODE_ENV !== 'production' && unavailable) {
        console.warn('К сожалению, unavailable параметр опции resource на данный момент игнорируются, скоро добавим')
    }

    const [category, system] = paymentSystem ? paymentSystem.split(':') : []

    const icon = `icon:core/resource/${getIconName(system, type)}`

    const measureUnit = getMeasureUnit(currency, type)

    const alias = getAlias(currency, type, propertyTitle || name || title)

    return {
        icon,
        title,
        description: number || alias,
        value,
        additional: joinAdditional(balance, measureUnit),
        additionalDescription
    }
}
