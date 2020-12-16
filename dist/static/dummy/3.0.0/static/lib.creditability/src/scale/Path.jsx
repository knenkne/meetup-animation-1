import React from 'react'
import PropTypes from 'prop-types'

import { getCoordsByPercents } from '../utils'

import {
    CIRCUMFERENCE,
    INNER_RADIUS,
    LINE_WIDTH,
    OUTER_RADIUS
} from './constants'

const FIFTY = 50
const ARC_OFFSET = 0.01

export const Path = ({ theme, color, filled }) => {
    const [startX, startY] = getCoordsByPercents(INNER_RADIUS, OUTER_RADIUS, 0)
    const [stopX, stopY] = getCoordsByPercents(INNER_RADIUS, OUTER_RADIUS, filled - ARC_OFFSET)
    const isLarge = +(filled > FIFTY)

    return (
        <path
            className={theme}
            d={`M ${startX}, ${startY} 
            A ${INNER_RADIUS},${INNER_RADIUS} 
            0 ${isLarge},1 
            ${stopX}, ${stopY}`}
            stroke={color}
            strokeWidth={LINE_WIDTH}
            strokeDasharray={`${filled},${CIRCUMFERENCE}`}
            strokeDashoffset={filled}
        />
    )
}

Path.propTypes = {
    theme: PropTypes.string.isRequired,
    color: PropTypes.string.isRequired,
    filled: PropTypes.number.isRequired
}

Path.displayName = 'Path'
