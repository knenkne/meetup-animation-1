import React from 'react'
import PropTypes from 'prop-types'

import defaultTheme from '../style.css'

export const Description = ({ children, theme, ...props }) => (
    <div
        {...props}
        className={theme.description}
    >
        {children}
    </div>
)

Description.propTypes = {
    children: PropTypes.node,
    theme: PropTypes.object

}

Description.defaultProps = {
    children: void 0,
    theme: defaultTheme
}

Description.displayName = 'Card.Description'
