import styled from '@emotion/styled'
import { css } from '@emotion/core'

import { THEMES } from '../styles/semantic-palette.config.style'
import { focusBorder } from '../styles/semantic.config.style'

import { ButtonBaseStyled, ButtonTypographyStyled } from './button.style'

const { LIGHT_THEME } = THEMES

const borderWidth = '1px'
const focusBorderColor = (color) => focusBorder(borderWidth)(color)

export const ButtonStyled = styled(ButtonBaseStyled)`
    background-color: ${LIGHT_THEME.buttonTextBodyNormal};

    body:not(.pointer-events) &:focus {
        box-shadow: ${focusBorderColor(LIGHT_THEME.buttonTextFocus)};
    }
    
    &:hover {
        background-color: ${LIGHT_THEME.buttonTextHover};
        outline: none;
    }
     
    &:active {
        outline: none;
        background-color: ${LIGHT_THEME.buttonTextClick};
    }
    
    ${ButtonTypographyStyled} {
        color: ${LIGHT_THEME.buttonTextNormal};
    }
`
