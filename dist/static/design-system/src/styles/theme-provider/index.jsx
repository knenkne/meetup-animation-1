import React, { useState } from 'react'
import { ThemeProvider } from 'emotion-theming'
import _ from 'lodash'

import { getFromStorage, setToStorage } from './storage'
import { THEME_COLORS, COLORS } from './theme-colors'

export const ThemeWrapper = ({ children }) => {
    const [theme, setTheme] = useState(getFromStorage('themeColor', COLORS.DARK))

    const changeTheme = (color = COLORS.WHITE) => _.memoize(() => {
        setToStorage('themeColor', color)
        return (
            setTheme(color)
        )
    })

    return (
        <ThemeWrapperContext.Provider
            value={{
                changeTheme,
                theme
            }}
        >
            <ThemeProvider theme={THEME_COLORS[theme]}>
                { children }
            </ThemeProvider>
        </ThemeWrapperContext.Provider>
    )
}

export const ThemeWrapperContext = React.createContext(() => {})
