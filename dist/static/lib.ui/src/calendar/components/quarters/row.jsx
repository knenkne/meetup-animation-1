import React, { useCallback } from 'react'
import PropTypes from 'prop-types'
import _ from 'lodash'
import cn from 'classnames'
import { isWithinInterval } from 'date-fns'
import endOfMonth from 'date-fns/endOfMonth'
import startOfQuarter from 'date-fns/startOfQuarter'
import endOfQuarter from 'date-fns/endOfQuarter'

import { fullISOFormat, makeFixedRange } from '../../utils'
import { Typography } from '../../../typography'
import { QUARTER_LENGTH } from '../../constants'
import { useCalendarContext } from '../../context'

import { Cell } from './cell'
import style from './style.css'

export const Row = ({ part }) => {
    const { currentDate, restriction, handleClick } = useCalendarContext()

    const value = fullISOFormat(_.first(part))
    const isActive = isWithinInterval(currentDate, {
        start: _.first(part),
        end: endOfMonth(_.last(part))
    })
    const isNow = isWithinInterval(new Date(), {
        start: _.first(part),
        end: endOfMonth(_.last(part))
    })
    const isDisabled = !restriction(value, {
        start: startOfQuarter(value),
        end: endOfQuarter(value)
    })

    const handleButtonClick = useCallback((e) => handleClick(makeFixedRange(e.target.value, QUARTER_LENGTH), e), [])

    return (
        <button
            className={cn(
                Typography.theme.body,
                Typography.theme.bodySemibold,
                style.item,
                isActive && style.itemActive,
                isNow && style.itemNow
            )}
            tabIndex="-1"
            type="button"
            onClick={handleButtonClick}
            value={value}
            disabled={isDisabled}
        >
            {_.map(part, (month, monthIndex) => (
                <Cell key={monthIndex} month={month} />
            ))}
        </button>
    )
}

Row.propTypes = {
    part: PropTypes.array.isRequired
}
