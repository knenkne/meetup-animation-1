import React from 'react'
import PropTypes from 'prop-types'
import { Link, getNavigationValue } from '@sbol/lib.app'
import { Link as UILink } from '@sbol/lib.ui'

const base = getNavigationValue('lib.workflow')

export const Main = ({ config }) => (
    <ul>
        {config.map((route) => (
            <li key={route.path}>
                <UILink as={Link} href={`${base}${route.path}`} external={false}>
                    {route.title}
                </UILink>
            </li>
        ))}
    </ul>
)

Main.propTypes = {
    config: PropTypes.array
}

Main.defaultProps = {
    config: []
}
