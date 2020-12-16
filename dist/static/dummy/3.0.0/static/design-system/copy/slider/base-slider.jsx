import React from 'react'
import PropTypes from 'prop-types'
import classnames from 'classnames'
import _ from 'lodash'

import { disableHandler, preventHandler } from '../utils'

import { Segments } from './segments'
import {
    computeStepByDigits,
    getValueByMouse,
    getGridValue,
    getLinearValue,
    addSliderHandlers,
    removeSliderHandlers
} from './utils'
import defaultTheme from './style.css'

export class BaseSlider extends React.PureComponent {
    static propTypes = {
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
        mode: PropTypes.oneOf([
            'segmented'
        ]),

        value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
        onChange: PropTypes.func,
        disabled: PropTypes.bool,

        error: PropTypes.string,
        min: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
        max: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
        step: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
        digits: PropTypes.arrayOf(PropTypes.number),
        grid: PropTypes.arrayOf(PropTypes.oneOfType([PropTypes.number, PropTypes.string])),
        transitionDuration: PropTypes.number,

        /**
         * Thrown out functions for adding global handlers to the event listeners of the document. CAUTION: do not change, only for unit-tests
         */
        addSliderHandlers: PropTypes.func.isRequired,
        removeSliderHandlers: PropTypes.func.isRequired
    }

    static defaultProps = {
        colorScheme: 'base',
        mode: void 0,

        onChange: _.noop,
        disabled: false,

        error: void 0,
        prefix: '',
        suffix: '',
        min: 0,
        max: 100,
        step: 1,
        grid: void 0,
        digits: void 0,
        title: void 0,
        transitionDuration: 0,

        addSliderHandlers,
        removeSliderHandlers
    }

    componentWillUnmount () {
        this.props.removeSliderHandlers(document, this.handleMouseMove, this.handleMouseUp)
    }

    setRefTrack = (component) => {
        this.track = component
    }

    setClosestValue = (event) => {
        const { min, max, step, digits, value, onChange, disabled, grid } = this.props

        const newValue = getValueByMouse(
            event,
            this.track,
            pageXOffset,
            computeStepByDigits(min, max, step, digits),
            min,
            max,
            grid,
            value
        )

        if (newValue !== value) {
            disableHandler(onChange, disabled)(newValue, event)
        }
    }

    handleMouseDown = (event) => {
        if (!this.props.disabled) {
            this.setClosestValue(event)

            this.props.addSliderHandlers(document, this.handleMouseMove, this.handleMouseUp)
        }
    }

    handleMouseMove = preventHandler(this.setClosestValue)

    handleMouseUp = (event) => {
        this.setClosestValue(event)

        this.props.removeSliderHandlers(document, this.handleMouseMove, this.handleMouseUp)
    }

    render () {
        const {
            min,
            max,
            value,
            grid,
            mode,
            step,
            digits,
            colorScheme,
            error,
            transitionDuration
        } = this.props

        const leftOffset = grid
            ? `${100 * getGridValue(value, grid)}%`
            : `${100 * getLinearValue(value, min, max)}%`

        return (
            <div
                className={classnames(
                    defaultTheme.basic,
                    defaultTheme[colorScheme],
                    error && defaultTheme.error
                )}
            >
                <div
                    ref={this.setRefTrack}
                    className={defaultTheme.track}
                    onMouseDown={this.handleMouseDown}
                    onTouchStart={this.handleMouseDown}
                >
                    <div
                        className={defaultTheme.progress}
                        style={{
                            width: leftOffset,
                            transition: `background-color 0.17s ease-in-out, border-color 0.17s ease-in-out, width ${transitionDuration}s linear`
                        }}
                    />
                    <div
                        className={defaultTheme.thumb}
                        style={{
                            left: leftOffset,
                            transition: `background-color 0.17s ease-in-out, border-color 0.17s ease-in-out, left ${transitionDuration}s linear`
                        }}
                    />
                    {mode === 'segmented' && (
                        <Segments
                            min={min}
                            max={max}
                            step={computeStepByDigits(min, max, step, digits)}
                            grid={grid}
                        />
                    )}
                </div>
            </div>
        )
    }
}
