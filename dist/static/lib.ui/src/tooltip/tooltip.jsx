import React from 'react'
import PropTypes from 'prop-types'
import _ from 'lodash'
import classnames from 'classnames'

import { Tip } from './tip'
import defaultTheme from './style.css'

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
        const { children, forceOpened, theme, onClick, mode } = this.props

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
                    <div
                        className={theme.tool}
                        data-unit="tooltip:title"
                        onClickCapture={onClick}
                    >
                        {passedChild}
                    </div>
                )
            }

            return (
                <div
                    className={theme.tool}
                    data-unit="tooltip:title"
                    onClickCapture={onClick}
                    aria-controls={this.tooltipId}
                    aria-describedby={this.tooltipId}
                >
                    {child}
                </div>
            )
        })

        const passedProps = _(this.props)
            .omit(['children', 'forceOpened', 'theme', 'children', 'onClick', 'mode', 'id'])
            .extend({
                className: classnames(theme.tooltip, mode === 'fullWidth' && theme.fullWidth),
            })
            .value()

        return (
            <div {...passedProps}>
                {parsedChildren}
            </div>
        )
    }
}

Tooltip.propTypes = {
    children: PropTypes.node,
    forceOpened: PropTypes.bool,
    theme: PropTypes.object,
    onClick: PropTypes.func,
    mode: PropTypes.oneOf(['fullWidth', void 0])
}

Tooltip.defaultProps = {
    children: void 0,
    forceOpened: false,
    theme: defaultTheme,
    onClick: _.noop,
    mode: void 0
}

Tooltip.theme = defaultTheme
Tooltip.displayName = 'Tooltip'
export default Tooltip
