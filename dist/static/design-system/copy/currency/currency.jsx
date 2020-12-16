import React from 'react'
import PropTypes from 'prop-types'
import _ from 'lodash'

import { pluralize } from '../utils'

import { options, setCurrencyDisplayName } from './options'
import { CurrencyStyled } from './currency.style'

const hasFallback = (code) => _.has(options.display, _.lowerCase(code))
const hasSymbol = (code) => _.has(options.symbols, _.lowerCase(code))

const isSymbol = (code, mode) => {
    switch (mode) {
        case 'code':
        case 'word':
            return false
        case 'symbol':
            return hasSymbol(code)
        default:
            return !hasFallback(code) && hasSymbol(code)
    }
}

const getCurrencyValue = (code, mode = 'auto', value = 0) => {
    if (mode === 'code') {
        return code
    } else if ((mode === 'word' || mode === 'auto') && hasFallback(code)) {
        return pluralize(options.display[_.lowerCase(code)], value)
    } else if ((mode === 'symbol' || mode === 'auto') && hasSymbol(code)) {
        return options.symbols[_.lowerCase(code)]
    }

    return code
}

/**
 * Централизованный компонент для _вывода_ символа/текста валюты
 *
 * @param {Object} props - свойства компонента
 * @return {JSX} - компонент
 */
export function Currency (props) {
    const passedProps = _(props)
        .omit([
            'value',
            'currencyCode',
            'asSymbol',
            'mode',
            'theme',
            'title'
        ])
        .value()

    return (
        <CurrencyStyled {...passedProps} isSymbol={isSymbol(props.title, props.mode)}>
            {getCurrencyValue(props.title, props.mode, props.value)}
        </CurrencyStyled>
    )
}

Currency.propTypes = {
    /**
     * Только для mode="auto" или "word" с Currency.setCurrencyDisplayName
     */
    value: PropTypes.string,
    title: PropTypes.string,
    mode: PropTypes.oneOf(['auto', 'symbol', 'word', 'code'])
}

Currency.defaultProps = {
    value: '1',
    title: void 0,
    mode: 'auto'
}

Currency.options = options
Currency.setCurrencyDisplayName = setCurrencyDisplayName
Currency.getCurrencyValue = getCurrencyValue
Currency.displayName = 'Currency'

export default Currency
