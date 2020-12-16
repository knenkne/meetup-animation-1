import React, { useState, useEffect, useCallback } from 'react'
import PropTypes from 'prop-types'
import _ from 'lodash'

import { FastAction } from './fast-action'

const SECONDS = 60
const MILLISECONDS = 1000
const parseTimer = (timer) => {
    const minutes = (timer - (timer % SECONDS)) / SECONDS
    const seconds = _.padStart(timer % SECONDS, 2, 0)
    return `${minutes}:${seconds}`
}

export const TimerAction = ({ initialValue, value, title, timerTitle, onClick, ...props }) => {
    const [timer, setTimer] = useState(initialValue)

    useEffect(() => {
        const timerID = setInterval(() => {
            if (timer) {
                setTimer(timer - 1)
            } else {
                clearInterval(timerID)
            }
        }, MILLISECONDS)

        return () => {
            clearInterval(timerID)
        }
    })

    const handleClick = useCallback(() => {
        setTimer(value)
        onClick()
    })

    return (
        <FastAction
            title={timer ? `${timerTitle} ${parseTimer(timer)}` : title}
            onClick={timer ? void '' : handleClick}
            {...props}
        />
    )
}

TimerAction.propTypes = {
    /**
     * Передавайте значение, если таймер должен быть выставлен сразу
     */
    initialValue: PropTypes.number,
    value: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    timerTitle: PropTypes.string,
    onClick: PropTypes.func.isRequired,
    href: PropTypes.string,
    icon: PropTypes.string,
    imageSrc: PropTypes.string,
    description: PropTypes.string,
    as: PropTypes.oneOf([PropTypes.string, PropTypes.func])
}

TimerAction.defaultProps = {
    initialValue: 0,
    href: void '',
    timerTitle: '',
    onClick: void '',
    icon: void '',
    imageSrc: void '',
    description: void '',
    as: void ''
}

TimerAction.displayName = 'FastActions.TimerAction'

export default TimerAction
