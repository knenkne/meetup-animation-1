import React from 'react'

import { DARK_THEME } from './theme-colors'

export const ThemeContext = React.createContext({
    handleThemeChange: () => {},
    themeColor: DARK_THEME
})
