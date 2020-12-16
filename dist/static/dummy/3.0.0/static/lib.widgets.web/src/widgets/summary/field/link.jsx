import React from 'react'
import PropTypes from 'prop-types'
import { Link as UiLink } from '@sbol/lib.ui'
import { Link as AppLink } from '@sbol/lib.app'
import classnames from 'classnames'

import style from './style.css'

export const Link = ({ title, description, value, style: view, halfWidth }) => {
    const format = view && view.split(':')[1]
    const mode = format && `file:${format}`
    const external = value.startsWith('http')
    const href = external ? value : AppLink.createUrl(value)

    return (
        <div className={classnames(style.field, halfWidth && style.half)}>
            {title && <span className={style.title}>{title}</span>}

            <div className={style.value}>
                <UiLink
                    as={AppLink}
                    href={href}
                    mode={mode}
                    external={external}
                >
                    {description}
                </UiLink>
            </div>
        </div>
    )
}

Link.propTypes = {
    value: PropTypes.string.isRequired,
    title: PropTypes.string,
    description: PropTypes.string.isRequired,
    style: PropTypes.string,
    halfWidth: PropTypes.bool
}

Link.defaultProps = {
    title: '',
    style: '',
    halfWidth: false
}
