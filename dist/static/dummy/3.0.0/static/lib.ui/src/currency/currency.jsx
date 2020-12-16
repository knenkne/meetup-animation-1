import React from 'react'
import PropTypes from 'prop-types'
import _ from 'lodash'
import classnames from 'classnames'

import { pluralize } from '../utils'

import { options, setCurrencyDisplayName } from './options'
import defaultTheme from './style.css'

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
        .extend({
            'data-unit': 'currency',
            className: classnames(
                props.theme.currency,
                { [props.theme.symbol]: isSymbol(props.title, props.mode) }
            )
        })
        .value()

    return (
        <span {...passedProps}>
            {getCurrencyValue(props.title, props.mode, props.value)}
        </span>
    )
}

Currency.propTypes = {
    theme: PropTypes.object,
    /**
     * Только для mode="auto" или "word" с Currency.setCurrencyDisplayName
     */
    value: PropTypes.string,
    title: PropTypes.string,
    mode: PropTypes.oneOf(['auto', 'symbol', 'word', 'code'])
}

Currency.defaultProps = {
    theme: defaultTheme,
    value: '1',
    title: void 0,
    mode: 'auto'
}

Currency.theme = defaultTheme
Currency.options = options
Currency.setCurrencyDisplayName = setCurrencyDisplayName
Currency.getCurrencyValue = getCurrencyValue
Currency.displayName = 'Currency'
export default Currency
