import React, { useContext, useCallback } from 'react'
import i18next from 'i18next'

import { ThemeContext } from '../../theme-wrapper/theme-wrapper.context'
import { getThemeProperties } from '../../theme-wrapper/theme-colors'
import { onChangeThemeAnalytics } from '../../../../analytics'

import { ChangeThemeButtonStyled, ChangeThemeButtonInnerStyled, ChangeThemeIconStyled } from './change-theme-button.styles'

export const ChangeThemeButton = () => {
    const themeContextValue = useContext(ThemeContext)

    const {
        handleThemeChange,
        themeColor
    } = themeContextValue

    const handleClick = (color) => useCallback(() => {
        if (getThemeProperties(color)) {
            onChangeThemeAnalytics(getThemeProperties(color).analyticsValue)
            handleThemeChange(getThemeProperties(color).changeThemeTo)
        }
    }, [color])

    return (
        <ChangeThemeButtonStyled
            onClick={handleClick(themeColor)}
        >
            <ChangeThemeButtonInnerStyled>
                <ChangeThemeIconStyled title={i18next.t(getThemeProperties(themeColor)?.title)} name={getThemeProperties(themeColor)?.icon} />
            </ChangeThemeButtonInnerStyled>
        </ChangeThemeButtonStyled>
    )

}
