import React, { useMemo } from 'react'
import PropTypes from 'prop-types'
import classnames from 'classnames'
import { Icon, Typography, mergeTheme } from '@sbol/lib.ui'

import * as icons from './icons'
import defaultTheme from './style.css'

Icon.addIcons('icon:widgets/web/status', icons)

const headlineTheme = mergeTheme(Typography.theme, {
    headline: defaultTheme.title
})

const WebStatusHeadline = ({
    properties: { level, icon, imageSrc, pinBackgroundColor },
    title
}) => {
    // В 2.4 использовался status level: 'success', обрабатываем его тоже на всякий случай.
    const levelStatus = useMemo(() => level === 'success' ? 'done' : level, [level])

    return (
        <article
            data-status={levelStatus}
            className={classnames(defaultTheme.status, defaultTheme[levelStatus])}
        >

            <div className={defaultTheme.level} style={{ backgroundColor: pinBackgroundColor }}>
                {imageSrc ? (
                    <img
                        src={imageSrc}
                        className={defaultTheme.image}
                        alt={title}
                        role="presentation"
                    />
                ) :
                    <Icon
                        name={icon || `icon:widgets/web/status/${levelStatus}`}
                        size={icon ? 'lg' : 'sm'}
                    />}
            </div>

            <Typography.Headline mode="h1" theme={headlineTheme}>
                {title}
            </Typography.Headline>
        </article>
    )
}

WebStatusHeadline.propTypes = {
    title: PropTypes.string.isRequired,
    properties: PropTypes.shape({
        level: PropTypes.oneOf(['done', 'waiting', 'error', 'info']).isRequired,
        icon: void '',
        imageSrc: void '',
        pinBackgroundColor: void ''
    }).isRequired
}

export default WebStatusHeadline
