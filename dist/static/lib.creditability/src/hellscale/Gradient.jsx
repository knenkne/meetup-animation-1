import React from 'react'
import PropTypes from 'prop-types'

import { getCoordsByPercents } from '../utils'

import { INNER_RADIUS, LINE_WIDTH_HALF, OUTER_RADIUS } from './constants'

export const Gradient = ({ id, from, to, startColor, stopColor }) => {
    const [startX, startY] = getCoordsByPercents(INNER_RADIUS, OUTER_RADIUS, from, LINE_WIDTH_HALF)
    const [stopX, stopY] = getCoordsByPercents(INNER_RADIUS, OUTER_RADIUS, to, LINE_WIDTH_HALF)

    return (
        <linearGradient id={id} x1={startX} y1={startY} x2={stopX} y2={stopY} gradientUnits="userSpaceOnUse">
            <stop offset={0} className={startColor} />
            <stop offset={100} className={stopColor} />
        </linearGradient>
    )
}

Gradient.propTypes = {
    id: PropTypes.string.isRequired,
    from: PropTypes.number,
    to: PropTypes.number,
    startColor: PropTypes.string.isRequired,
    stopColor: PropTypes.string.isRequired
}

Gradient.defaultProps = {
    from: 0,
    to: 100
}

Gradient.displayName = 'Gradient'
