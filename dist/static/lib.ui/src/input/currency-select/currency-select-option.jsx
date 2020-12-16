import React from 'react'
import PropTypes from 'prop-types'

import { Button } from '../../button'
import { Currency } from '../../currency'
import { mergeTheme } from '../../utils'

import style from './currency-select.css'

const theme = mergeTheme(Button.RadioSegmented.theme, style)

/**
 * [Zeplin](https://app.zeplin.io/project/5c74ef0d753f3ebccdf8f33d/screen/5cadec9058ed0fbf55deeff4)
 * Технический компонент для указания опции в поле выбора валюты
 *
 * @param {Object} props - свойства компонента
 * @return {JSX} - компонент
 */
export const CurrencySelectOption = (props) => {
    const altSymbol = Currency.options.symbols[props.value.toLowerCase()]

    return (
        <Button.RadioSegmented
            {...props}
            title={props.value}
            translations={{ title: props.title }}
            a11y={{ title: props.title }}
            theme={theme}
        >
            {altSymbol ? (
                <Currency mode="symbol" title={props.value} />
            ) : (
                <span>{props.value}</span>
            )}
        </Button.RadioSegmented>
    )
}

CurrencySelectOption.propTypes = {
    value: PropTypes.string.isRequired,
    title: PropTypes.string
}


CurrencySelectOption.defaultProps = {
    title: ''
}

CurrencySelectOption.displayName = 'Input.CurrencySelect.Option'
