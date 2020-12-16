import React from 'react'
import PropTypes from 'prop-types'
import Bignumber from 'bignumber.js'
import _ from 'lodash'
import { Currency } from '@sbol/lib.ui'

import {
    CURRENCY_DECIMAL_PRECISION,
    CURRENCY_FORMAT
} from '../../../../../constants'

import style from './amount.css'

const statusColorMapping = {
    executed: '',
    draft: style.gray,
    cancel: style.red,
    waiting: ''
}

/**
 * Проверить наличие в словаре валют по коду.
 * @param {String} code - код валюты.
 * @return {Boolean} - true, если валюта найдена иначе false
 */
export const checkIsCurrency = (code = '') => _.has(Currency.options.symbols, code.toLowerCase())

/**
 * Преобразовать число в установленный формат чисел
 * @param {Number} number - сумма
 * @param {Number} commission - комиссия
 * @return {String} - преобразованное число
 */
export const formatNumber = (number, commission) => {
    const precision = _.isInteger(number) && _.isInteger(commission) ? 0 : CURRENCY_DECIMAL_PRECISION
    const amount = new Bignumber(number).abs()
    const amountCommission = new Bignumber(commission).abs()

    return Bignumber.sum.apply(null, [amount, amountCommission]).toFormat(precision, CURRENCY_FORMAT)
}

export const Amount = ({
    operationStatus = '',
    amount = {},
    commission = 0
}) => {
    const amountValue = _.toNumber(_.get(amount, 'value', 0))
    const currency = _.get(amount, 'currency', '')
    const currencyCode = _.get(amount, 'code', '')
    const amountIsPositive = amountValue > 0
    const amountAbsoluteValue = Math.abs(amountValue)
    const operationStatusStyle = amountIsPositive
        ? style.green
        : _.get(statusColorMapping, operationStatus, '')
    const isCurrency = checkIsCurrency(currencyCode)
    const calculatedAmount = formatNumber(amountAbsoluteValue, commission)

    return (
        <div className={style.amount}>
            {Boolean(amountAbsoluteValue) && (
                <div className={style.amountValue}>
                    <strong className={operationStatusStyle}>
                        <span className={style.value}>
                            {calculatedAmount}
                        </span>
                    </strong>
                    {currencyCode && isCurrency ? (
                        <Currency title={currencyCode} />) : (<span>{currency}</span>)}
                </div>
            )}
        </div>
    )
}

Amount.propTypes = {
    operationStatus: PropTypes.string,
    amount: PropTypes.object,
    commission: PropTypes.number
}
