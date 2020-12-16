import React from 'react'
import PropTypes from 'prop-types'
import cx from 'classnames'

import defaultTheme from './style.css'

/**
 * [Zeplin](https://app.zeplin.io/project/5c74ef0d753f3ebccdf8f33d?seid=5ca73031b14aee19ff3f343a)
 * Заголовок приложения
 *
 * @param {Object} props - свойства компонента
 * @return {JSX} - компонент
 */

export const Headline = (props) => {
    const { mode, children, colorScheme, theme, ...rest } = props
    const Component = mode === 'banner' ? 'h5' : mode

    return (
        <Component
            {...rest}
            className={cx(theme.headline, theme[colorScheme], theme[mode])}
            data-unit="headline"
        >
            {children}
        </Component>
    )
}

Headline.propTypes = {
    children: PropTypes.node,
    mode: PropTypes.oneOf(['h1', 'h2', 'h3', 'h4', 'h5', 'banner']),
    colorScheme: PropTypes.oneOf(['black', 'dark-gray', 'gray', 'green', 'orange', 'white', 'red']),
    theme: PropTypes.object
}

Headline.defaultProps = {
    children: void 0,
    mode: 'h1',
    colorScheme: 'black',
    theme: defaultTheme
}

Headline.displayName = 'Typography.Headline'
