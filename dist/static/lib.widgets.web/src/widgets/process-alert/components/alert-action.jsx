import React from 'react'
import PropTypes from 'prop-types'
import { Link } from '@sbol/lib.ui'
import { Link as AppLink } from '@sbol/lib.app'

export const linkLevelMap = {
    warning: 'gray',
    info: 'purple',
    error: 'orange',
    success: 'green'
}

export const AlertAction = ({ level, title, properties }) => {
    const { uri } = properties
    const colorScheme = linkLevelMap[level]
    const external = uri.startsWith('http')
    const href = external ? uri : AppLink.createUrl(uri)

    return (
        <Link
            href={href}
            colorScheme={colorScheme}
            external={external}
            size="sm"
            bold
        >
            {title}
        </Link>
    )
}

AlertAction.propTypes = {
    title: PropTypes.string,
    level: PropTypes.string,
    properties: PropTypes.object
}

AlertAction.defaultProps = {
    title: void 0,
    level: 'warning',
    properties: {}
}
