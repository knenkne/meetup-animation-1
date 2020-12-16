import React from 'react'
import PropTypes from 'prop-types'
import classnames from 'classnames'
import { Icon } from '@sbol/lib.ui'

import * as icons from './icons'
import defaultTheme from './style.css'

Icon.addIcons('icon:core/widgets/status', icons)

const iconTheme = { ...Icon.theme, icon: classnames(Icon.theme.icon, defaultTheme.icon) }

const CoreStatusHeadline = ({ properties: { level }, title }) => (
    <div data-status={level}>
        <article className={classnames(defaultTheme.status, defaultTheme[level])}>
            <div className={defaultTheme.level}>
                <Icon theme={iconTheme} name={`icon:core/widgets/status/${level}`} size="sm" />
            </div>
            <h1 className={defaultTheme.title}>
                {title}
            </h1>
        </article>
    </div>
)

CoreStatusHeadline.propTypes = {
    title: PropTypes.string.isRequired,
    description: PropTypes.string,
    properties: PropTypes.shape({
        level: PropTypes.string.isRequired,
        dedicatedStatusMessage: PropTypes.string
    })
}
CoreStatusHeadline.defaultProps = {
    properties: {},
    description: ''
}

export default CoreStatusHeadline
