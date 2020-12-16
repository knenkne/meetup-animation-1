import React from 'react'
import PropTypes from 'prop-types'
import classnames from 'classnames'
import _ from 'lodash'

import defaultTheme from './style.css'

const omitProps = ['colorScheme']

/**
 * [Zeplin](https://app.zeplin.io/project/5c74ef0d753f3ebccdf8f33d?seid=5ca73031b14aee19ff3f343a)
 *
 * @param {Object} props - свойства компонента
 * @return {JSX} - компонент
 */
export const Uppercase = (props) => (
    <p
        {..._.omit(props, omitProps)}
        className={classnames(defaultTheme.uppercase, defaultTheme[props.colorScheme])}
        data-unit="uppercase"
    >
        {props.children}
    </p>
)

Uppercase.propTypes = {
    children: PropTypes.node,
    colorScheme: PropTypes.oneOf(['black', 'black-opaque', 'green', 'dark-blue', 'white', 'red'])
}

Uppercase.defaultProps = {
    children: void 0,
    colorScheme: 'black'
}

Uppercase.displayName = 'Typography.Uppercase'
