import React from 'react'
import PropTypes from 'prop-types'
import _ from 'lodash'
import { format, isValid, toDate, setYear } from 'date-fns'

import { Input } from '../../input'
import {
    LOCALE,
    EMPTY_STRING,
    MASK_YEAR,
    YEAR_FORMAT,
    underScoreWidthSpaceRegExp,
    MASK_YEAR_INVALID
} from '../constants'
import { dateStringValidation, fullISOFormat } from '../utils'
import { IconBlock } from '../components/icon-block/icon-block'
import style from '../calendar-input.css'

const defaultTheme = _.merge({}, Input.theme, style)

const makeFullISOString = (year, date) =>
    (year.length < YEAR_FORMAT.length) || underScoreWidthSpaceRegExp.test(year)
        ? year
        : fullISOFormat(setYear(isValid(date) ? date : new Date(), year))

const valueFormatting = (value) => {
    if (Input.Masked.utils.isMaskedValue(value)) {
        return value
    } else if ((value.length > MASK_YEAR.length) && isValid(value) && !underScoreWidthSpaceRegExp.test(value)) {
        return format(toDate(value), YEAR_FORMAT, LOCALE)
    }

    return value
}

export class YearInput extends React.PureComponent {
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
            this.props.onChange(makeFullISOString(event.target.value, this.state.baseDate), event)
        }
    }
    handleFocus = (event) => {
        this.props.onFocus(makeFullISOString(event.target.value, this.state.baseDate), event)
    }
    handleBlur = (event) => {
        this.props.onBlur(makeFullISOString(event.target.value, this.state.baseDate), event)
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
        return (
            <div className={theme.calendarMonthYearBlock}>
                <Input.Masked.Typeahead
                    inputMode="decimal"
                    {...passedProps}
                    value={passingValue}
                    mask={Input.Masked.utils.maskedFormat(value.length === MASK_YEAR.length ? MASK_YEAR : MASK_YEAR_INVALID, value)}
                    guide={false}
                    placeholderChar="_"
                    placeholder={disabled ? EMPTY_STRING : '____'}
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

YearInput.propTypes = {
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

YearInput.defaultProps = {
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

YearInput.theme = defaultTheme
