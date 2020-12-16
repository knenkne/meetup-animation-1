import React from 'react'
import _ from 'lodash'
import cn from 'classnames'

import { makeMonthsArray } from '../../utils'
import { QUARTER_LENGTH } from '../../constants'
import { useCalendarContext } from '../../context'
import commonTableStyles from '../common/table.css'

import { Row } from './row'
import style from './style.css'

const Grid = () => {
    const { showDate } = useCalendarContext()
    const arrayDate = makeMonthsArray(showDate, QUARTER_LENGTH)

    return (
        <div>
            <table className={cn(commonTableStyles.table, style.table)} data-unit="calendar:months">
                <tbody>
                    {_.map(arrayDate, (part, partIndex) => (
                        <Row key={partIndex} part={part} />
                    ))}
                </tbody>
            </table>
        </div>
    )
}

export { Grid }
