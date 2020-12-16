import React, { useContext } from 'react'
import PropTypes from 'prop-types'

import { ThemeContext } from '../theme-wrapper/theme-wrapper.context'

import { ThemedIconStyled } from './themed-icon.styles'


export const ThemedIcon = ({ type, ...rest }) => {
    const { themeColor } = useContext(ThemeContext)
    return (
        <ThemedIconStyled
            themeColor={themeColor}
            type={type}
            {...rest}
        />
    )
}

ThemedIcon.defaultProps = {
    type: ''
}

ThemedIcon.propTypes = {
    type: PropTypes.string
}
