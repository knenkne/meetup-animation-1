import React from 'react'
import _ from 'lodash'

import { makeMonthsArray } from '../../utils'
import { useCalendarContext } from '../../context'
import { QUARTER_LENGTH } from '../../constants'

import { Row } from './row'
import style from './style.css'

const Quarters = () => {
    const { showDate } = useCalendarContext()
    const arrayDate = makeMonthsArray(showDate, QUARTER_LENGTH)

    return (
        <div>
            <div
                className={style.quarters}
                data-unit="calendar:quarters"
            >
                {_.map(arrayDate, (part, partIndex) => (
                    <Row key={partIndex} part={part} />
                ))}
            </div>
        </div>
    )
}

export { Quarters }
