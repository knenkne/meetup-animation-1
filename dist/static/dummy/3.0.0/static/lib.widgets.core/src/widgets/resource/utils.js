import _ from 'lodash'
import { Icon, Input, Currency } from '@sbol/lib.ui'

const UNIVERSAL_METAL_CURRENCY = 'гр.'

const METAL_CURRENCIES = ['a33', 'a76', 'a98', 'a99']

const metalType = {
    metal: {
        au: 'Золото',
        ag: 'Серебро',
        pt: 'Платина',
        pd: 'Палладий'
    }
}

const iconsMap = {
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

const iconAdapter = (name) => `${Icon.data ? '' : 'icon:core/resource/'}${name}`

const joinAdditional = (balance, measureUnit) =>
    balance && measureUnit && `${Input.formatNumberValue(balance)} ${Currency.options.symbols[measureUnit.toLowerCase()] || measureUnit}`

const parseLegacyResource = (title, value, properties) => {
    const {
        category,
        style,
        alias: newTitle,
        number,
        amount,
        measureUnit: originalMeasureUnit,
    } = properties

    const categoryDefault = `${category}.$`
    const iconType = style ? _.map(_.split(style, ':'), (item) => _.camelCase(item)).join('.') : categoryDefault
    const icon = iconAdapter(_.get(iconsMap, iconType, _.get(iconsMap, categoryDefault, 'box')))

    let alias = newTitle

    if (category === 'metal' && style) {
        alias = `${_.get(metalType, style.replace(':', '.'), '')} | ${alias}`
    }

    let measureUnit = originalMeasureUnit
    if (category === 'metal') {
        measureUnit = UNIVERSAL_METAL_CURRENCY
    }

    return {
        icon,
        title,
        description: number || alias,
        value,
        additional: joinAdditional(amount, measureUnit)
    }
}

export const parseResource = ({ title, value, properties } = {}) => {

    if (_.isUndefined(value)) {
        return {}
    }

    if (properties.category) {
        return parseLegacyResource(title, value, properties)
    }

    const {
        title: titleFromProperties,
        type: typeFromProperties,
        balance,
        paymentSystem,
        name,
        number,
        asideTitle,
        asideAmount,
        asideMeasureUnit,
        currency,
        unavailable
    } = properties


    if (process.env.NODE_ENV !== 'production' && (asideTitle || asideAmount || asideMeasureUnit)) {
        console.warn('К сожалению, aside параметры опции resource на данный момент игнорируются, скоро добавим')
    }

    if (process.env.NODE_ENV !== 'production' && unavailable) {
        console.warn('К сожалению, unavailable параметр опции resource на данный момент игнорируются, скоро добавим')
    }

    const categoryDefault = `${typeFromProperties}.$`
    const icon = iconAdapter(_.get(iconsMap, `card.${paymentSystem}`, _.get(iconsMap, categoryDefault, 'box')))

    let alias = titleFromProperties || name || title

    if (typeFromProperties === 'metal' && currency) {
        alias = `${_.get(metalType, ['metal', typeFromProperties], '')} | ${alias}`
    }

    let measureUnit = currency
    if (typeFromProperties === 'metal' || _.includes(METAL_CURRENCIES, currency)) {
        measureUnit = UNIVERSAL_METAL_CURRENCY
    }

    return {
        icon,
        title,
        description: number || alias,
        value,
        additional: joinAdditional(balance, measureUnit)
    }
}

export function groupByCategories (data) {
    const formattedData = _.map(data, parseResource)
    const sortedData = _.sortBy(formattedData, [(resourceOption) => resourceOption.type === 'unavailable'])
    const unsafeGrouped = _.groupBy(sortedData, (item) => item.type)

    return _.map(unsafeGrouped, (group, name) => ({ group, name }))
}

export const getMode = (references) => {
    if (
        _.every(references, (resourceOption) => resourceOption.properties.category === 'card'
            && !resourceOption.properties.asideTitle
            && !resourceOption.properties.asideAmount)
    ) {
        return 'inline'
    }

    return 'block'
}
