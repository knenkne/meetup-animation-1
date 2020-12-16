import React from 'react'
import PropTypes from 'prop-types'

import defaultTheme from './style.css'

export const Header = ({ children }) => children ? <div className={defaultTheme.header}>{children}</div> : null

Header.propTypes = {
    children: PropTypes.node,
}

Header.defaultProps = {
    children: void 0
}

Header.displayName = 'Table.Header'

