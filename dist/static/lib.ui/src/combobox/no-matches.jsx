import React from 'react'
import PropTypes from 'prop-types'

export const NoMatches = (props) => {
    const { children, className } = props

    return (
        <div className={className}>
            {children}
        </div>
    )
}

NoMatches.propTypes = {
    children: PropTypes.node.isRequired,
    className: PropTypes.string,
}

NoMatches.defaultProps = {
    className: void 0
}

NoMatches.displayName = 'Combobox.NoMatches'
