import React from 'react'
import PropTypes from 'prop-types'

import defaultTheme from './style.css'

export const Actions = ({ children, theme }) => (
    <div
        className={theme.actions}
        data-unit="technical:error:actions"
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

Actions.displayName = 'TechnicalError.Actions'
