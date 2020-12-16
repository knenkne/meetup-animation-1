/* eslint-disable complexity, comment: complexity of 30 & 32 */
import React, { useState, useCallback } from 'react'
import _ from 'lodash'
import PropTypes from 'prop-types'
import cn from 'classnames'
import { endOfDay, getDate, isSameDay, startOfDay, isWithinInterval, isBefore, isAfter, setHours, setMinutes } from 'date-fns'

import monthStyle from '../../components/month/style.css'
import circleButtonStyles from '../../components/common/circle-button.css'
import { HeaderMonth } from '../../components/month/header-month'
import { getItemsDays, fullISOFormat, parseRuDate } from '../../utils'
import CircleButton from '../../components/common/circle-button'
import { WEEK_LENGTH } from '../../constants'

import style from './month.css'

const DAYS_ROW_LAST_INDEX = WEEK_LENGTH - 1

export const getItemState = (date, rangeFrom, rangeTo, currentTo, index, lastIndex, isRangeMode, interval, restriction) => {
    // Большая функция для расчета внешнего вида элементов рейнджа в зависимости от положения элемента в нем
    // Всего 12 состояний ( слава дизайнерам! \о/ )
    // З - зелёный, ТЗ - тёмно-зелёный
    // 1 - элемент прямоугольный
    // 2 - элемент З с прямоугольный с закругленными углами 4px
    // 3 - элемент З с закругленными углами с одной/другой стороны
    // 4 - элемент З скругленный (border-radius: 50%) с одной/другой стороны и прямоугольный с другой
    // 5 - элемент З скругленный (border-radius: 50%) с одной/другой стороны и сукругленный (4px) с другой
    // 6 - элемент ТЗ круглый
    // 7 - элемент ТЗ круглый, имеющий З подложку с прямыми углами с одной/другой стороны
    // 8 - элемент ТЗ круглый, имеющий З подложку со скругленными углами с одной/другой стороны
    // Пожалуйста, хватит! Остановитесь! \o/


    const value = date
    const isFrom = isSameDay(value, rangeFrom)
    const isTo = isSameDay(value, rangeTo)
    const isSameDate = isSameDay(rangeFrom, rangeTo)
    const isCurrentTo = isSameDay(value, currentTo)
    const isFirstInLine = index === 0
    const isLastInLine = index === lastIndex
    const isWithinRange = interval && isWithinInterval(value, interval)
    const isDisabled = !restriction(value, value && {
        start: startOfDay(value),
        end: endOfDay(value)
    })
    const isToday = isSameDay(date, new Date())
    const isActive = isFrom || isTo
    const isInRange = isWithinRange && !isFrom && !isTo
    const isStartOfRangeLine = isWithinRange && !isTo && !isFrom && isFirstInLine
    const isEndOfRangeLine = isWithinRange && !isTo && !isFrom && isLastInLine
    const isFromIsEndOfLine = isFrom && !isRangeMode && isLastInLine
    const isToIsStartOfLine = isTo && !isRangeMode && isFirstInLine
    const isFromIsMiddleOfLine = isFrom && !isLastInLine && !isRangeMode
    const isToIsMiddleOfLine = isTo && !isFirstInLine && !isRangeMode
    const isCurrentToBeforeFrom = isCurrentTo && isBefore(currentTo, rangeFrom)
    const isCurrentToAfterFrom = isCurrentTo && isAfter(currentTo, rangeFrom)
    const isCurrentToIsStartOfLine = isCurrentToAfterFrom && isFirstInLine
    const isCurrentToIsEndOfLine = isCurrentToBeforeFrom && isLastInLine
    const isFromIsMiddleOfLineAndBeforeCurrentTo = isFrom && isBefore(rangeFrom, currentTo) && !isLastInLine
    const isFromIsMiddleOfLineAndAfterCurrentTo = isFrom && isAfter(rangeFrom, currentTo) && !isFirstInLine
    const isFromIsEndOfLineAndBeforeCurrentTo = isFrom && isBefore(rangeFrom, currentTo) && isLastInLine
    const isFromIsStartOfLineAndAfterCurrentTo = isFrom && isAfter(rangeFrom, currentTo) && isFirstInLine

    return {
        value,
        isToday,
        isActive,
        isInRange,
        isDisabled,
        isSameDate,
        isCurrentTo,
        isCurrentToBeforeFrom,
        isCurrentToAfterFrom,
        isCurrentToIsStartOfLine,
        isCurrentToIsEndOfLine,
        isStartOfRangeLine,
        isEndOfRangeLine,
        isFromIsEndOfLine,
        isFromIsMiddleOfLine,
        isToIsStartOfLine,
        isToIsMiddleOfLine,
        isFromIsMiddleOfLineAndBeforeCurrentTo,
        isFromIsMiddleOfLineAndAfterCurrentTo,
        isFromIsEndOfLineAndBeforeCurrentTo,
        isFromIsStartOfLineAndAfterCurrentTo,
    }
}

const Month = (props) => {
    const {
        viewDate,
        restriction,
        handleChangeRangeFrom,
        handleChangeRangeTo,
        rangeFrom,
        rangeTo,
        isRangeMode,
        isFromError,
        isToError
    } = props

    const isDateAllowed = useCallback((date) => {
        const parsedDate = parseRuDate(date)
        return restriction(parsedDate, parsedDate && {
            start: startOfDay(parsedDate),
            end: endOfDay(parsedDate)
        })
    }, [])


    const [currentTo, setCurrentTo] = useState(null)

    const handleResetCurrentTo = useCallback(() => setCurrentTo(null), [])

    const isError = rangeFrom && rangeTo && (!isBefore(rangeFrom, rangeTo) || !isDateAllowed(rangeFrom) || !isDateAllowed(rangeTo))

    const handleChangeCurrentTo = (date) => {
        const value = _.get(date, 'target.value', date)
        setCurrentTo(value)
    }

    const handleChangeRange = useCallback((date) => {
        const value = _.get(date, 'target.value', date)

        if (rangeFrom && !rangeTo) {
            handleChangeRangeTo(value)
        } else {
            handleChangeRangeFrom(value)
        }
    }, [rangeFrom, rangeTo])

    const days = getItemsDays(viewDate)

    // Смотрим в каком мы режиме и меняем значения местами, если пользователь выбрал rangeTo меньший, чем rangeFrom

    let interval = null
    if (!isRangeMode && rangeFrom && rangeTo) {
        interval = isBefore(rangeFrom, rangeTo) ?
            { start: rangeFrom, end: rangeTo }
            :
            { start: rangeTo, end: rangeFrom }
    } else if (isRangeMode && rangeFrom && currentTo) {
        interval = isBefore(rangeFrom, currentTo) ?
            { start: rangeFrom, end: currentTo }
            :
            { start: currentTo, end: rangeFrom }
    }

    return (
        <table
            data-unit="range:month"
            className={cn(monthStyle.daysTable, style.daysTable)}
        >
            <HeaderMonth />
            <tbody
                className={monthStyle.tbodyMonth}
                data-unit="range:days"
            >
                {_.map(days, (week, i) => (
                    <tr className={monthStyle.row} key={i}>
                        {_.map(week, (date, index) => {
                            if (!date) {
                                return (
                                    <td key={index} className={monthStyle.noPadding}>
                                        <div className={circleButtonStyles.itemEmpty} />
                                    </td>
                                )
                            }
                            const dayState = getItemState(
                                date,
                                rangeFrom,
                                rangeTo,
                                currentTo,
                                index,
                                DAYS_ROW_LAST_INDEX,
                                isRangeMode,
                                interval,
                                restriction
                            )
                            
                            const isFromErrorDay = fullISOFormat(setHours(setMinutes(dayState.value, 50), 11)) === rangeFrom && isFromError
                            const isToErrorDay = fullISOFormat(setHours(setMinutes(dayState.value, 50), 11)) === rangeTo && isToError

                            let wrapperClassName = null
                            let buttonClassName

                            if (isBefore(currentTo, rangeFrom)) {
                                buttonClassName = cn(
                                    circleButtonStyles.item,
                                    circleButtonStyles.itemNoTransition,
                                    circleButtonStyles.itemBordered,
                                    dayState.isActive && !isFromErrorDay && !isToErrorDay && circleButtonStyles.itemActive

                                )
                            } else {
                                wrapperClassName = dayState.isSameDate ? cn(!dayState.isDisabled && monthStyle.pointer) : cn(
                                    dayState.isInRange && !dayState.isCurrentTo && !isError && monthStyle.noPadding,
                                    !dayState.isDisabled && monthStyle.pointer,
                                    dayState.isToIsStartOfLine && !isError && style.rangeToIsStartOfLine,
                                    dayState.isFromIsEndOfLine && !isError && style.rangeFromIsEndOfLine,
                                    dayState.isFromIsMiddleOfLine && !isError && rangeTo && style.rangeFromMiddleOfRange,
                                    dayState.isToIsMiddleOfLine && !isError && style.rangeToMiddleOfRange,
                                    dayState.isCurrentToBeforeFrom && style.rangeCurrentToBeforeFrom,
                                    dayState.isCurrentToAfterFrom && style.rangeCurrentToAfterFrom,
                                    dayState.isCurrentToIsStartOfLine && !isError && style.rangeCurrentToIsStartOfLine,
                                    dayState.isCurrentToIsEndOfLine && !isError && style.rangeCurrentToIsEndOfLine,
                                    dayState.isFromIsMiddleOfLineAndBeforeCurrentTo && style.rangeFromMiddleOfRangeAndBeforeCurrentTo,
                                    dayState.isFromIsMiddleOfLineAndAfterCurrentTo && style.rangeFromMiddleOfRangeAndAfterCurrentTo,
                                    dayState.isFromIsEndOfLineAndBeforeCurrentTo && !isError && style.rangeFromIsEndOfLine,
                                    dayState.isFromIsStartOfLineAndAfterCurrentTo && !isError && style.rangeToIsStartOfLine
                                )
                                buttonClassName = cn(
                                    circleButtonStyles.item,
                                    circleButtonStyles.itemNoTransition,
                                    circleButtonStyles.itemBordered,
                                    dayState.isActive && !isFromErrorDay && !isToErrorDay && circleButtonStyles.itemActive,
                                    dayState.isInRange && !dayState.isCurrentTo && !isError && style.rangeMiddle,
                                    dayState.isStartOfRangeLine && style.rangeStartOfLine,
                                    dayState.isEndOfRangeLine && style.rangeEndOfLine,
                                    isFromErrorDay && circleButtonStyles.itemError,
                                    isToErrorDay && circleButtonStyles.itemError,
                                    isError && style.rangeError
                                )
                            }

                            wrapperClassName = cn(wrapperClassName,
                                dayState.isToday && monthStyle.itemNow
                            )

                            return (
                                <td
                                    key={index}
                                    className={wrapperClassName}
                                >
                                    <CircleButton
                                        onMouseDown={handleChangeRange}
                                        onMouseEnter={isRangeMode && !dayState.isDisabled ? handleChangeCurrentTo : _.noop}
                                        onMouseLeave={handleResetCurrentTo}
                                        className={buttonClassName}
                                        disabled={dayState.isDisabled}
                                        value={dayState.value}
                                        dataUnit="range:day"
                                    >
                                        {getDate(dayState.value)}
                                    </CircleButton>
                                </td>
                            )
                        })}
                    </tr>
                ))}
            </tbody>
        </table>
    )
}

Month.propTypes = {
    restriction: PropTypes.func,
    rangeFrom: PropTypes.string,
    handleChangeRangeFrom: PropTypes.func,
    rangeTo: PropTypes.string,
    handleChangeRangeTo: PropTypes.func,
    viewDate: PropTypes.string.isRequired,
    isRangeMode: PropTypes.bool
}

Month.defaultProps = {
    restriction: _.stubTrue,
    rangeFrom: void 0,
    handleChangeRangeFrom: _.noop,
    rangeTo: void 0,
    handleChangeRangeTo: _.noop,
    isRangeMode: _.false,
    focusedInput: null
}

export default Month
