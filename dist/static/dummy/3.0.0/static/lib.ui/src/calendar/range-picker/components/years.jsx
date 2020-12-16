import React, { useState, useCallback } from 'react'
import _ from 'lodash'
import cn from 'classnames'
import PropTypes from 'prop-types'
import {
    format,
    isSameYear,
    subYears,
    setYear,
    startOfYear,
    endOfYear,
} from 'date-fns'

import { LOCALE, QUARTER_LENGTH } from '../../constants'
import Navigation from '../../components/common/navigation'
import { fullISOFormat, getItemsYears, getYearsTitle } from '../../utils'
import SquareButton from '../../components/common/square-button'
import buttonStyle from '../../components/common/square-button.css'
import commonTableStyles from '../../components/common/table.css'
import navigationStyle from '../../components/common/navigation.css'

import commonStyle from './common.css'
import style from './years.css'

const PERIOD = 10
const LAST_DECADE = 9990

const Years = (props) => {
    const {
        viewDate,
        restriction,
        setMonthMode,
        setViewDate,
        setFocusBack
    } = props

    const [currentYear, setCurrentYear] = useState(viewDate)
    const handleChangePeriod = (period) => (e) => {
        e.preventDefault()
        setFocusBack()

        setCurrentYear(fullISOFormat(subYears(currentYear, period)))
    }

    const handlePrevClick = handleChangePeriod(PERIOD)
    const handleNextClick = handleChangePeriod(-PERIOD)

    const years = getItemsYears(currentYear, QUARTER_LENGTH)
    const isLastDecade = _.get(years, ['0', '0']).getFullYear() === LAST_DECADE

    const handleChangeViewDate = useCallback((date) => {
        const parsedDate = _.get(date, 'target.value', date)
        setViewDate(fullISOFormat(setYear(viewDate, format(parsedDate, 'YYYY'))))
        setMonthMode(date)
    }, [])

    return (
        <div>
            <Navigation
                handlePrevClick={handlePrevClick}
                handleNextClick={handleNextClick}
                wrapperClassName={navigationStyle.navigationWrapper}
                isLastDecade={isLastDecade}
            >
                {getYearsTitle(years)}
            </Navigation>
            <table className={cn(commonTableStyles.table, style.tableWrapper)} data-unit="range:months">
                <tbody>
                    {_.map(years, (item, i) => (
                        <tr key={i} className={cn(commonTableStyles.tableRow, style.tableRow)}>
                            {_.map(item, (date, index) => {
                                const now = Date.now()
                                const formattedDate = fullISOFormat(date)
                                const isDisabled = !restriction(formattedDate, {
                                    start: startOfYear(formattedDate),
                                    end: endOfYear(formattedDate)
                                })

                                const isToday = isSameYear(formattedDate, now)
                                const isActive = isSameYear(formattedDate, viewDate)
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
                                            )}
                                            onClick={handleChangeViewDate}
                                            disabled={isDisabled}
                                            value={formattedDate}
                                            dataUnit="range:year"
                                        >
                                            {format(formattedDate, 'YYYY', LOCALE)}
                                        </SquareButton>
                                    </td>
                                )
                            })}
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    )
}

Years.propTypes = {
    restriction: PropTypes.func,
    setMonthMode: PropTypes.func,
    setViewDate: PropTypes.func,
    setFocusBack: PropTypes.func,
    viewDate: PropTypes.string.isRequired,
}

Years.defaultProps = {
    restriction: _.stubTrue,
    setMonthMode: _.noop,
    setViewDate: _.noop,
    setFocusBack: _.noop
}

export default Years
