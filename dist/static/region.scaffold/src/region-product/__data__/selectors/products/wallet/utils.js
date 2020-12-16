import {
    BLOCKED
} from '../cards/dictionaries'
import { getProductMessage } from '../../../utils/get-product-message'

import { CTACCOUNT } from './dictionaries'

export const getCtaccountIcon = (ctaccount) => {
    const { state, arrested, balance: { currency } } = ctaccount

    if (state === BLOCKED || arrested) {
        return 'icon:region.product/common/ctaBlocked'
    }

    return `icon:region.product/common/cta${currency.code}`
}

export const getCtaccountNotification = (ctaccount) => {
    const { arrested, state } = ctaccount
    if (arrested) {
        return {
            ...getProductMessage('ctaccount.arrested', 'arrested')
        }
    } else if (state === BLOCKED) {
        return {
            ...getProductMessage('ctaccount.blocked', 'warning-text')
        }
    }
    return {
        ...getProductMessage()
    }
}

export const isCtaccount = (card) => card.type === CTACCOUNT
