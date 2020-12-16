import React from 'react'
import PropTypes from 'prop-types'

import defaultTheme from './style.css'

export const Description = (props) => (
    <div
        {...props}
        className={defaultTheme.description}
        data-unit="alert:description"
    >
        {props.children}
    </div>
)

Description.propTypes = {
    children: PropTypes.node
}

Description.defaultProps = {
    children: void 0
}

Description.displayName = 'Alert.Description'
