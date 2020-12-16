import React from 'react'
import format from 'date-fns/format'
import startOfWeek from 'date-fns/startOfWeek'
import addDays from 'date-fns/addDays'
import _ from 'lodash'
import cn from 'classnames'

import { WEEK_LENGTH, LOCALE } from '../../constants'

import style from './style.css'

const toDay = startOfWeek(new Date(), LOCALE)

export const HeaderMonth = () => (
    <thead className={cn(style.row, style.rowHeader)}>
        <tr>
            {_.map(new Array(WEEK_LENGTH), (value, index) => (
                <td className={style.rowHeaderItem} key={index}>
                    {format(addDays(toDay, index), 'dd', LOCALE)}
                </td>
            ))}
        </tr>
    </thead>
)
