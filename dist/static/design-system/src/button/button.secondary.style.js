import styled from '@emotion/styled'
import { css } from '@emotion/core'

import { THEMES } from '../styles/semantic-palette.config.style'
import { focusBorder } from '../styles/semantic.config.style'

import { ButtonBaseStyled, ButtonTypographyStyled } from './button.style'

const { LIGHT_THEME } = THEMES

const borderWidth = '2px'
const borderColor = (color) => focusBorder(borderWidth)(color)

export const ButtonStyled = styled(ButtonBaseStyled)`
    box-shadow: ${borderColor(LIGHT_THEME.buttonSecondaryNormal)};
    background-color: ${LIGHT_THEME.noColor};

    body:not(.pointer-events) &:focus {
        box-shadow: ${borderColor(LIGHT_THEME.buttonSecondaryFocus)};
    }
    
    &:hover {
        box-shadow: ${borderColor(LIGHT_THEME.buttonSecondaryHover)};
        outline: none;
    }
     
    &:active {
        outline: none;
        box-shadow: ${borderColor(LIGHT_THEME.buttonSecondaryClick)};
    }
    
    ${ButtonTypographyStyled} {
        color: ${LIGHT_THEME.buttonSecondaryTextNormal};
    }
`
