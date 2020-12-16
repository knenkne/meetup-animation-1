import React from 'react'
import PropTypes from 'prop-types'

import { Path } from './Path'
import { BASE_WIDTH } from './constants'
import styles from './style.css'

export const CapacityScale = ({ used, color, background, theme }) => (
    <svg className={theme} xmlns="http://www.w3.org/2000/svg" width={BASE_WIDTH} height={BASE_WIDTH} viewBox={`0 0 ${BASE_WIDTH} ${BASE_WIDTH}`}>
        <Path theme={styles.background} color={background} filled={100} />
        {used > 0 && <Path theme={styles.filled} color={color} filled={used} />}
    </svg>
)

CapacityScale.propTypes = {
    /** Сумма занятой части КП, в процентах */
    used: PropTypes.number.isRequired,
    /** Цвет шкалы */
    color: PropTypes.string.isRequired,
    /** Цвет фона шкалы */
    background: PropTypes.string.isRequired,
    /** Тема оформления */
    theme: PropTypes.string
}

CapacityScale.defaultProps = {
    theme: void 0
}

CapacityScale.displayName = 'CapacityScale'
