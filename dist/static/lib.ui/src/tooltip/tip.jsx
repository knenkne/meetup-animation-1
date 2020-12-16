import React from 'react'
import PropTypes from 'prop-types'
import classnames from 'classnames'
import _ from 'lodash'

import { parseDirection, makeDirection } from '../utils'

import defaultTheme from './style.css'

/**
 * [Zeplin](https://app.zeplin.io/project/59312e1ebdf1da6fc8d37ffb/dashboard?q=Tooltip)
 * Компонент всплывающей подсказки
 *
 * @param {Object} props - свойства компонента
 * @return {JSX} - компонент
 */
export class Tip extends React.Component {
    constructor (props) {
        super(props)

        this.state = {
            direction: parseDirection(this.props.direction),
            startDirection: parseDirection(this.props.direction)
        }
        this.tipRef = null
    }


    componentDidUpdate (previousProps) {
        if (this.tipRef && this.props.forceOpened && this.props.forceOpened !== previousProps.forceOpened) {
            // eslint-disable-next-line react/no-did-update-set-state, comment: меняем положение подсказки, если она выходит за границы окна
            this.setState(({ direction, startDirection }) => ({
                direction: makeDirection(this.tipRef, direction, startDirection)
            }))
        }
    }

    refCallback = (element) => {
        this.tipRef = element
    }

    render () {
        const { children, theme, mode, forceOpened } = this.props
        const [verticalDirection, horizontalDirection] = this.state.direction

        if (!children) {
            return null
        }

        const passedProps = _(this.props)
            .omit(['children', 'direction', 'mode', 'forceOpened', 'theme'])
            .extend({
                className: classnames(
                    theme.tip,
                    theme[verticalDirection],
                    theme[horizontalDirection],
                    theme[mode],
                    forceOpened && theme.show
                ),
                'aria-live': 'assertive',
                role: 'tooltip'
            })
            .value()

        return (
            <div {...passedProps} ref={this.refCallback}>
                <div className={defaultTheme.activeZone}>
                    <div className={defaultTheme.contents}>
                        {children}
                    </div>
                </div>
            </div>
        )
    }
}

Tip.propTypes = {
    theme: PropTypes.object,
    children: PropTypes.node,
    /**
     * Направление отображения подсказки относительно родителя
     */
    direction: PropTypes.oneOf([
        'topLeft',
        'topRight',
        'topCenter',
        'bottomLeft',
        'bottomRight',
        'bottomCenter'
    ]),
    mode: PropTypes.oneOf(['error', 'info']),
    forceOpened: PropTypes.bool
}

Tip.defaultProps = {
    children: null,
    theme: defaultTheme,
    mode: 'info',
    direction: 'topLeft',
    forceOpened: false
}

Tip.displayName = 'Tooltip.Tip'
