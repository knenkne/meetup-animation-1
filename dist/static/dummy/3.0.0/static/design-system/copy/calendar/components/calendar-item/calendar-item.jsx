import React, { useEffect, useState } from 'react'
import PropTypes from 'prop-types'
import _ from 'lodash'
import cn from 'classnames'
import toDate from 'date-fns/toDate'
import isValid from 'date-fns/isValid'

import { CALENDAR_MODES } from '../../constants'
import { chooseValidDate } from '../../utils'
import { Controls } from '../controls'
import { CalendarContext } from '../../context'
import style from '../../style.css'

import { ShowTable } from './show-table'

export const CalendarItem = (props) => {
    const { mode, restriction, value, to, initialValue, startingYear, onChange, isOpened } = props

    const initialDate = chooseValidDate(to, value)

    const [currentDate, setCurrentDate] = useState(initialDate)
    const [showDate, setShowDate] = useState(initialDate)
    const [showComponent, setShowComponent] = useState(mode || CALENDAR_MODES.DEFAULT)

    const setMode = (currentComponent) => setShowComponent(showComponent !== currentComponent ? currentComponent : mode)
    const handleClick = (date, e) => {
        if (toDate(date) !== toDate(currentDate)) {
            setShowDate(toDate(date))
            setCurrentDate(date)
            return showComponent === mode ? onChange(date, e) : setMode(mode)
        }

        return void 0
    }

    const state = {
        currentDate,
        showComponent,
        showDate,
        handleClick,
        setMode,
        startingYear,
        initialValue,
        restriction,
        mode,
    }

    useEffect(() => {
        if (isValid(to)) {
            setShowDate(toDate(to))
            setCurrentDate(to)
        } else if (isValid(value)) {
            setShowDate(toDate(value))
            setCurrentDate(toDate(value))
        }
    }, [value, to])

    useEffect(() => {
        if (!isOpened) {
            setShowDate(initialDate)
            setCurrentDate(initialDate)
        }
    }, [isOpened])

    return (
        <CalendarContext.Provider value={state}>
            <div
                className={cn(
                    style.datePicker,
                    mode === CALENDAR_MODES.YEARS && style.datePickerYears,
                    showComponent !== CALENDAR_MODES.DEFAULT && style.yearsOrMonths
                )}
                data-node="calendar:item"
                aria-hidden="true"
            >
                {mode !== CALENDAR_MODES.YEARS && (
                    <Controls />
                )}
                <ShowTable showComponent={showComponent} />
            </div>
        </CalendarContext.Provider>
    )
}

CalendarItem.propTypes = {
    /**
     * Полная ISO строка даты или дапазон ISO дат, разделенных "/"
     */
    value: PropTypes.string,
    /**
     * Полная ISO строка даты
     */
    initialValue: PropTypes.string,
    /**
     * Год, с которого начинается таблица выбора годов. ISO строка года
     */
    startingYear: PropTypes.string,
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
     * Полная ISO строка даты
     */
    to: PropTypes.string,
    onChange: PropTypes.func,
    /**
     * Показывает активен ли календарь, если он привязан к какому-либо компоненту
     */
    isOpened: PropTypes.bool
}

CalendarItem.defaultProps = {
    value: '',
    initialValue: '',
    startingYear: void 0,
    mode: 'default',
    restriction: _.stubTrue,
    to: '',
    onChange: _.noop,
    isOpened: _.false,
    translations: void 0
}
