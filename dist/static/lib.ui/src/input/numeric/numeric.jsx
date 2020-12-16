import React from 'react'
import PropTypes from 'prop-types'
import _ from 'lodash'
import createNumberMask from 'text-mask-addons/dist/createNumberMask'

import { Masked } from '../masked/masked'
import { safeClamp, maskNumberValue, unmaskNumberValue, getInputDiff } from '../utils'
import defaultTheme from '../input.css'

const propsForMask = [
    'allowDecimal',
    'allowNegative',
    'decimalLimit',
    'decimalSymbol',
    'prefix',
    'suffix',
    'includeThousandsSeparator',
    'thousandsSeparatorSymbol'
]

const propsForOmitDesktop = [
    'prefix',
    'suffix',
    'includeThousandsSeparator',
    'thousandsSeparatorSymbol',
    'allowDecimal',
    'decimalSymbol',
    'decimalLimit',
    'allowNegative',
    'allowEmpty',
    'min',
    'max'
]

const DOT = '.'
const EMPTY_STRING = ''

/* eslint-disable valid-jsdoc, comment: некорректный парсинг jsdoc */
/**
 * [Zeplin](https://app.zeplin.io/project/59312e1ebdf1da6fc8d37ffb/dashboard?q=input%20general)
 * Числовое поле ввода
 *
 * @param {Object} props - свойства компонента
 * @return {JSX} - компонент
 */
export class Numeric extends React.PureComponent {
    handleKeyDown = (event) => {
        this.prevSelectionStart = event.target.selectionStart
        this.props.onKeyDown(event)
    }

    handleContextMenu = (event) => {
        this.prevSelectionStart = event.target.selectionStart
        this.props.onContextMenu(event)
    }

    handleChange = (event) => {
        const { decimalSymbol, onChange } = this.props

        if (Masked.utils.isMaskedValue(this.props.value)) {
            onChange(getInputDiff(event.target.value, this.prevSelectionStart, event.target.selectionStart), event)
        } else {
            const dirtyValue = event.target.value

            const unmaskedValue = unmaskNumberValue(dirtyValue, { decimalSymbol })

            onChange(unmaskedValue, event)
        }
    }

    handleBeforeChange = ({ target }) => {
        /* eslint-disable no-param-reassign, comment: предварительная обработка события */
        const prevSelectionStart = target.selectionStart
        const prevSelectionEnd = target.selectionEnd
        const prevValue = target.value

        // Замена . на установленный разделитель
        const correctedValue = prevValue.replace(DOT, this.props.decimalSymbol)

        if (correctedValue !== target.value) {
            target.value = correctedValue
            target.selectionStart = prevSelectionStart
            target.selectionEnd = prevSelectionEnd
        }

        // Запрет ввода второго разделителя
        const firstDecimalPosition = target.value.indexOf(this.props.decimalSymbol)
        const lastDecimalPosition = target.value.lastIndexOf(this.props.decimalSymbol)

        if (lastDecimalPosition > -1 && firstDecimalPosition !== lastDecimalPosition && lastDecimalPosition < prevSelectionStart) {
            target.value = target.value.substring(0, lastDecimalPosition) + target.value.substring(lastDecimalPosition + 1)
            target.selectionStart = prevSelectionStart - 1
            target.selectionEnd = prevSelectionEnd - 1
        }
        /* eslint-enable no-param-reassign */
    }

    handleBlur = (event) => {
        if (!this.props.disabled && !Masked.utils.isMaskedValue(this.props.value)) {
            const { min, max, decimalSymbol, allowEmpty, onChange, onBlur, allowDecimal, decimalLimit } = this.props
            const dirtyValue = event.target.value

            const unmaskedValue = unmaskNumberValue(dirtyValue, { decimalSymbol, allowEmpty, allowDecimal, blur: true })
            const clampedValue = safeClamp(unmaskedValue, min, max)

            const moneyDecimalLimit = 3

            if (unmaskedValue !== clampedValue && !allowDecimal) {
                onChange(clampedValue, event)
            }

            if (allowDecimal && decimalLimit < moneyDecimalLimit) {
                if (clampedValue.includes(DOT)) {
                    if (clampedValue
                        .replace(/^-?\d*\.?|$/g, '')
                        .length === 1) {
                        onBlur(`${clampedValue}0`)
                    } else {
                        onBlur(clampedValue)
                    }
                } else {
                    onBlur(clampedValue ? `${clampedValue}.00` : '')
                }
            } else {
                onBlur(clampedValue)
            }
        } else {
            this.props.onBlur(event)
        }
    }

    mask = (value) => {
        const maskProperties = _.pick(this.props, propsForMask)

        maskProperties.allowLeadingZeroes = true

        if (_.includes(this.clampAnyFix(value), DOT)) {
            maskProperties.decimalSymbol = DOT
        }

        // Сторонняя функция форматирования вырежет символ маски
        const pseudoNumberValue = value.replace(/•/g, '1')

        return Masked.utils.maskedFormat(createNumberMask(maskProperties)(pseudoNumberValue), value)
    }

    clampAnyFix = (v) => v.replace(this.props.prefix, EMPTY_STRING).replace(this.props.suffix, EMPTY_STRING)

    render () {
        const {
            prefix,
            suffix,
            allowDecimal,
            decimalSymbol,
            value,
            onFocus
        } = this.props

        const maskedValue = maskNumberValue(value, {
            allowDecimal,
            decimalSymbol,
            mask: this.mask,
            prefix,
            suffix
        })

        const props = _(this.props)
            .omit(propsForOmitDesktop)
            .extend({
                mask: this.mask,
                onFocus,
                value: maskedValue,
                onChange: this.handleChange,
                onBeforeChange: this.handleBeforeChange,
                onBlur: this.handleBlur,
                onKeyDown: this.handleKeyDown,
                onContextMenu: this.handleContextMenu,
                placeholderChar: '_',
                guide: true,
                keepCharPositions: false
            })
            .value()

        return <Masked inputMode={allowDecimal ? 'decimal' : 'numeric'} {...props} />
    }
}

Numeric.propTypes = {
    // eslint-disable react/no-unused-prop-types, comment: сквозной проброс пропов
    active: PropTypes.bool,
    disabled: PropTypes.bool,
    theme: PropTypes.shape({
        input: PropTypes.string,
        error: PropTypes.string,
        disabled: PropTypes.string
    }),
    refWrapper: PropTypes.func,

    value: PropTypes.string,
    onChange: PropTypes.func,
    onBlur: PropTypes.func,
    onFocus: PropTypes.func,
    onKeyDown: PropTypes.func,
    onContextMenu: PropTypes.func,
    /**
     * Символ для обозначения валюты или иных символов, которые должны быть слева от вводимого числа
     */
    prefix: PropTypes.string,
    /**
     * Символ для обозначения валюты или иных символов, которые должны быть справа от вводимого числа
     */
    suffix: PropTypes.string,
    /**
     * Символ для разделения тысяч
     */
    thousandsSeparatorSymbol: PropTypes.string,
    decimalSymbol: PropTypes.string,
    includeThousandsSeparator: PropTypes.bool,
    allowDecimal: PropTypes.bool,
    allowNegative: PropTypes.bool,
    /**
     * Поле, для которого разрешено пустое значение, не будет приведено к min|max
     */
    allowEmpty: PropTypes.bool,
    decimalLimit: PropTypes.number,
    min: PropTypes.number,
    max: PropTypes.number
    // eslint-enable
}

Numeric.defaultProps = {
    active: false,
    disabled: false,
    refWrapper: _.noop,
    theme: defaultTheme,

    value: '',
    onChange: _.noop,
    onBlur: _.noop,
    onFocus: _.noop,
    onKeyDown: _.noop,
    onContextMenu: _.noop,

    prefix: '',
    suffix: '',
    thousandsSeparatorSymbol: ' ',
    decimalSymbol: '.',
    includeThousandsSeparator: true,
    allowDecimal: false,
    allowNegative: false,
    allowEmpty: false,
    decimalLimit: void 0,
    min: void 0,
    max: void 0
}

Numeric.displayName = 'Input.Numeric'
