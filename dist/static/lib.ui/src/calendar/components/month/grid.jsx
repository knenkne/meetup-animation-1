import React from 'react'
import _ from 'lodash'
import cn from 'classnames'

import { useCalendarContext } from '../../context'
import { getItemsDays } from '../../utils'

import { HeaderMonth } from './header-month'
import { Row } from './row'
import style from './style.css'

const Grid = () => {
    const { showDate } = useCalendarContext()
    const arrayDays = getItemsDays(showDate)

    return (
        <div>
            <table
                data-unit="calendar:month"
                className={cn(style.daysTable)}
            >
                <HeaderMonth />
                <tbody
                    className={style.tbodyMonth}
                    data-unit="calendar:days"
                >
                    {_.map(arrayDays, (week, index) => (
                        <Row week={week} key={index} />
                    ))}
                </tbody>
            </table>
        </div>
    )
}

export { Grid }
