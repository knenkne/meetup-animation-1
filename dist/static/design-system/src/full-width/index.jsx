import React from 'react'
import PropTypes from 'prop-types'

import { Inner } from './inner'
import { OuterStyled } from './full-width.style'

const FullWidth = (props) => <OuterStyled {...props} />

FullWidth.propTypes = {
    className: PropTypes.string
}
FullWidth.defaultProps = {
    className: void ''
}

FullWidth.Inner = Inner

export { FullWidth }
