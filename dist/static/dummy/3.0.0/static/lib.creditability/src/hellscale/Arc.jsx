import React from 'react'
import PropTypes from 'prop-types'

import { getCoordsByPercents } from '../utils'

import { INNER_RADIUS, OUTER_RADIUS } from './constants'

const FIFTY = 50
const ARC_OFFSET = 0.001

export const Arc = ({ id, from, to }) => {
    const [startX, startY] = getCoordsByPercents(INNER_RADIUS, OUTER_RADIUS, from)
    const [stopX, stopY] = getCoordsByPercents(INNER_RADIUS, OUTER_RADIUS, to - ARC_OFFSET)
    const stroke = `url(#${id})`
    const isLarge = +(to - from > FIFTY)

    return (
        <path
            d={`M ${startX}, ${startY} 
            A ${INNER_RADIUS},${INNER_RADIUS} 
            0 ${isLarge},1 
            ${stopX}, ${stopY}`}
            stroke={stroke}
        />
    )
}

Arc.propTypes = {
    id: PropTypes.string.isRequired,
    from: PropTypes.number,
    to: PropTypes.number,
}

Arc.defaultProps = {
    from: 0,
    to: 100
}

Arc.displayName = 'Arc'
