import React from 'react'
import PropTypes from 'prop-types'

import defaultTheme from './style.css'

export const Block = ({ children }) => children ? <div className={defaultTheme.block}>{children}</div> : null

Block.propTypes = {
    children: PropTypes.node
}

Block.defaultProps = {
    children: void 0,
}

Block.displayName = 'Table.Block'

