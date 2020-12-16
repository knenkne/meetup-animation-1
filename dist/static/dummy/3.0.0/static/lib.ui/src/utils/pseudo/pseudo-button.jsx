import React from 'react'
import PropTypes from 'prop-types'
import _ from 'lodash'

export class PseudoButton extends React.PureComponent {
    static displayName = 'PseudoButton'

    static propTypes = {
        onClick: PropTypes.func,
        onKeyPress: PropTypes.func,
        tabIndex: PropTypes.number,
        disabled: PropTypes.bool
    }

    static defaultProps = {
        onClick: _.noop,
        onKeyPress: _.noop,
        tabIndex: 0,
        disabled: false
    }

    handleKeyPress = (event) => {
        if (event.key === ' ' || event.key === 'Enter') {
            event.preventDefault()
            // при управлении с клавиатуры данное событие не всплывает как клик
            this.props.onClick(event)
        }

        this.props.onKeyPress(event)
    }

    render () {
        const props = {
            role: 'button',
            ...this.props,
            onKeyPress: this.handleKeyPress
        }

        if (this.props.disabled) {
            delete props.tabIndex
            delete props.onKeyPress
        }

        return <span {...props} />
    }
}
