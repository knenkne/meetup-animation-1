import React from 'react'
import PropTypes from 'prop-types'
import _ from 'lodash'
import { format, isValid, toDate } from 'date-fns'

import { Input } from '../../input'
import { mergeTheme, isTouchable } from '../../utils'
import {
    LOCALE,
    EMPTY_STRING,
    TIME_MASK,
    DATE_TIME_FORMAT,
    TIME_PLACEHOLDER,
    underScoreWidthSpaceRegExp
} from '../constants'
import { dateStringValidation, makeFullISOFromTime } from '../utils'
import { isMobileEnabled } from '../mobile-enabler'
import { IconBlock } from '../components/icon-block/icon-block'
import style from '../calendar-input.css'

const defaultTheme = mergeTheme(Input.theme, style)

const valueFormatting = (value) => {
    if (Input.Masked.utils.isMaskedValue(value)) {
        return value
    } else if ((value.length > TIME_MASK.length) && isValid(value) && !underScoreWidthSpaceRegExp.test(value)) {
        return format(toDate(value), DATE_TIME_FORMAT, LOCALE)
    }

    return value
}

/* eslint-disable valid-jsdoc, comment: некорректный парсинг jsdoc */
/**
 * [Zeplin](https://app.zeplin.io/project/59312e1ebdf1da6fc8d37ffb/dashboard?q=calendar)
 * Ввод времени
 *
 * @param {Object} props - свойства компонента
 * @return {JSX} - компонент
 */
export class TimeInput extends React.Component {
    state = {
        baseDate: this.props.value
    }
    // eslint-disable-next-line babel/camelcase, comment: React UNSAFE method
    UNSAFE_componentWillReceiveProps (nextProps) {
        if (this.props.value !== nextProps.value && dateStringValidation(nextProps.value)) {
            this.setState({
                baseDate: nextProps.value
            })
        }
    }

    handleChange = (event) => {
        if (Input.Masked.utils.isMaskedValue(this.props.value)) {
            this.props.onChange(Input.getInputDiff(event.target.value, this.prevSelectionStart, event.target.selectionStart), event)
        } else {
            this.props.onChange(makeFullISOFromTime(event.target.value, this.state.baseDate), event)
        }
    }
    handleFocus = (event) => {
        this.props.onFocus(makeFullISOFromTime(event.target.value, this.state.baseDate), event)
    }
    handleBlur = (event) => {
        this.props.onBlur(makeFullISOFromTime(event.target.value, this.state.baseDate), event)
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
                {..._.omit(passedProps, 'restriction')}
                value={passingValue}
                placeholder={disabled ? EMPTY_STRING : TIME_PLACEHOLDER}
                autoComplete="off"
                onChange={this.handleChange}
                onFocus={this.handleFocus}
                onBlur={this.handleBlur}
                onKeyDown={this.handleKeyDown}
                onContextMenu={this.handleContextMenu}
                disabled={disabled}
                theme={theme}
                type="time"
            />
        ) : (
            <Input.Masked.Typeahead
                inputMode="decimal"
                {...passedProps}
                value={passingValue}
                mask={Input.Masked.utils.maskedFormat(TIME_MASK, value)}
                guide={false}
                placeholderChar="_"
                placeholder={disabled ? EMPTY_STRING : TIME_PLACEHOLDER}
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
            <div className={theme.calendarTimeInputBlock}>
                {element}
                {!disabled && <IconBlock iconName="icon:core/common/time" className={theme.iconPosition} />}
            </div>
        )
    }
}

TimeInput.propTypes = {
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
        calendarTimeInputBlock: PropTypes.string,
        iconPosition: PropTypes.string,
        block: PropTypes.string,
        disabled: PropTypes.string,
        error: PropTypes.string,
        icon: PropTypes.string,
        inputIcon: PropTypes.string
    })
}

TimeInput.defaultProps = {
    value: '',
    error: void 0,
    onChange: _.noop,
    onFocus: _.noop,
    onBlur: _.noop,
    onKeyDown: _.noop,
    onContextMenu: _.noop,
    name: '',
    disabled: false,
    theme: defaultTheme
}

TimeInput.theme = defaultTheme
TimeInput.displayName = 'Calendar.Time.Input'
