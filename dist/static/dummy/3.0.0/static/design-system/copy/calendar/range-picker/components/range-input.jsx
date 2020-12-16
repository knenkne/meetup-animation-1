import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import _ from 'lodash'
import { format, isValid, toDate } from 'date-fns'

import { Input } from '../../../input'
import {
    LOCALE,
    PLACEHOLDER,
    EMPTY_STRING,
    MASK_DATE,
    MASK_DATE_INVALID,
    RU_DATE_REGEXP,
    underScoreWidthSpaceRegExp
} from '../../constants'
import { isofyingDateString } from '../../utils'
import style from '../../calendar-input.css'

const defaultTheme = { ...Input.theme, ...style }
const prepareValue = (value) => {
    if (Input.Masked.utils.isMaskedValue(value)) {
        return value.replace(RU_DATE_REGEXP, '$3.$2.$1')
    } else if ((value.length > MASK_DATE.length) && isValid(value) && !underScoreWidthSpaceRegExp.test(value)) {
        return format(toDate(value), 'L', LOCALE)
    }

    return value
}

export class RangeInput extends PureComponent {

    handleChange = (event) => {
        if (Input.Masked.utils.isMaskedValue(this.props.value)) {
            this.props.onChange(Input.getInputDiff(event.target.value, this.prevSelectionStart, event.target.selectionStart), event)
        } else {
            this.props.onChange(isofyingDateString({ value: event.target.value }), event)
        }
    }
    handleFocus = (event) => {
        this.props.onFocus(isofyingDateString({ value: event.target.value }), event)
    }
    handleBlur = (event) => {
        this.props.onBlur(isofyingDateString({ value: event.target.value }), event)
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
        return (
            <Input.Masked.Typeahead
                inputMode="decimal"
                {...passedProps}
                value={prepareValue(value)}
                mask={Input.Masked.utils.maskedFormat(value.length === MASK_DATE.length ? MASK_DATE : MASK_DATE_INVALID, value)}
                guide={false}
                placeholderChar="_"
                placeholder={disabled ? EMPTY_STRING : PLACEHOLDER}
                autoComplete="off"
                onChange={this.handleChange}
                onFocus={this.handleFocus}
                onBlur={this.handleBlur}
                onKeyDown={this.handleKeyDown}
                onContextMenu={this.handleContextMenu}
                disabled={disabled}
                theme={theme}
            />
        )
    }
}

RangeInput.propTypes = {
    id: PropTypes.string.isRequired,
    value: PropTypes.string,
    error: PropTypes.string,
    onChange: PropTypes.func,
    onFocus: PropTypes.func,
    onBlur: PropTypes.func,
    onKeyDown: PropTypes.func,
    onContextMenu: PropTypes.func,
    name: PropTypes.string,
    disabled: PropTypes.bool,
    touched: PropTypes.bool,
    theme: PropTypes.shape({
        input: PropTypes.string,
        calendarInputBlock: PropTypes.string,
        iconPosition: PropTypes.string,
        block: PropTypes.string,
        disabled: PropTypes.string,
        error: PropTypes.string,
        icon: PropTypes.string,
        inputIcon: PropTypes.string
    })
}

RangeInput.defaultProps = {
    value: '',
    error: void 0,
    onChange: _.noop,
    onFocus: _.noop,
    onBlur: _.noop,
    onKeyDown: _.noop,
    onContextMenu: _.noop,
    name: EMPTY_STRING,
    disabled: false,
    touched: false,
    theme: defaultTheme
}

export default RangeInput
