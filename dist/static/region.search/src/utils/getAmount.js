import _ from 'lodash'
import Bignumber from 'bignumber.js'
import { compose } from 'redux'

import {
    CURRENCY_DECIMAL_PRECISION,
    CURRENCY_FORMAT
} from '../header/constants'

export const formatAmmount = (amount) => {
    if (!amount && amount !== 0) {
        return ''
    }

    return new Bignumber(amount).toFormat(CURRENCY_DECIMAL_PRECISION, CURRENCY_FORMAT)
}

export const parsePossibleString = (value) =>
    typeof value === 'string' ? parseFloat(value.replace(',', '.')) : value

export const getProp = (prop, def = '') => (obj) => _.get(obj, prop, def)

export const getAmount = compose(
    formatAmmount,
    parsePossibleString
)
