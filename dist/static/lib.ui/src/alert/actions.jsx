import React from 'react'
import PropTypes from 'prop-types'

import defaultTheme from './style.css'

export const Actions = (props) => (
    <div
        {...props}
        className={defaultTheme.actions}
        data-unit="alert:actions"
    >
        {props.children}
    </div>
)

Actions.propTypes = {
    children: PropTypes.node
}

Actions.defaultProps = {
    children: void 0
}

Actions.displayName = 'Alert.Actions'
