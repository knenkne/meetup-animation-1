import React from 'react'
import PropTypes from 'prop-types'
import _ from 'lodash'
import { format, isValid, toDate } from 'date-fns'

import { Input } from '../../input'
import { isTouchable } from '../../utils'
import { isMobileEnabled } from '../mobile-enabler'
import {
    LOCALE,
    EMPTY_STRING,
    MASK_DATE,
    MASK_DATE_INVALID,
    PLACEHOLDER,
    RU_DATE_REGEXP,
    underScoreWidthSpaceRegExp
} from '../constants'
import { isofyingDateString } from '../utils'
import style from '../calendar-input.css'

const defaultTheme = { ...Input.theme, ...style }
const prepareValue = (value) => {
    if (Input.Masked.utils.isMaskedValue(value)) {
        return value.replace(RU_DATE_REGEXP, '$3.$2.$1')
    } else if ((value.length > MASK_DATE.length) && isValid(value) && !underScoreWidthSpaceRegExp.test(value)) {
        return format(toDate(value), 'L', LOCALE)
    }

    return value
}

export class SingleInput extends React.PureComponent {

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
        const { value, disabled, theme, icon, ...passedProps } = this.props
        const inputElement = isTouchable() && isMobileEnabled() ? (
            <Input
                inputMode="decimal"
                {..._.omit(passedProps, 'restriction')}
                value={value.split('T')[0]}
                placeholder={disabled ? EMPTY_STRING : PLACEHOLDER}
                autoComplete="off"
                onChange={this.handleChange}
                onFocus={this.handleFocus}
                onBlur={this.handleBlur}
                onKeyDown={this.handleKeyDown}
                onContextMenu={this.handleContextMenu}
                disabled={disabled}
                theme={theme}
                icon={icon}
            />
        ) : (
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
                icon={icon}
            />
        )

        return inputElement
    }
}

SingleInput.propTypes = {
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
        calendarInputBlock: PropTypes.string,
        iconPosition: PropTypes.string,
        block: PropTypes.string,
        disabled: PropTypes.string,
        error: PropTypes.string,
        icon: PropTypes.string,
        inputIcon: PropTypes.string
    }),
    icon: PropTypes.string
}

SingleInput.defaultProps = {
    value: '',
    error: void 0,
    onChange: _.noop,
    onFocus: _.noop,
    onBlur: _.noop,
    onKeyDown: _.noop,
    onContextMenu: _.noop,
    name: EMPTY_STRING,
    disabled: false,
    theme: defaultTheme,
    icon: 'icon:core/common/calendar'
}

SingleInput.theme = defaultTheme
