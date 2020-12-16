import React, { useCallback } from 'react'
import { format } from 'date-fns'

import { fullISOFormat, getQuarterNumber } from '../../utils'
import { CALENDAR_MODES, LOCALE } from '../../constants'
import { useCalendarContext } from '../../context'
import Control from '../common/control'
import buttonStyles from '../common/control.css'

import style from './style.css'

const Controls = () => {
    const {
        showDate: unformattedDate,
        showComponent,
        setMode,
        mode
    } = useCalendarContext()
    const isQuartersMode = mode === CALENDAR_MODES.QUARTERS
    const showDate = fullISOFormat(unformattedDate)

    const handleChangeViewMonth = useCallback(() => setMode(CALENDAR_MODES.MONTHS), [])
    const handleChangeViewQuarters = useCallback(() => setMode(CALENDAR_MODES.QUARTERS), [])
    const handleChangeViewYear = useCallback(() => setMode(CALENDAR_MODES.YEARS), [])

    return (
        <div className={style.header}>
            <div className={style.headerMonth}>
                {isQuartersMode ? (
                    <Control
                        onClick={handleChangeViewQuarters}
                        dataUnit="calendar:header:quarters"
                        isActive={showComponent === CALENDAR_MODES.QUARTERS}
                        withIcon={!isQuartersMode}
                        title={`${getQuarterNumber(showDate)}-й квартал`}
                    />
                ) : (
                    <Control
                        onClick={handleChangeViewMonth}
                        dataUnit="calendar:header:month"
                        className={buttonStyles.buttonCapitalized}
                        withIcon={mode !== CALENDAR_MODES.MONTHS}
                        isActive={showComponent === CALENDAR_MODES.MONTHS}
                        title={format(showDate, 'MMMM', LOCALE)}
                    />
                )}
            </div>
            <div className={style.headerYear}>
                <Control
                    onClick={handleChangeViewYear}
                    dataUnit="calendar:header:year"
                    className={buttonStyles.buttonCapitalized}
                    isActive={showComponent === CALENDAR_MODES.YEARS}
                    title={format(showDate, 'YYYY', LOCALE)}
                />
            </div>
        </div>
    )
}

export { Control, Controls }
