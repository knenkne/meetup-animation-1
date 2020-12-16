import React from 'react'
import { PropTypes } from 'prop-types'
import { Input } from '@sbol/lib.ui/core/input'

/*
 * Формат суммы
 * @param {String} amount - сумма строкой
 * @param {Object} options - формат чисел
 * @param {Boolean} hideFromSbolPro - маскировать в режиме сбол про
 * @return {String}
 * @constructor
 */
/* eslint-disable react/jsx-no-literals, comment: для Сбол Про нужно скрывать суммы */
export const FormattedMoneyValue = ({ amount, options, hideFromSbolPro, isSbolPro }) => isSbolPro && hideFromSbolPro
    ? <span>&#8226;&#8226;&#8226;</span>
    : <span>{Input.formatNumberValue(String(amount), options)}</span>

FormattedMoneyValue.propTypes = {
    amount: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
    options: PropTypes.object,
    hideFromSbolPro: PropTypes.bool,
    isSbolPro: PropTypes.bool
}

FormattedMoneyValue.defaultProps = {
    amount: 0,
    options: {
        allowDecimal: true,
        thousandsSeparatorSymbol: ' '
    },
    hideFromSbolPro: true,
    isSbolPro: false
}

