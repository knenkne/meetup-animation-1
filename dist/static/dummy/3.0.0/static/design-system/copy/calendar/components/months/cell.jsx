import React, { useCallback } from 'react'
import PropTypes from 'prop-types'
import { isSameMonth, isSameYear, format, startOfMonth, endOfMonth, setMonth, getMonth } from 'date-fns'
import cn from 'classnames'

import SquareButton from '../common/square-button'
import { fullISOFormat } from '../../utils'
import { LOCALE } from '../../constants'
import { useCalendarContext } from '../../context'
import commonStyles from '../common/square-button.css'
import commonTableStyles from '../common/table.css'

export const Cell = ({ month }) => {
    const { currentDate, showDate, handleClick, restriction } = useCalendarContext()

    const now = Date.now()

    const isDisabled = !restriction(month, {
        start: startOfMonth(month),
        end: endOfMonth(month)
    })
    const isToday = isSameYear(month, now) && isSameMonth(month, now)
    const isActive = isSameYear(month, currentDate) && isSameMonth(month, currentDate)

    const handleButtonClick = useCallback((e) => {
        const { value } = e.target

        handleClick(fullISOFormat(setMonth(showDate, getMonth(value))), e)
    }, [])

    return (
        <td key={month} className={commonTableStyles.tableCell}>
            <SquareButton
                className={cn(isToday && commonStyles.itemNow, isActive && commonStyles.itemActive)}
                onClick={handleButtonClick}
                disabled={isDisabled}
                value={month}
                dataUnit="calendar:months:month"
            >
                {format(month, 'MMMM', LOCALE)}
            </SquareButton>
        </td>
    )
}

Cell.propTypes = {
    month: PropTypes.string.isRequired
}
