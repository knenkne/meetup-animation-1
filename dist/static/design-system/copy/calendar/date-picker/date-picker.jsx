import React from 'react'
import PropTypes from 'prop-types'
import _ from 'lodash'

import { isTouchable } from '../../utils/adaptive'
import { isMobileEnabled } from '../mobile-enabler'
import { dropdownHandleClose, dropdownCombiner } from '../components/hoc'
import { CalendarItem } from '../components/calendar-item/calendar-item'

import { SingleInput } from './single-input'

const CalendarHOCed = dropdownHandleClose(CalendarItem)

const DropdownCombinerHOCed = dropdownCombiner(SingleInput, CalendarHOCed)

/**
 * [Zeplin](https://app.zeplin.io/project/59312e1ebdf1da6fc8d37ffb/dashboard?q=calendar)
 * Выбор даты
 *
 * @param {Object} props - свойства компонента
 * @return {JSX} - компонент
 */
export const DatePicker = (props) => {
    const { initialViewDate, ...otherProps } = props
    if (isTouchable() && isMobileEnabled()) {
        return <SingleInput type="date" {...otherProps} />
    }

    return (
        <DropdownCombinerHOCed
            {...otherProps}
            showDate={otherProps.value || initialViewDate}
        />
    )
}

DatePicker.propTypes = {
    /**
     * Полная ISO строка даты
     */
    value: PropTypes.string,
    name: PropTypes.string,
    /**
     *  Режимы отображения одного календаря:<br>
     * <b>'default'</b> - выбор дня, месяца и года<br>
     * <b>'years'</b> - выбор года<br>
     * <b>'months'</b> - выбор месяца и года<br>
     * <b>'quarters'</b> - выбор квартала и года
     */
    mode: PropTypes.oneOf([
        'default',
        'years',
        'months',
        'quarters'
    ]),
    /**
     * Функция, запрещающая выбор даты. Принимает в качестве аргумента дату в формате объекта Date, возвращает логическое значение
     * (instanceof(Date)) => boolean
     */
    restriction: PropTypes.func,
    /**
     * Первоначально отображаемая дата. Полная ISO строка даты
     */
    initialViewDate: PropTypes.string,
    /**
     * Год, с которого начинается таблица выбора годов. ISO строка года
     */
    startingYear: PropTypes.string,
    onChange: PropTypes.func,
    onFocus: PropTypes.func,
    onBlur: PropTypes.func,
    error: PropTypes.string,
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
    })
}

DatePicker.defaultProps = {
    value: '',
    name: '',
    mode: 'default',
    restriction: _.stubTrue,
    initialViewDate: new Date().toISOString(),
    startingYear: new Date().toISOString(),
    onChange: _.noop,
    onFocus: _.noop,
    onBlur: _.noop,
    error: void 0,
    disabled: false,
    theme: SingleInput.theme
}

DatePicker.theme = SingleInput.theme
DatePicker.displayName = 'Calendar'
