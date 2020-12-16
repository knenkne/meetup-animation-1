import React, { Fragment } from 'react'
import { Currency } from '@sbol/lib.ui/core/currency'
import PropTypes from 'prop-types'
import { getConfigValue } from '@sbol/lib.app'

import { FormattedMoneyValue } from '../formatted-money-value'

const isSbolProConfig = getConfigValue('isSbolPro', false)

const POPULAR_CURRENCY = ['RUR', 'RUB', 'USD', 'EUR', 'JPY', 'GBP']

export const CurrencyValue = ({ sum: { amount, currency }, hideFromSbolPro, options, isSbolPro }) => {
    const fixedAmount = amount?.replace?.(',', '.') || amount
    const allowDecimal = fixedAmount % 1 !== 0
    return (
        <Fragment>
            <FormattedMoneyValue
                amount={fixedAmount}
                hideFromSbolPro={hideFromSbolPro}
                options={{
                    ...options,
                    allowDecimal
                }}
                isSbolPro={isSbolPro}
            />
            {' '}
            <Currency
                title={currency}
                mode={POPULAR_CURRENCY.includes(currency) ? 'symbol' : 'code'}
            />
        </Fragment>
    )
}

CurrencyValue.propTypes = {
    sum: PropTypes.object,
    hideFromSbolPro: PropTypes.bool,
    options: PropTypes.object,
    isSbolPro: PropTypes.bool
}

CurrencyValue.defaultProps = {
    sum: {
        amount: '',
        currency: ''
    },
    hideFromSbolPro: true,
    options: {
        allowDecimal: true,
        thousandsSeparatorSymbol: ' '
    },
    isSbolPro: isSbolProConfig
}
