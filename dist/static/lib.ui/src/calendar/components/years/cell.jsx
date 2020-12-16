import React, { useCallback } from 'react'
import PropTypes from 'prop-types'
import { isSameYear, startOfYear, endOfYear, format, toDate, setYear } from 'date-fns'
import cn from 'classnames'

import SquareButton from '../common/square-button'
import { useCalendarContext } from '../../context'
import { fullISOFormat } from '../../utils'
import commonStyles from '../common/square-button.css'
import commonTableStyles from '../common/table.css'

import style from './style.css'

const Cell = ({ year }) => {
    const { currentDate, handleClick, restriction, showDate } = useCalendarContext()

    const isActive = isSameYear(year, currentDate)
    const isToday = isSameYear(year, new Date())
    const isDisabled = !restriction(year, {
        start: startOfYear(year),
        end: endOfYear(year)
    })

    const handleButtonClick = useCallback((e) => {
        const yearDate = toDate(e.target.value)
        const changedShowDate = fullISOFormat(setYear(showDate, format(yearDate, 'YYYY')))
        handleClick(changedShowDate, e)
    }, [])

    return (
        <td className={commonTableStyles.tableCell}>
            <SquareButton
                className={cn(
                    style.item,
                    isToday && commonStyles.itemNow,
                    isActive && commonStyles.itemActive
                )}
                onClick={handleButtonClick}
                disabled={isDisabled}
                value={year}
                dataUnit={`calendar:years:year${isActive ? ':active' : ''}`}
            >
                {format(year, 'YYYY')}
            </SquareButton>
        </td>
    )
}

Cell.propTypes = {
    year: PropTypes.string.isRequired
}

export { Cell }
