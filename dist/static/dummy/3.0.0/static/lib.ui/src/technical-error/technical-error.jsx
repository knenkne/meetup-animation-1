import React from 'react'
import PropTypes from 'prop-types'
import classnames from 'classnames'

import { Icon } from '../icon'

import { Actions } from './actions'
import { Description } from './description'
import defaultTheme from './style.css'

const iconTheme = {
    icon: classnames(Icon.theme.icon, defaultTheme.technicalErrorIcon)
}

/**
 * [Zeplin](https://app.zeplin.io/project/5c74ef0d753f3ebccdf8f33d/dashboard?sid=5ca6147577eeb0193d2fe1d7)
 * Компонент отображения технической ошибки в приложении
 *
 * @param {Object} props - свойства компонента
 * @return {JSX} - компонент
 */
export const TechnicalError = ({
    imageSrc,
    srcSet,
    title,
    children,
    theme
}) => (
    <article className={theme.technicalError} data-unit="technical:error">
        {imageSrc ? (
            <img
                src={imageSrc}
                srcSet={srcSet}
                alt={title}
                className={theme.technicalErrorImage}
            />
        ) : (
            <Icon theme={iconTheme} name="icon:core/common/technical-error" />
        )}

        <h3
            data-unit="technical:error:title"
            className={theme.technicalErrorTitle}
        >
            {title}
        </h3>

        {children}
    </article>
)

TechnicalError.propTypes = {
    imageSrc: PropTypes.string,
    srcSet: PropTypes.string,
    title: PropTypes.string.isRequired,
    children: PropTypes.node,
    theme: PropTypes.object
}

TechnicalError.defaultProps = {
    imageSrc: void 0,
    srcSet: void 0,
    children: void 0,
    theme: defaultTheme
}

TechnicalError.theme = defaultTheme
TechnicalError.Actions = Actions
TechnicalError.Description = Description

TechnicalError.displayName = 'TechnicalError'
export default TechnicalError
