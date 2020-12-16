import React from 'react'

import { Typography, propTypes as typographyPropTypes } from './typography'

export const Caption = (props) => <Typography size="sm" {...props} />

const defaultProps = {
    mode: 'regular',
    indent: 'openspace',
    colorScheme: 'primary'
}

Caption.propTypes = typographyPropTypes
Caption.defaultProps = defaultProps
Caption.displayName = 'Caption'
