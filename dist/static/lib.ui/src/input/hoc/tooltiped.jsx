import React from 'react'
import _ from 'lodash'

import { getDisplayName } from '../../utils/get-display-name'
import { Tooltip } from '../../tooltip'

const defaultCondition = (props) => ({
    direction: props.direction,
    mode: props.mode,
    forceOpened: props.forceOpened,
    tooltip: props.tooltip
})

const tooltipMap = {
    hover: Tooltip.Hover,
    click: Tooltip.Click,
    default: Tooltip
}

const omitProps = ['direction', 'mode', 'forceOpened', 'tooltip']
export const tooltipedFactory = (getTooltipProps = defaultCondition, widthMode = void 0, tooltipType = 'default', omitSameProps = true) =>
    (Component) => {
        const TooltipedComponent = (props) => {
            const { direction, mode, forceOpened, tooltip } = getTooltipProps(props)

            const TooltipComponent = tooltipMap[tooltipType]

            const passedProps = omitSameProps ? _.omit(props, omitProps) : props

            return (
                <TooltipComponent forceOpened={forceOpened} mode={widthMode}>
                    <Component {...passedProps} />
                    <Tooltip.Tip mode={mode} direction={direction}>
                        {tooltip}
                    </Tooltip.Tip>
                </TooltipComponent>
            )
        }

        TooltipedComponent.propTypes = Component.propTypes
        TooltipedComponent.defaultProps = Component.defaultProps
        TooltipedComponent.displayName = getDisplayName(Component, 'TooltipedComponent')
        TooltipedComponent.WrappedComponent = Component
        return TooltipedComponent
    }
