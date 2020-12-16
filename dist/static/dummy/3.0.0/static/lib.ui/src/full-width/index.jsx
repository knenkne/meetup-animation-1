import React from 'react'
import PropTypes from 'prop-types'
import classnames from 'classnames'

import { Inner } from './inner'
import theme from './style.css'

const FullWidth = (props) => <div {...props} className={classnames(theme.outer, props.className)} />
FullWidth.propTypes = {
    className: PropTypes.string
}
FullWidth.defaultProps = {
    className: void ''
}

FullWidth.Inner = Inner
FullWidth.theme = theme

export { FullWidth }
