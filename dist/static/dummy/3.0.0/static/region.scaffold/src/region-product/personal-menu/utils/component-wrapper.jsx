import React from 'react'
import { PropTypes } from 'prop-types'

export const ComponentWrapper = ({ as, ...rest }) => {
    if (as === 'self') {
        return rest.children
    }

    const Tag = as || 'div'
    return <Tag {...rest} />
}

ComponentWrapper.displayName = 'ComponentWrapper'

ComponentWrapper.defaultProps = {
    as: null,
    children: null
}

ComponentWrapper.propTypes = {
    as: PropTypes.oneOfType([PropTypes.string, PropTypes.func, PropTypes.node, PropTypes.object]),
    children: PropTypes.node
}
