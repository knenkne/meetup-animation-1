import React from 'react'
import PropTypes from 'prop-types'
import _ from 'lodash'
import classnames from 'classnames'

import { autoSizeFactory } from '../hoc/auto-size'
import { Numeric } from '../numeric/numeric'
import defaultInputTheme from '../input.css'

import { CounterControl } from './counter-control'
import defaultTheme from './counter.css'

const TOP_ARROW = 38
const BOTTOM_ARROW = 40
const HOME = 36
const END = 35
const PAGE_UP = 33
const PAGE_DOWN = 34

const MULTIPLICITY = 10

const AdaptiveNumeric = autoSizeFactory({ minWidth: 36 })(Numeric)

const inputTheme = _.extend({}, defaultInputTheme, {
    input: classnames(defaultInputTheme.input, defaultTheme.input)
})

/* eslint-disable valid-jsdoc, comment: некорректный парсинг jsdoc */
/**
 * [Zeplin](https://app.zeplin.io/project/5c74ef0d753f3ebccdf8f33d/screen/5cadc53a40aa3004f12e5f7e)
 * Аналог input type="number" с role="spinbutton"
 *
 * @param {Object} props - свойства компонента
 * @return {JSX} - компонент
 */
export class Counter extends React.PureComponent {
    static propTypes = {
        value: PropTypes.string.isRequired,
        onKeyDown: PropTypes.func,
        onChange: PropTypes.func,
        disabled: PropTypes.bool,
        min: PropTypes.number,
        max: PropTypes.number,
        step: PropTypes.number,
        translations: PropTypes.shape({
            minWarning: PropTypes.string,
            maxWarning: PropTypes.string
        }),
        prefix: PropTypes.string,
        suffix: PropTypes.string,
        /**
         * use this for a11y naming
         */
        title: PropTypes.string.isRequired,
        colorScheme: PropTypes.oneOf([
            'green',
            'blue',
            'violet',
            'turquoise',
            'sky-blue',
            'aqua',
            'gold',
            'charcoal-grey'
        ]),
        readonly: PropTypes.bool,
        readOnly: PropTypes.bool,
        mode: PropTypes.oneOf(['wide', void 0])
    }

    static defaultProps = {
        onChange: _.noop,
        onKeyDown: _.noop,
        min: 0,
        max: Infinity,
        translations: {
            minWarning: void 0,
            maxWarning: void 0
        },
        step: 1,
        disabled: false,

        prefix: '',
        suffix: '',
        colorScheme: 'green',
        readonly: false,
        readOnly: false,
        mode: void 0
    }

    getWarning = () => {
        const {
            min,
            max,
            translations: { minWarning, maxWarning },
            value
        } = this.props

        if (value < min) {
            return minWarning
        } else if (value > max) {
            return maxWarning
        }

        return null
    }

    handleDecrease = () => {
        this.handleDecreaseByTimes(1)
    }

    handleIncrease = () => {
        this.handleIncreaseByTimes(1)
    }

    handleDecreaseByTimes = (times) => {
        const { step, value, onChange, min, max } = this.props
        const newValue = _.toString(
            _.clamp(_.toInteger(value) - (times * step), min, max)
        )

        if (newValue !== value) {
            onChange(newValue)
        }
    }

    handleIncreaseByTimes = (times) => {
        const { step, value, onChange, min, max } = this.props
        const newValue = _.toString(
            _.clamp(_.toInteger(value) + (times * step), min, max)
        )

        if (newValue !== value) {
            onChange(newValue)
        }
    }

    handleKeyDown = (event) => {
        const { onChange, min, max, onKeyDown, disabled } = this.props

        /*
         * Важно понимать что выражение `event.preventDefault()` необходимо выполнять после изменения значения.
         * Такая необходимость происходит из-за того, что некоторые скринридеры (VoiceOver) меняют режим взаимодействия браузера и клавиатуры,
         * что, в свою очередь, отменяет возможность клавиатурным событиям менять значение и ломать a11y.
         * */
        if (!disabled) {
            switch (event.keyCode) {
                case BOTTOM_ARROW: {
                    this.handleDecreaseByTimes(1)
                    event.preventDefault()
                    break
                }
                case TOP_ARROW: {
                    this.handleIncreaseByTimes(1)
                    event.preventDefault()
                    break
                }
                case HOME: {
                    onChange(_.toString(min))
                    event.preventDefault()
                    break
                }
                case END: {
                    onChange(_.toString(max))
                    event.preventDefault()
                    break
                }
                case PAGE_DOWN: {
                    this.handleDecreaseByTimes(MULTIPLICITY)
                    event.preventDefault()
                    break
                }
                case PAGE_UP: {
                    this.handleIncreaseByTimes(MULTIPLICITY)
                    event.preventDefault()
                    break
                }

                default: {
                    break
                }
            }
        }

        onKeyDown(event)
    }

    render () {
        const {
            min,
            max,
            step,
            disabled,
            value,
            prefix,
            suffix,
            title,
            colorScheme,
            readonly,
            readOnly,
            mode
        } = this.props

        const inputProps = _(this.props)
            .omit(['translations', 'step', 'colorScheme', 'mode'])
            .extend({
                theme: inputTheme,
                onKeyDown: this.handleKeyDown,
                autoComplete: 'off',
                allowDecimal: false,
                allowEmpty: false,
                role: 'spinbutton',
                'aria-disabled': disabled,
                'aria-valuenow': value,
                'aria-valuemin': min,
                'aria-valuemax': max,
                'aria-valuetext': `${prefix}${value}${suffix}`,
                'aria-label': title
            })
            .value()

        const parsedValue = _.toInteger(value)
        const canDecrease = parsedValue - step < min
        const canIncrease = parsedValue + step > max

        const InputComponent = mode === 'wide' ? Numeric : AdaptiveNumeric

        return (
            <div
                className={classnames(
                    defaultTheme.counter,
                    defaultTheme[colorScheme],
                    mode === 'wide' && defaultTheme.wide
                )}
                data-unit="input:counter"
            >
                <InputComponent {...inputProps} />

                {!readonly && !readOnly && !disabled && (
                    <>
                        <CounterControl
                            mode="decrease"
                            onClick={this.handleDecrease}
                            disabled={canDecrease}
                            aria-hidden="true"
                        />

                        <CounterControl
                            mode="increase"
                            onClick={this.handleIncrease}
                            disabled={canIncrease}
                            aria-hidden="true"
                        />
                    </>
                )}
            </div>
        )
    }
}

Counter.theme = defaultTheme
Counter.displayName = 'Input.Counter'
