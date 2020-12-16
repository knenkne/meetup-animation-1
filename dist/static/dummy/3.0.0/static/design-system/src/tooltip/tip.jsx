import React from 'react'
import PropTypes from 'prop-types'
import _ from 'lodash'

import { parseDirection, makeDirection } from '../utils/make-direction'
import { Typography } from '../typography/typography'
import { IndentWrapper } from '../indent-wrapper/indent-wrapper.style'

import { TipStyled, ActiveZoneStyled, ContentsStyled } from './tooltip.style'

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
        const { title, description, children, forceOpened } = this.props
        const [verticalDirection, horizontalDirection] = this.state.direction

        const passedProps = _(this.props)
            .omit(['children', 'direction', 'forceOpened'])
            .extend({
                'aria-live': 'assertive',
                role: 'tooltip'
            })
            .value()

        return (
            <TipStyled {...passedProps} vd={verticalDirection} hd={horizontalDirection} show={forceOpened} ref={this.refCallback}>
                <ActiveZoneStyled>
                    <ContentsStyled>
                        <IndentWrapper size="md" horizontal="innerspace" vertical="innerspace">
                            {!children ?
                                <>
                                    <Typography size="md" indent="zero" mode="semibold">{title}</Typography>
                                    <Typography size="sm" indent="nano" colorScheme="gray70A" last>{description}</Typography>
                                </>
                                :
                                children
                            }
                        </IndentWrapper>
                    </ContentsStyled>
                </ActiveZoneStyled>
            </TipStyled>
        )
    }
}

Tip.propTypes = {
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
    mode: 'info',
    direction: 'topLeft',
    forceOpened: false
}

Tip.displayName = 'Tooltip.Tip'
