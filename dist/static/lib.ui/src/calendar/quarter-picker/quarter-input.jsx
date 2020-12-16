import React from 'react'
import PropTypes from 'prop-types'
import _ from 'lodash'

import { Input } from '../../input'
import { EMPTY_STRING, MASK_QUARTER, QUARTER_PLACEHOLDER } from '../constants'
import { quarterMask, quarterUnmask } from '../utils'
import { IconBlock } from '../components/icon-block/icon-block'
import style from '../calendar-input.css'

const defaultTheme = _.merge({}, Input.theme, style)

export class QuarterInput extends React.Component {

    handleChange = (e) => {
        if (Input.Masked.utils.isMaskedValue(this.props.value)) {
            this.props.onChange(Input.getInputDiff(e.target.value, this.prevSelectionStart, e.target.selectionStart), e)
        } else {
            this.props.onChange(quarterUnmask(e.target.value), e)
        }
    }
    handleFocus = (e) => {
        this.props.onFocus(quarterUnmask(e.target.value), e)
    }
    handleBlur = (e) => {
        this.props.onBlur(quarterUnmask(e.target.value), e)
    }
    handleKeyDown = (event) => {
        this.prevSelectionStart = event.target.selectionStart
        this.props.onKeyDown(event)
    }

    handleContextMenu = (event) => {
        this.prevSelectionStart = event.target.selectionStart
        this.props.onContextMenu(event)
    }

    render () {
        const { value, disabled, theme, ...passedProps } = this.props
        const passingValue = quarterMask(value)
        return (
            <div className={theme.calendarDateTimeInputBlock}>
                <Input.Masked.Typeahead.KeepCharPositions
                    inputMode="decimal"
                    {...passedProps}
                    value={passingValue}
                    mask={Input.Masked.utils.maskedFormat(MASK_QUARTER, value)}
                    guide={false}
                    placeholderChar="_"
                    placeholder={disabled ? EMPTY_STRING : QUARTER_PLACEHOLDER}
                    autoComplete="off"
                    onChange={this.handleChange}
                    onFocus={this.handleFocus}
                    onBlur={this.handleBlur}
                    onKeyDown={this.handleKeyDown}
                    onContextMenu={this.handleContextMenu}
                    disabled={disabled}
                    theme={theme}
                />
                {!disabled && <IconBlock className={theme.iconPosition} />}
            </div>
        )
    }
}

QuarterInput.propTypes = {
    value: PropTypes.string,
    error: PropTypes.string,
    onChange: PropTypes.func,
    onFocus: PropTypes.func,
    onBlur: PropTypes.func,
    onKeyDown: PropTypes.func,
    onContextMenu: PropTypes.func,
    name: PropTypes.string,
    disabled: PropTypes.bool,
    theme: PropTypes.shape({
        input: PropTypes.string,
        calendarDateTimeInputBlock: PropTypes.string,
        iconPosition: PropTypes.string,
        block: PropTypes.string,
        disabled: PropTypes.string,
        error: PropTypes.string,
        icon: PropTypes.string,
        inputIcon: PropTypes.string
    })
}

QuarterInput.defaultProps = {
    value: '',
    error: void 0,
    onChange: _.noop,
    onFocus: _.noop,
    onBlur: _.noop,
    onKeyDown: _.noop,
    onContextMenu: _.noop,
    name: EMPTY_STRING,
    disabled: false,
    theme: defaultTheme
}

QuarterInput.theme = defaultTheme
