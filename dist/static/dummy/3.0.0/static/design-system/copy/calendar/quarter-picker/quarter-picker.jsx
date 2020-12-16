import React from 'react'
import PropTypes from 'prop-types'
import _ from 'lodash'

import { dropdownHandleClose, dropdownCombiner } from '../components/hoc'
import { CalendarItem } from '../components/calendar-item/calendar-item'
import { CALENDAR_MODES } from '../constants'
import style from '../style.css'

import { QuarterInput } from './quarter-input'

const CalendarHOCed = dropdownHandleClose(CalendarItem)

const DropdownCombinerHOCed = dropdownCombiner(QuarterInput, CalendarHOCed, style.contentsViewQuarters)

export const QuarterPicker = (props) => (
    <DropdownCombinerHOCed
        {...props}
        mode={CALENDAR_MODES.QUARTERS}
        showDate={props.value}
    />
)

QuarterPicker.propTypes = {
    /**
     * Полная ISO строка даты
     */
    value: PropTypes.string,
    name: PropTypes.string,
    /**
     *  Режимы отображения одного календаря:
     * 'default' - выбор месяца и года
     */
    onChange: PropTypes.func,
    onFocus: PropTypes.func,
    onBlur: PropTypes.func,
    error: PropTypes.string,
    disabled: PropTypes.bool,
    /**
     * Функция, запрещающая выбор даты. Принимает в качестве аргумента дату в формате объекта Date, возвращает логическое значение
     * (instanceof(Date)) => boolean
     */
    restriction: PropTypes.func,
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

QuarterPicker.defaultProps = {
    value: '',
    name: '',
    onChange: _.noop,
    onFocus: _.noop,
    onBlur: _.noop,
    error: void 0,
    disabled: false,
    restriction: _.stubTrue,
    theme: QuarterInput.theme
}

QuarterPicker.theme = QuarterInput.theme
QuarterPicker.displayName = 'Calendar.Quarter'
