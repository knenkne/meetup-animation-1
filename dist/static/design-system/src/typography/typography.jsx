import React from 'react'
import PropTypes from 'prop-types'

import { TypographyStyled as Typography } from './typography.style'

export const propTypes = {
    children: PropTypes.node.isRequired,
    mode: PropTypes.oneOf(['semibold', 'regular', 'bold']),
    indent: PropTypes.oneOf(['openspace', 'innerspace', 'micro', 'nano', 'zero']),
    colorScheme: PropTypes.oneOf(['primary', 'secondary', 'tertiary', 'brand', 'success', 'info', 'warning', 'whitePrimary', 'whiteSecondary', 'whiteTertiary'])
}

const defaultProps = {
    mode: 'regular',
    indent: 'openspace',
    colorScheme: 'primary'
}

Typography.propTypes = propTypes
Typography.defaultProps = defaultProps

export { Typography }
