import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'

import { Gradient } from './Gradient'
import { Arc } from './Arc'
import styles from './style.css'
import {
    BASE_WIDTH,
    LINE_WIDTH,
    GREEN_OFFSET,
    RED_OFFSET
} from './constants'

const ONE = 1
const TWO = 2
const HUNDRED = 100

export class CapacityHellScale extends PureComponent {
    static displayName = 'CapacityHellScale'

    static propTypes = {
        /** Сумма занятой части КП, в процентах */
        used: PropTypes.number,
        /** Сумма зарезерированной части, в процентах */
        reserved: PropTypes.number,
        /** Лимиты для переходов градиента */
        limits: PropTypes.shape({
            /** Среднего шанса одобрения */
            medium: PropTypes.number,
            /** Низкого шанса одобрения */
            low: PropTypes.number
        })
    }

    static defaultProps = {
        used: 0,
        reserved: 0,
        limits: {
            medium: 25,
            low: 75
        }
    }

    static calculateColors (limits) {
        const diff = limits.low - limits.medium
        const green = Math.max(limits.medium - (diff * GREEN_OFFSET), 0)
        const red = Math.min(limits.low + (diff * RED_OFFSET), HUNDRED)
        const yellow = (green + red) / TWO

        return { green, yellow, red }
    }

    drawSector = (to, colors) => {
        const { green, yellow, red } = colors

        return (
            <React.Fragment>
                {to <= green && green > 0 && <Arc id="green" to={to} />}
                {to > green && green > 0 && <Arc id="green" to={green} />}
                {to > green && to <= yellow && <Arc id="greenyellow" from={green} to={to} />}
                {to > yellow && <Arc id="greenyellow" from={green} to={yellow} />}
                {to > yellow && to <= red && <Arc id="yellowred" from={yellow} to={to} />}
                {to > yellow && to > red && <Arc id="yellowred" from={yellow} to={red} />}
                {to > red && <Arc id="red" from={red} to={to} />}
            </React.Fragment>
        )
    }

    render () {
        const { used, reserved, limits } = this.props
        const total = used + reserved
        const colors = CapacityHellScale.calculateColors(limits)

        return (
            <svg xmlns="http://www.w3.org/2000/svg" width={BASE_WIDTH} height={BASE_WIDTH} viewBox={`0 0 ${BASE_WIDTH} ${BASE_WIDTH}`}>
                <defs>
                    <Gradient id="green" from={colors.green} startColor={styles.green} stopColor={styles.green} />
                    <Gradient id="greenyellow" from={colors.green} to={colors.yellow} startColor={styles.green} stopColor={styles.yellow} />
                    <Gradient id="yellowred" from={colors.yellow} to={colors.red} startColor={styles.yellow} stopColor={styles.red} />
                    <Gradient id="red" from={colors.red} startColor={styles.red} stopColor={styles.red} />
                    <pattern id="diagonal" patternUnits="userSpaceOnUse" width="4" height="4" patternTransform="rotate(45 0 0)">
                        <line className={styles.used} x1="0" y1="0" x2="0" y2="10" />
                    </pattern>
                </defs>
                <g fill="none" strokeWidth={LINE_WIDTH} strokeOpacity="0.3">
                    {this.drawSector(HUNDRED, colors)}
                </g>
                <g fill="none" strokeWidth={LINE_WIDTH} strokeLinecap="round">
                    {total > 0 && this.drawSector(total, colors)}
                    {total > 0 && this.drawSector(ONE, colors)}
                    {used > 0 && <Arc id="diagonal" to={used} />}
                </g>
            </svg>
        )
    }
}
