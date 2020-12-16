import React from 'react'
import PropTypes from 'prop-types'
import _ from 'lodash'

import { dropdownHandleClose, dropdownCombiner } from '../components/hoc'
import { CalendarItem } from '../components/calendar-item/calendar-item'

import { YearInput } from './year-input'

const CalendarHOCed = dropdownHandleClose(CalendarItem)

const DropdownCombinerHOCed = dropdownCombiner(YearInput, CalendarHOCed)

/**
 * [Zeplin](https://app.zeplin.io/project/59312e1ebdf1da6fc8d37ffb/dashboard?q=calendar)
 * Ввод года
 *
 * @param {Object} props - свойства компонента
 * @return {JSX} - компонент
 */
export const YearPicker = ({ initialViewDate, ...otherProps }) => (
    <DropdownCombinerHOCed
        {...otherProps}
        mode="years"
        showDate={otherProps.value || initialViewDate}
    />
)

YearPicker.propTypes = {
    /**
     * Полная ISO строка даты
     */
    value: PropTypes.string,
    /**
     * Первоначально отображаемая дата. Полная ISO строка даты
     */
    initialViewDate: PropTypes.string,
    /**
     * Год, с которого начинается таблица выбора годов. ISO строка года
     */
    startingYear: PropTypes.string,
    name: PropTypes.string,
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
        calendarMonthYearBlock: PropTypes.string,
        iconPosition: PropTypes.string,
        block: PropTypes.string,
        disabled: PropTypes.string,
        error: PropTypes.string,
        icon: PropTypes.string,
        inputIcon: PropTypes.string
    })
}

YearPicker.defaultProps = {
    value: '',
    initialViewDate: new Date().toISOString(),
    startingYear: new Date().toISOString(),
    name: '',
    onChange: _.noop,
    onFocus: _.noop,
    onBlur: _.noop,
    restriction: _.stubTrue,
    error: void 0,
    disabled: false,
    theme: YearInput.theme
}

YearPicker.theme = YearInput.theme
YearPicker.displayName = 'Calendar.Year'
