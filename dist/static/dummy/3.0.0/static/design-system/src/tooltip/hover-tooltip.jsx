import React from 'react'
import PropTypes from 'prop-types'
import _ from 'lodash'

import { Tooltip } from './tooltip'

/* eslint-disable valid-jsdoc, comment: некорректный парсинг jsdoc */
/**
 * [Zeplin](https://app.zeplin.io/project/59312e1ebdf1da6fc8d37ffb/dashboard?q=Tooltip)
 * Компонент вывода всплывающей подсказки по наведению
 *
 * @param {Object} props - свойства компонента
 * @return {JSX} - компонент
 */
export class HoverTooltip extends React.PureComponent {
    static propTypes = {
        children: PropTypes.node, // eslint-disable-line react/no-unused-prop-types, comment: более краткая запись компонента, но в API указать надо
        onOpen: PropTypes.func,
        onClose: PropTypes.func,
        forceOpened: PropTypes.bool
    }

    static defaultProps = {
        children: void 0,
        onOpen: _.noop,
        onClose: _.noop,
        forceOpened: void 0
    }

    state = {
        isOpened: false
    }

    handleTooltipFocus = (event) => {
        if (!this.state.isOpened) {
            this.setState({
                isOpened: true
            }, () => this.props.onOpen?.(event))
        }
    }

    handleTooltipBlur = (event) => {
        if (this.state.isOpened) {
            this.setState({
                isOpened: false
            }, () => this.props.onClose?.(event))
        }
    }

    render () {
        const passedProps = _(this.props)
            .omit(['onOpen', 'onClose', 'forceOpened'])
            .extend({
                onFocus: this.handleTooltipFocus,
                onBlur: this.handleTooltipBlur,
                onMouseOver: this.handleTooltipFocus,
                onMouseLeave: this.handleTooltipBlur,
                forceOpened: this.props.forceOpened || this.state.isOpened
            })
            .value()

        return <Tooltip {...passedProps} />
    }
}

HoverTooltip.displayName = 'Tooltip.Hover'
