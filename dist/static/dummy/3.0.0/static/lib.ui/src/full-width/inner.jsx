import React from 'react'
import PropTypes from 'prop-types'
import classnames from 'classnames'

import theme from './style.css'

export const Inner = (props) => <div {...props} className={classnames(theme.inner, props.className)} />
Inner.propTypes = {
    className: PropTypes.string
}
Inner.defaultProps = {
    className: void ''
}
Inner.displayName = 'FullWidth.Inner'
