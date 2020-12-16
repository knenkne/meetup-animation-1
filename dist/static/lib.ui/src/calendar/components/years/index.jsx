import React, { useState, useEffect } from 'react'
import _ from 'lodash'
import { subYears, getYear } from 'date-fns'
import cn from 'classnames'

import Navigation from '../common/navigation'
import { useCalendarContext } from '../../context'
import { fullISOFormat, getItemsYears } from '../../utils'
import { CALENDAR_MODES, MULTIPLE_OF_TEN } from '../../constants'
import navigationStyle from '../common/navigation.css'

import { Grid } from './grid'
import style from './style.css'

export const PERIOD = 10
const minValidYear = 1800
const maxValidYear = 2200

const Years = () => {
    const { mode, startingYear, showDate: initialShowDate } = useCalendarContext()
    const [showDate, changeDate] = useState(initialShowDate)

    const handleChangePeriod = (period) => () => changeDate(fullISOFormat(subYears(showDate, period)))

    const handlePeriodPrev = handleChangePeriod(PERIOD)
    const handlePeriodNext = handleChangePeriod(-PERIOD)
    const items = getItemsYears(showDate, startingYear)

    // Делаем из самого первого года в выборке подпись навигации в формате 2000-е, 2010-е и т.д.
    const minYear = _.get(items, ['0', '0'], null)
    const parsedYear = getYear(minYear)
    const period = minYear ? `${parsedYear - (parsedYear % MULTIPLE_OF_TEN)}` : null
    const isYearsMode = mode === CALENDAR_MODES.YEARS

    useEffect(() => {
        if (showDate !== initialShowDate) {
            changeDate(initialShowDate)
        }

    }, [initialShowDate])

    return (
        <div className={cn(!isYearsMode && style.offsetTop)}>
            <Navigation
                handlePrevClick={parsedYear >= minValidYear ? handlePeriodPrev : _.noop}
                handleNextClick={parsedYear <= maxValidYear ? handlePeriodNext : _.noop}
                wrapperClassName={navigationStyle.navigationWrapper}
            >
                {`${period}-е`}
            </Navigation>
            <Grid items={items} />
        </div>
    )
}

export { Years }
