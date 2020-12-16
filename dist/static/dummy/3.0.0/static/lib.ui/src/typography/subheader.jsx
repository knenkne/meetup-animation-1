import React from 'react'
import PropTypes from 'prop-types'
import classnames from 'classnames'
import _ from 'lodash'

import { deprecate } from '../utils/hoc'

import defaultTheme from './style.css'

const omitProps = ['colorScheme']

/**
 * @deprecated С версии 4.0.0.
 * [Zeplin](https://app.zeplin.io/project/5c74ef0d753f3ebccdf8f33d?seid=5ca73031b14aee19ff3f343)
 *
 * @param {Object} props - свойства компонента
 * @return {JSX} - компонент
 */
export const Subheader = (props) => (
    <h3
        {..._.omit(props, omitProps)}
        className={classnames(defaultTheme.subheader, defaultTheme[props.colorScheme])}
        data-unit="subheader"
    >
        {props.children}
    </h3>
)

Subheader.propTypes = {
    children: PropTypes.node,
    colorScheme: PropTypes.oneOf(['black', 'dark-gray', 'gray', 'green', 'orange', 'white'])
}

Subheader.defaultProps = {
    children: void 0,
    colorScheme: 'black'
}

Subheader.displayName = 'Typography.Subheader'

export default deprecate()(Subheader)
