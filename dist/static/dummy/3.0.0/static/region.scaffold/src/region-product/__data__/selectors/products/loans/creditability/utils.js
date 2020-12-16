/* eslint-disable @sbol/common/no-cyrillic-outside-cms, comment: аналитика не требует транслитерации */

import { getFeatureOption, Link } from '@sbol/lib.app'
import { calculatePercents } from '@sbol/lib.creditability/src/utils'
import { analytics } from '@sbol/lib.analytics'

import { APP } from '../../../../../../analytics'

import { CREDITABILITY_FEATURE, NOTIFICATIONS, STATIC_USED, STATUSES } from './constants'

export const isVisible = (status) => {
    switch (status) {
        case STATUSES.LC_NOT_CALCULATED:
            return getFeatureOption(CREDITABILITY_FEATURE, 'showLCNotCalculated')
        case STATUSES.LC_CALCULATION_TIMEOUT_ERROR:
            return getFeatureOption(CREDITABILITY_FEATURE, 'showLCCalculationTimeoutError')
        case STATUSES.LC_LIGHT_VALUE_DECLINE:
        case STATUSES.LC_ERROR:
            return false
        default:
            return true
    }
}

export const getUsed = ({ available, used, reserved }) =>
    calculatePercents(available + used + reserved, used + reserved)

export const getIconProps = (status, parts) => {
    if (status === STATUSES.LC_ACCEPTED) {
        return { color: '#8585C2', background: '#30309A', used: getUsed(parts) }
    }
    return { color: '#5B5BAD', background: '#3A424A', used: STATIC_USED }
}

export const getProduct = ({ status, parts, locales, system }) => {
    const { title, description } = locales
    return {
        id: 'creditability',
        type: 'creditability',
        name: title,
        href: Link.createUrl(getFeatureOption('SidebarCreditPotential', 'key')),
        message: { text: description },
        notification: NOTIFICATIONS[status],
        icon: getIconProps(status, parts),
        theme: 'appearanceAnimation',
        handleItemClick: () => {
            analytics.event({
                application: APP,
                action: 'Меню продуктов',
                label: `Кредиты/${system}/Виджет Кредитного потенциала/${status}_Клик`
            })
        }
    }
}
