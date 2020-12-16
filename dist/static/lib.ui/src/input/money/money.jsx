import React from 'react'
import PropTypes from 'prop-types'
import _ from 'lodash'

import { Currency } from '../../currency'
import { Currency as CurrencyInput } from '../currency/currency'

/**
 * [Zeplin](https://app.zeplin.io/project/59312e1ebdf1da6fc8d37ffb/dashboard?q=input%20general)
 * Технический компонент для ввода суммы
 *
 * @param {Object} props - свойства компонента
 * @return {JSX} - компонент
 */
export const Money = ({ currency, ...props }) => (
    <CurrencyInput
        {...props}
        suffix={` ${Currency.getCurrencyValue(currency)}`}
    />
)

Money.displayName = 'Input.Money'

Money.propTypes = {
    // eslint-disable react/no-unused-prop-types, comment: сквозной проброс пропов
    disabled: PropTypes.bool,
    refWrapper: PropTypes.func,

    value: PropTypes.string,
    onChange: PropTypes.func,
    onBlur: PropTypes.func,

    prefix: PropTypes.string,
    suffix: PropTypes.string,
    thousandsSeparatorSymbol: PropTypes.string,
    placeholder: PropTypes.string,
    decimalSymbol: PropTypes.string,
    includeThousandsSeparator: PropTypes.bool,
    allowDecimal: PropTypes.bool,
    allowNegative: PropTypes.bool,
    allowEmpty: PropTypes.bool,
    min: PropTypes.number,
    max: PropTypes.number,
    currency: PropTypes.string
    // eslint-enable
}

Money.defaultProps = {
    disabled: false,
    refWrapper: _.noop,
    value: '',
    onChange: _.noop,
    onBlur: _.noop,

    prefix: '',
    suffix: '',
    thousandsSeparatorSymbol: ' ',
    decimalSymbol: ',',
    placeholder: void 0,
    includeThousandsSeparator: true,
    allowDecimal: false,
    allowNegative: false,
    allowEmpty: true,
    min: void 0,
    max: void 0,
    currency: void 0
}
