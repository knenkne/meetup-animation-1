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
export const Caption = (props) => {

    const { colorScheme, mode, theme, ...rest } = props

    return (
        <div
            {...rest}
            className={cx(theme.caption, theme[colorScheme], theme[mode])}
            data-unit="caption"
        >
            {props.children}
        </div>
    )
}

Caption.propTypes = {
    children: PropTypes.node,
    colorScheme: PropTypes.oneOf(['black', 'dark-gray', 'gray', 'green', 'orange', 'white', 'red']),
    mode: PropTypes.string,
    theme: PropTypes.object
}

Caption.defaultProps = {
    children: void 0,
    colorScheme: 'black',
    mode: 'caption',
    theme: defaultTheme
}

Caption.displayName = 'Typography.Caption'
