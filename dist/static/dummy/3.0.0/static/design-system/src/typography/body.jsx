import React from 'react'
import PropTypes from 'prop-types'

import { Typography } from './typography'

export const Body1 = (props) => <Typography size="lg" indent="openspace" {...props} />
export const Body2 = (props) => <Typography size="md" indent="openspace" {...props} />

const defaultProps = {
    mode: 'regular',
    colorScheme: 'primary'
}

const propTypes = {
    children: PropTypes.node.isRequired,
    mode: PropTypes.oneOf(['semibold', 'regular']),
    colorScheme: PropTypes.oneOf(['primary', 'secondary', 'tertiary', 'brand', 'success', 'info', 'warning', 'whitePrimary', 'whiteSecondary', 'whiteTertiary'])
}


Body1.propTypes = propTypes
Body1.defaultProps = defaultProps
Body1.displayName = 'Body'

Body2.propTypes = propTypes
Body2.defaultProps = defaultProps
