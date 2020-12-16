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
    MASK_MONTH,
    MONTH_FORMAT,
    MONTH_AND_YEAR_PLACEHOLDER,
    MASK_MONTH_INVALID
} from '../constants'
import { dateStringValidation, makeFullISOStringFromMonthYear } from '../utils'
import { IconBlock } from '../components/icon-block/icon-block'
import style from '../calendar-input.css'

const defaultTheme = _.merge({}, Input.theme, style)

const RU_MONTH_REGEXP = /([\d•]{4})-([\d•]{2})/

const valueFormatting = (value) => {
    if (Input.Masked.utils.isMaskedValue(value)) {
        return value.replace(RU_MONTH_REGEXP, '$2.$1')
    } else if ((value.length > MASK_MONTH.length) && isValid(value)) {
        return format(toDate(value), MONTH_FORMAT, LOCALE)
    }

    return value
}

export class MonthInput extends React.Component {
    state = {
        baseDate: this.props.value
    }

    // eslint-disable-next-line babel/camelcase, comment: React UNSAFE method
    UNSAFE_componentWillReceiveProps (nextProps) {
        if (this.props.value !== nextProps.value) {
            if (dateStringValidation(nextProps.value)) {
                this.setState({
                    baseDate: nextProps.value
                })
            }
        }
    }
    handleChange = (event) => {
        if (Input.Masked.utils.isMaskedValue(this.props.value)) {
            this.props.onChange(Input.getInputDiff(event.target.value, this.prevSelectionStart, event.target.selectionStart), event)
        } else {
            this.props.onChange(makeFullISOStringFromMonthYear(event.target.value, this.state.baseDate), event)
        }
    }
    handleFocus = (event) => {
        this.props.onFocus(makeFullISOStringFromMonthYear(event.target.value, this.state.baseDate), event)
    }
    handleBlur = (event) => {
        this.props.onBlur(makeFullISOStringFromMonthYear(event.target.value, this.state.baseDate), event)
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
        const passingValue = valueFormatting(value)

        const element = isTouchable() && isMobileEnabled() ? (
            <Input
                inputMode="decimal"
                {..._.omit(passedProps, ['forceOpened', 'restriction'])}
                value={value}
                placeholder={disabled ? EMPTY_STRING : MONTH_AND_YEAR_PLACEHOLDER}
                autoComplete="off"
                onChange={this.handleChange}
                onFocus={this.handleFocus}
                onBlur={this.handleBlur}
                onKeyDown={this.handleKeyDown}
                onContextMenu={this.handleContextMenu}
                disabled={disabled}
                theme={theme}
            />
        ) : (
            <Input.Masked.Typeahead
                inputMode="decimal"
                {..._.omit(passedProps, ['forceOpened'])}
                value={passingValue}
                mask={Input.Masked.utils.maskedFormat(value.length === MASK_MONTH.length ? MASK_MONTH : MASK_MONTH_INVALID, value)}
                guide={false}
                placeholderChar="_"
                placeholder={disabled ? EMPTY_STRING : MONTH_AND_YEAR_PLACEHOLDER}
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

        return (
            <div className={theme.calendarMonthYearBlock}>
                {element}
                {!disabled && <IconBlock className={theme.iconPosition} />}
            </div>
        )
    }
}

MonthInput.propTypes = {
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
        calendarMonthYearBlock: PropTypes.string,
        iconPosition: PropTypes.string,
        block: PropTypes.string,
        disabled: PropTypes.string,
        error: PropTypes.string,
        icon: PropTypes.string,
        inputIcon: PropTypes.string
    })
}

MonthInput.defaultProps = {
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

MonthInput.theme = defaultTheme
