import React, { useCallback } from 'react'
import PropTypes from 'prop-types'
import cn from 'classnames'
import { getDate, setHours, setMinutes, startOfDay, endOfDay, isSameDay } from 'date-fns'

import { DEFAULT_DATE } from '../../constants'
import { fullISOFormat } from '../../utils'
import { useCalendarContext } from '../../context'

import style from './style.css'

export const Cell = ({ date }) => {
    const { restriction, handleClick, currentDate } = useCalendarContext()

    const value = fullISOFormat(date)
    const isDisabled = !restriction(date, value && {
        start: startOfDay(value),
        end: endOfDay(value)
    })
    const isActive = isSameDay(date, currentDate)

    const handleButtonClick = useCallback((e) => {
        if (!isDisabled) {
            const passedDate = fullISOFormat(setHours(setMinutes(date, DEFAULT_DATE.MINUTES), DEFAULT_DATE.HOURS))
            handleClick(passedDate, e)
        }
    }, [])

    return (
        <td className={cn(!date && style.noPadding, !isDisabled && style.pointer)}>
            {date ? (
                <button
                    onMouseDown={handleButtonClick}
                    className={cn(
                        style.item,
                        isActive && style.itemActive,
                        isSameDay(date, new Date()) && style.itemNow
                    )}
                    tabIndex="-1"
                    disabled={isDisabled}
                    data-text={getDate(date)}
                    data-unit="calendar:month:day"
                    type="button"
                >
                    {getDate(date)}
                </button>
            ) : (
                <div className={cn(style.itemEmpty)} />
            )}
        </td>
    )
}

Cell.propTypes = {
    date: PropTypes.object
}

Cell.defaultProps = {
    date: void 0
}
