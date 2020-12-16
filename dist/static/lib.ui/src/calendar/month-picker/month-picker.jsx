import React from 'react'
import PropTypes from 'prop-types'
import _ from 'lodash'

import { isTouchable } from '../../utils/adaptive'
import { isMobileEnabled } from '../mobile-enabler'
import { dropdownHandleClose, dropdownCombiner } from '../components/hoc'
import { CalendarItem } from '../components/calendar-item/calendar-item'
import { CALENDAR_MODES } from '../constants'

import { MonthInput } from './month-input'

const CalendarHOCed = dropdownHandleClose(CalendarItem)

const DropdownCombinerHOCed = dropdownCombiner(MonthInput, CalendarHOCed)

/**
 * [Zeplin](https://app.zeplin.io/project/59312e1ebdf1da6fc8d37ffb/dashboard?q=calendar)
 * Ввод года и месяца
 *
 * @param {Object} props - свойства компонента
 * @return {JSX} - компонент
 */
export const MonthPicker = ({ initialViewDate, ...otherProps }) => {
    if (isTouchable() && isMobileEnabled()) {
        return <MonthInput type="month" {...otherProps} />
    }

    return (
        <DropdownCombinerHOCed
            {...otherProps}
            mode={CALENDAR_MODES.MONTHS}
            showDate={otherProps.value || initialViewDate}
        />
    )
}

MonthPicker.propTypes = {
    /**
     * Полная ISO строка даты
     */
    value: PropTypes.string,
    name: PropTypes.string,
    onChange: PropTypes.func,
    onFocus: PropTypes.func,
    onBlur: PropTypes.func,
    error: PropTypes.string,
    disabled: PropTypes.bool,
    /**
     * Первоначально отображаемая дата. Полная ISO строка даты
     */
    initialViewDate: PropTypes.string,
    /**
     * Год, с которого начинается таблица выбора годов. ISO строка года
     */
    startingYear: PropTypes.string,
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

MonthPicker.defaultProps = {
    value: '',
    name: '',
    onChange: _.noop,
    onFocus: _.noop,
    onBlur: _.noop,
    restriction: _.stubTrue,
    initialViewDate: new Date().toISOString(),
    startingYear: new Date().toISOString(),
    error: void 0,
    disabled: false,
    theme: MonthInput.theme
}

MonthPicker.theme = MonthInput.theme
MonthPicker.displayName = 'Calendar.MonthYear'
