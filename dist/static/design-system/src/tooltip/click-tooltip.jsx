import React from 'react'
import PropTypes from 'prop-types'
import _ from 'lodash'

import { Perimeter } from '../perimeter'
import { preventHandler } from '../utils/handlers'

import { Tooltip } from './tooltip'

/* eslint-disable valid-jsdoc, comment: некорректный парсинг jsdoc */
/**
 * [Zeplin](https://app.zeplin.io/project/59312e1ebdf1da6fc8d37ffb/dashboard?q=Tooltip)
 * Компонент вывода всплывающей подсказки по клику
 *
 * @param {Object} props - свойства компонента
 * @return {JSX} - компонент
 */
export class ClickTooltip extends React.PureComponent {
    static propTypes = {
        children: PropTypes.node, // eslint-disable-line react/no-unused-prop-types, comment: более краткая запись компонента, но в API указать надо
        onOpen: PropTypes.func,
        onClose: PropTypes.func
    }

    static defaultProps = {
        children: void 0,
        onOpen: _.noop,
        onClose: _.noop
    }

    state = {
        isOpened: false
    }

    setRefPerimeter = (c) => {
        this.perimeter = c
    }

    handleTooltipClick = (event) => {
        this.onHandling(this.state.isOpened, !this.state.isOpened, event)

        this.setState({
            isOpened: !this.state.isOpened
        })
    }

    handleClose = (event) => {
        this.onHandling(this.state.isOpened, false, event)

        this.setState({
            isOpened: false
        })
    }

    onHandling = (prevState, nextState, event) => {
        if (!prevState && nextState) {
            this.perimeter.enableOnClickOutside()
            this.props.onOpen(event)
        } else {
            this.perimeter.disableOnClickOutside()
            this.props.onClose(event)
        }
    }

    render () {
        const passedProps = _(this.props)
            .omit(['target', 'onOpen', 'onClose'])
            .extend({
                onClick: preventHandler(this.handleTooltipClick),
                forceOpened: this.state.isOpened
            })
            .value()

        return (
            <Perimeter disableOnClickOutside ref={this.setRefPerimeter} onClickOutside={this.handleClose}>
                <Tooltip {...passedProps} />
            </Perimeter>
        )
    }
}

ClickTooltip.displayName = 'Tooltip.Click'
