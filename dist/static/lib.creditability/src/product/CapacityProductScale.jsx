import React from 'react'
import PropTypes from 'prop-types'

import { CapacityScale } from '../scale'
import { calculatePercents, CHANCES, COLORS } from '../utils'

import styles from './style.css'

const { color, background } = COLORS[CHANCES.HIGH]

export const CapacityProductScale = ({ available, used, reserved }) => {
    const percent = calculatePercents(available + used + reserved, used + reserved)
    return (<CapacityScale color={color} used={percent} background={background} theme={styles.scale} />)
}

CapacityProductScale.propTypes = {
    available: PropTypes.number.isRequired,
    used: PropTypes.number.isRequired,
    reserved: PropTypes.number.isRequired
}

CapacityProductScale.displayName = 'CapacityProductScale'
