import React from 'react'
import PropTypes from 'prop-types'

import { InnerStyled } from './full-width.style'

export const Inner = (props) => <InnerStyled {...props} />

Inner.propTypes = {
    className: PropTypes.string
}
Inner.defaultProps = {
    className: void ''
}
Inner.displayName = 'FullWidth.Inner'
