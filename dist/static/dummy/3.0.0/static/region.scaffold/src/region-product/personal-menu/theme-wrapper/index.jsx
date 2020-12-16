import React, { useEffect, useState } from 'react'
import { ThemeProvider } from 'emotion-theming'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import { Global } from '@emotion/core'

import { actions, selectors } from '../../__data__'
import { global } from '../../../global.styles'

import { DARK_THEME, themeColors } from './theme-colors'
import { ThemeContext } from './theme-wrapper.context'

export const ThemeWrapperComponent = ({ children, theme, handleThemeChange }) => {
    const [themeColor, setThemeColor] = useState(theme)

    useEffect(() => {
        setThemeColor(theme)
    }, [theme])

    return (
        <ThemeContext.Provider
            value={{
                handleThemeChange,
                themeColor
            }}
        >
            <ThemeProvider theme={themeColors[themeColor] || themeColor[DARK_THEME]}>
                <Global
                    styles={global}
                />
                { children }
            </ThemeProvider>
        </ThemeContext.Provider>
    )
}

const mapStateToProps = (state) => ({
    theme: selectors.theme.themeSelector(state)
})

const mapDispatchToProps = (dispatch) => ({
    handleThemeChange: (color) => dispatch(actions.init.fetchSetTheme(color))
})

ThemeWrapperComponent.defaultProps = {
    children: null,
    theme: '',
    handleThemeChange: () => {}
}

ThemeWrapperComponent.propTypes = {
    children: PropTypes.node,
    theme: PropTypes.string,
    handleThemeChange: PropTypes.func
}

export const ThemeWrapper = connect(mapStateToProps, mapDispatchToProps)(ThemeWrapperComponent)
