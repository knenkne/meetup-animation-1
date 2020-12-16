import React from 'react'
import PropTypes from 'prop-types'

import defaultTheme from '../style.css'

export const Actions = ({ children, theme, ...props }) => (
    <div
        {...props}
        className={theme.actions}
    >
        {children}
    </div>
)

Actions.propTypes = {
    children: PropTypes.node,
    theme: PropTypes.object
}

Actions.defaultProps = {
    children: void 0,
    theme: defaultTheme
}

Actions.displayName = 'Card.Actions'
