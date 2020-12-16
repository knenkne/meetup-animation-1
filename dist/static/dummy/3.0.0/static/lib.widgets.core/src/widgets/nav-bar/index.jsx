import React from 'react'
import PropTypes from 'prop-types'
import { Typography, Link, Markdown } from '@sbol/lib.ui'
import { getConfigValue, getHistory } from '@sbol/lib.app'

import style from './style.css'

const REDIRECT_TIMEOUT = 100

const getUri = (uri = '') => uri.startsWith('/PhizIC') ? getConfigValue('erib.url') + uri : uri

const handleRedirect = (uri) => {
    if (uri.startsWith('http')) {
        window.location = uri
    } else {
        getHistory().push(uri)
    }
}

export const NavBar = ({ title, description, events, eventsActions }) => {
    const handleClick = React.useCallback((event) => {
        event.preventDefault()
        const { cmd, uri, name } = events[0]

        const command = cmd.toLowerCase() || 'next'

        if (command === 'rollback') {
            eventsActions[command]()
        } else {
            eventsActions[command](name)
        }

        if (uri) {
            setTimeout(handleRedirect, REDIRECT_TIMEOUT, getUri(events[0].uri))
        }
    })

    return (
        <div className={style.bar}>
            {events[0] && (
                <div className={style.nav}>
                    <Link
                        mode="breadcrumb"
                        onClick={handleClick}
                        href={getUri(events[0].uri)}
                    >
                        {events[0].title}
                    </Link>
                </div>
            )}
            {title && <Typography.Headline>{title}</Typography.Headline>}
            {description && <Markdown.Short content={description} />}
        </div>
    )
}

NavBar.displayName = 'CoreNavBar'

NavBar.propTypes = {
    events: PropTypes.arrayOf(
        PropTypes.shape({
            cmd: PropTypes.string,
            name: PropTypes.string,
            title: PropTypes.string,
            description: PropTypes.string,
            uri: PropTypes.string,
        })
    ),
    eventsActions: PropTypes.object,
    title: PropTypes.string,
    description: PropTypes.string,
}

NavBar.defaultProps = {
    title: void '',
    description: void '',
    events: [],
    eventsActions: {}
}

export default NavBar
