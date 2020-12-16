import React from 'react'
import PropTypes from 'prop-types'
import classnames from 'classnames'
import _ from 'lodash'

import { omittere } from '../utils'
import { Input } from '../input'
import { Listbox } from '../listbox'

import { BaseSlider } from './base-slider'
import { Boundaries } from './boundaries'
import defaultTheme from './style.css'

/* eslint-disable valid-jsdoc, comment: некорректный парсинг jsdoc */
/**
 * [Zeplin](https://app.zeplin.io/project/59312e1ebdf1da6fc8d37ffb/dashboard?q=Blocks%20Slider)
 * Выбор значения с ползунком и полем ввода
 *
 * @param {Object} props - свойства компонента
 * @return {JSX} - компонент
 */
// eslint-disable-next-line complexity, comment: TODO - decrease complexity
export const Slider = ({
    value,
    onChange,
    onFocus,
    onBlur,
    disabled,
    error,
    mode,
    colorScheme,
    min,
    max,
    step,
    digits,
    grid,
    options,
    transitionDuration,
    tabIndex,
    id,
    placeholder,
    active,
    formName,
    prefix,
    suffix,
    decimalSymbol,
    includeThousandsSeparator,
    thousandsSeparatorSymbol,
    allowDecimal,
    allowNegative,
    decimalLimit,
    ...props
}) => {
    const sliderMode = mode === 'input:segmented' || mode === 'segmented' ? 'segmented' : void 0

    const onChangeOption = React.useCallback((index) => {
        onChange(options[index].value)
    }, [])

    const listBoxRef = React.useRef(null)

    return (
        <div
            {...props}
            className={classnames(
                defaultTheme.slider,
                disabled && defaultTheme.disabled,
                options && listBoxRef?.current?.state?.open && defaultTheme.withOptions
            )}
        >
            {options ? (
                <Listbox
                    ref={listBoxRef}
                    value={value}
                    onChange={onChange}
                    onFocus={onFocus}
                    onBlur={onBlur}
                    options={options}
                    tabIndex={tabIndex}
                    active={active}
                    formName={formName}
                    error={error}
                    id={id}
                    mode="autoselect"
                />
            ) : (
                <Input.Numeric
                    value={value}
                    onChange={onChange}
                    onFocus={onFocus}
                    onBlur={onBlur}
                    decimalSymbol={decimalSymbol}
                    includeThousandsSeparator={includeThousandsSeparator}
                    thousandsSeparatorSymbol={thousandsSeparatorSymbol}
                    allowDecimal={allowDecimal}
                    allowNegative={allowNegative}
                    decimalLimit={decimalLimit}
                    disabled={disabled}
                    tabIndex={tabIndex}
                    placeholder={placeholder}
                    active={active}
                    formName={formName}
                    prefix={prefix}
                    suffix={suffix}
                    error={error}
                    id={id}
                    min={_.first(grid) || min}
                    max={_.last(grid) || max}
                    allowEmpty={false}
                />
            )}
            <BaseSlider
                value={options ? options.findIndex((item) => item.value === value) : value}
                onChange={options ? onChangeOption : onChange}
                mode={sliderMode}
                colorScheme={colorScheme}
                min={min}
                max={max}
                step={step}
                digits={digits}
                error={error}
                disabled={disabled}
                transitionDuration={transitionDuration}
                grid={options ? options.map((item, index) => index) : grid}
            />
            <Boundaries
                decimalSymbol={decimalSymbol}
                includeThousandsSeparator={includeThousandsSeparator}
                thousandsSeparatorSymbol={thousandsSeparatorSymbol}
                allowDecimal={allowDecimal}
                allowNegative={allowNegative}
                decimalLimit={decimalLimit}
                options={options}
                grid={grid}
                min={min}
                max={max}
                prefix={prefix}
                suffix={suffix}
            />
        </div>
    )
}

Slider.propTypes = {
    colorScheme: PropTypes.oneOf([
        'base',
        'purple',
        'blue',
        'green',
        'skyblue',
        'black',
        'gold',
        'aqua'
    ]).isRequired,
    /**
     * "segmented" for render delimiters
     */
    mode: PropTypes.oneOf(['segmented']),

    value: PropTypes.string.isRequired,
    onChange: PropTypes.func,
    onFocus: PropTypes.func,
    onBlur: PropTypes.func,
    disabled: PropTypes.bool,
    formName: PropTypes.string,
    active: PropTypes.bool,

    min: PropTypes.oneOfType([
        PropTypes.number,
        PropTypes.string
    ]),
    max: PropTypes.oneOfType([
        PropTypes.number,
        PropTypes.string
    ]),
    step: PropTypes.oneOfType([
        PropTypes.number,
        PropTypes.string
    ]),
    /**
     * Auto generation of step. props.step with this prop is wanted step size or below
     */
    digits: PropTypes.arrayOf(PropTypes.number),
    /**
     * Array of prepared grid values (for example 100, 200, 500, 1000, 10000, 100000)
     */
    grid: PropTypes.arrayOf(
        PropTypes.oneOfType([
            PropTypes.number,
            PropTypes.string
        ])
    ),
    /**
     * Array of select options (title, value)
     */
    options: PropTypes.arrayOf(
        PropTypes.shape({
            title: PropTypes.string,
            value: PropTypes.oneOfType([
                PropTypes.string,
                PropTypes.number
            ])
        })
    ),

    error: PropTypes.string,
    prefix: PropTypes.string,
    suffix: PropTypes.string,
    thousandsSeparatorSymbol: PropTypes.string,
    placeholder: PropTypes.string,
    id: PropTypes.string,
    decimalSymbol: PropTypes.string,
    includeThousandsSeparator: PropTypes.bool,
    allowDecimal: PropTypes.bool,
    allowNegative: PropTypes.bool,
    decimalLimit: PropTypes.number,
    transitionDuration: PropTypes.number,
    tabIndex: PropTypes.number
}

Slider.defaultProps = {
    colorScheme: 'base',
    mode: void '',

    onChange: _.noop,
    onFocus: _.noop,
    onBlur: _.noop,
    tabIndex: 0,
    disabled: false,
    formName: void '',
    active: false,

    min: 0,
    max: 100,
    step: 1,
    digits: void 0,
    grid: void 0,
    options: void 0,

    error: void 0,
    prefix: '',
    suffix: '',
    thousandsSeparatorSymbol: ' ',
    decimalSymbol: ',',
    placeholder: void '',
    id: void '',
    includeThousandsSeparator: true,
    allowDecimal: false,
    allowNegative: false,
    decimalLimit: void 0,
    transitionDuration: 0
}

Slider.displayName = 'Slider'
Slider.theme = defaultTheme

const formOmitProps = [
    'asyncValidating',
    'autofilled',
    'dirty',
    'dispatch',
    'hasServerError',
    'initialValue',
    'invalid',
    'pristine',
    'submitFailed',
    'submitting',
    'touched',
    'valid',
    'visited',
    'warning'
]

export default omittere(formOmitProps)(Slider)
