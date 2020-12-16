import React, { useCallback } from 'react'
import _ from 'lodash'
import cn from 'classnames'
import PropTypes from 'prop-types'
import {
    endOfMonth,
    format,
    isSameMonth,
    isSameYear,
    startOfMonth
} from 'date-fns'

import { LOCALE, QUARTER_LENGTH } from '../../constants'
import { fullISOFormat, makeMonthsArray } from '../../utils'
import SquareButton from '../../components/common/square-button'
import buttonStyle from '../../components/common/square-button.css'
import commonTableStyles from '../../components/common/table.css'

import commonStyle from './common.css'
import style from './months.css'

const Months = (props) => {
    const {
        viewDate,
        setViewDate,
        restriction,
        setMonthMode
    } = props

    const months = makeMonthsArray(viewDate, QUARTER_LENGTH)

    const handleChangeViewDate = useCallback((date) => {
        const parsedDate = _.get(date, 'target.value', date)
        setViewDate(parsedDate)
        setMonthMode(date)
    }, [])

    return (
        <table
            data-unit="range:months"
            className={cn(commonTableStyles.table, style.tableWrapper)}
        >
            <tbody>
                {_.map(months, (item, i) => (
                    <tr key={i} className={cn(commonTableStyles.tableRow, style.tableRow)}>
                        {_.map(item, (date, index) => {
                            const now = Date.now()
                            const isDisabled = !restriction(date, {
                                start: startOfMonth(date),
                                end: endOfMonth(date)
                            })
                            const isToday = isSameYear(date, now) && isSameMonth(date, now)
                            const isActive = isSameYear(date, viewDate) && isSameMonth(date, viewDate)
                            return (
                                <td
                                    key={index}
                                    className={cn(commonTableStyles.tableCell)}
                                >
                                    <SquareButton
                                        className={cn(
                                            commonStyle.squareButton,
                                            isActive && buttonStyle.itemActive,
                                            isToday && buttonStyle.itemNow,
                                            isDisabled && commonStyle.rangeDisabled,
                                        )}
                                        onClick={handleChangeViewDate}
                                        disabled={isDisabled}
                                        value={fullISOFormat(date)}
                                        dataUnit="range:month"
                                    >
                                        {format(date, 'MMMM', LOCALE)}
                                    </SquareButton>
                                </td>
                            )
                        })}
                    </tr>
                ))}
            </tbody>
        </table>
    )
}

Months.propTypes = {
    restriction: PropTypes.func,
    setMonthMode: PropTypes.func,
    setViewDate: PropTypes.func,
    viewDate: PropTypes.string.isRequired,
}

Months.defaultProps = {
    restriction: _.stubTrue,
    setMonthMode: _.noop,
    setViewDate: _.noop,
}

export default Months
