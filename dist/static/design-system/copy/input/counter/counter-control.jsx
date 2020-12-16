import React from 'react'
import PropTypes from 'prop-types'
import _ from 'lodash'
import classnames from 'classnames'

import { disableHandler, preventHandler } from '../../utils'
import { Icon } from '../../icon'

import defaultTheme from './counter.css'

const iconMap = {
    increase: 'plus',
    decrease: 'minus'
}

const iconTheme = { icon: classnames(Icon.theme.icon, defaultTheme.counterButtonIcon) }

export function CounterControl (props) {
    const passedProps = _(props)
        .omit([
            'onClick',
            'mode',
            'hidden'
        ])
        .extend({
            className: classnames(
                defaultTheme.counterButton,
                {
                    [defaultTheme.counterLeft]: props.mode === 'decrease',
                    [defaultTheme.counterRight]: props.mode === 'increase',
                }
            ),
            onClick: disableHandler(preventHandler(props.onClick), props.disabled),
            'data-unit': `input:counter:control:${props.mode}`,
            type: 'button',
            tabIndex: -1
        })
        .value()

    return (
        <button type="button" {...passedProps}>
            <Icon theme={iconTheme} name={`icon:core/common/${iconMap[props.mode]}`} />
        </button>
    )
}

CounterControl.propTypes = {
    mode: PropTypes.oneOf(['increase', 'decrease']).isRequired,
    onClick: PropTypes.func,
    disabled: PropTypes.bool
}

CounterControl.defaultProps = {
    disabled: false,
    onClick: _.noop
}
