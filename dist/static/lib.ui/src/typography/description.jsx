import React from 'react'
import PropTypes from 'prop-types'
import cx from 'classnames'

import defaultTheme from './style.css'

/**
 * [Zeplin](https://app.zeplin.io/project/5c74ef0d753f3ebccdf8f33d?seid=5ca73031b14aee19ff3f343a)
 *
 * @param {Object} props - свойства компонента
 * @return {JSX} - компонент
 */
export const Description = ({ theme, children, colorScheme, ...props }) => (
    <div
        {...props}
        className={cx(theme.description, theme[colorScheme])}
    >
        {children}
    </div>
)

Description.propTypes = {
    children: PropTypes.node,
    colorScheme: PropTypes.oneOf(['black', 'dark-gray', 'gray', 'green', 'orange', 'white']),
    theme: PropTypes.object,
}

Description.defaultProps = {
    children: void 0,
    colorScheme: void 0,
    theme: defaultTheme
}

Description.displayName = 'Typography.Description'
