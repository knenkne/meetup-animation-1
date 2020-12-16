import React from 'react'
import PropTypes from 'prop-types'
import _ from 'lodash'

import { Tip } from './tip'
import { TooltipWrapperStyled, TooltipStyled } from './tooltip.style'

/**
 * [Zeplin](https://app.zeplin.io/project/5c74ef0d753f3ebccdf8f33d/screen/5ca729c2bad60f05a5910b1c)
 * Компонент программного вывода всплывающей подсказки
 *
 * @param {Object} props - свойства компонента
 * @return {JSX} - компонент
 */
export class Tooltip extends React.PureComponent {
    tooltipId = _.uniqueId('tooltip-')

    render () {
        const { children, forceOpened, onClick } = this.props

        const parsedChildren = React.Children.map(children, (child) => {
            if (!child) {
                return child
            } else if (_.get(child, 'type.displayName') === Tip.displayName) {
                return React.cloneElement(child, _.extend({}, child.props, {
                    id: this.tooltipId,
                    forceOpened
                }))
            }

            if (child.props) {
                const passedChild = React.cloneElement(child, _.extend({}, child.props, {
                    'aria-controls': this.tooltipId,
                    'aria-describedby': this.tooltipId,
                }))
                return (
                    <TooltipWrapperStyled
                        onClickCapture={onClick}
                    >
                        {passedChild}
                    </TooltipWrapperStyled>
                )
            }

            return (
                <TooltipWrapperStyled
                    onClickCapture={onClick}
                    aria-controls={this.tooltipId}
                    aria-describedby={this.tooltipId}
                >
                    {child}
                </TooltipWrapperStyled>
            )
        })

        const passedProps = _(this.props)
            .omit(['children', 'forceOpened', 'onClick', 'id'])
            .value()

        return (
            <TooltipStyled {...passedProps} >
                {parsedChildren}
            </TooltipStyled>
        )
    }
}

Tooltip.propTypes = {
    children: PropTypes.node,
    forceOpened: PropTypes.bool,
    onClick: PropTypes.func,
    mode: PropTypes.oneOf(['fullWidth', void 0])
}

Tooltip.defaultProps = {
    children: void 0,
    forceOpened: false,
    onClick: _.noop,
    mode: void 0
}

Tooltip.displayName = 'Tooltip'
export default Tooltip
