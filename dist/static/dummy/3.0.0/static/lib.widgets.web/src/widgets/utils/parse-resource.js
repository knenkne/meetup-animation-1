import _ from 'lodash'
import { Icon } from '@sbol/lib.ui'

const UNIVERSAL_METAL_CURRENCY = 'гр.'

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
        virtual: 'card'
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
    offer: {
        $: 'box'
    }
}

const iconAdapter = (name) => `${Icon.data ? '' : 'icon:core/resource/'}${name}`

export const parseResource = ({ title, value, properties } = {}) => {
    if (_.isUndefined(value)) {
        return {}
    }

    const {
        category,
        style,
        alias: newTitle,
        number,
        amount,
        measureUnit: originalMeasureUnit,
        asideTitle,
        asideAmount,
        asideMeasureUnit,
        unavailable
    } = properties

    const categoryDefault = `${category}.$`
    const iconType = style ? _.map(_.split(style, ':'), (item) => _.camelCase(item)).join('.') : categoryDefault
    const icon = iconAdapter(_.get(iconsMap, iconType, _.get(iconsMap, categoryDefault, 'box')))

    let alias = newTitle || title

    if (category === 'metal' && style) {
        alias = `${_.get(metalType, style.replace(':', '.'), '')} | ${alias}`
    }

    let measureUnit = originalMeasureUnit
    if (category === 'metal') {
        measureUnit = UNIVERSAL_METAL_CURRENCY
    }

    const type = unavailable ? 'unavailable' : category

    return { icon, title, alias, number, value, type, amount, measureUnit, asideAmount, asideTitle, asideMeasureUnit }
}
