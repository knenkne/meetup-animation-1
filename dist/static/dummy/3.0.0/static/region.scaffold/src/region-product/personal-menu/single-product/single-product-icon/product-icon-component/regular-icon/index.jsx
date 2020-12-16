import React from 'react'
import PropTypes from 'prop-types'

import { ThemedIcon } from '../../../../themed-icon'
import { GHOST_COLOR } from '../../../../../style-constants'

const DEFAULT_SRC = ''

export const getIconType = (colorScheme, type) => {
    switch (true) {
        case colorScheme === GHOST_COLOR:
            return 'gray'
        case !colorScheme && type !== 'cards':
            return 'mono'
        default:
            return ''
    }
}

export const RegularIcon = ({ icon, colorScheme, type }) => (
    <ThemedIcon
        name={icon}
        colorScheme={colorScheme}
        type={getIconType(colorScheme, type)}
    />
)

RegularIcon.defaultProps = {
    icon: DEFAULT_SRC,
    type: DEFAULT_SRC,
    colorScheme: ''
}

RegularIcon.propTypes = {
    icon: PropTypes.string,
    colorScheme: PropTypes.string,
    type: PropTypes.string
}
