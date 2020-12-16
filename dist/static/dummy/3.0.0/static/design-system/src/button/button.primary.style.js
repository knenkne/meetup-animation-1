import React from 'react'
import styled from '@emotion/styled'
import { css } from '@emotion/core'

import { THEMES } from '../styles/semantic-palette.config.style'
import { focusBorder } from '../styles/semantic.config.style'

import { ButtonBaseStyled, ButtonTypographyStyled } from './button.style'

const { LIGHT_THEME } = THEMES

const borderWidth = '1px'
const focusBorderColor = (color) => focusBorder(borderWidth)(color)

export const ButtonStyled = styled(ButtonBaseStyled)`
    background-color: ${LIGHT_THEME.buttonPrimaryNormal};
    
    ${({ mode }) => mode !== 'loading' && css`
        &:hover {
            background-color: ${LIGHT_THEME.buttonPrimaryHover};
            outline: none;
        }
    `}
   
    body:not(.pointer-events) &:focus {
        background-color: ${LIGHT_THEME.buttonPrimaryFocusBody};
        box-shadow: ${focusBorderColor(LIGHT_THEME.buttonPrimaryFocusBorder)};
    }

    &:active {
        background-color: ${LIGHT_THEME.buttonPrimaryClick};
        outline: none;
    }
    
    ${ButtonTypographyStyled} {
        color: ${LIGHT_THEME.buttonPrimaryTextNormal};
        
        ${({ mode }) => mode === 'loading' && css`
            color: ${LIGHT_THEME.buttonPrimaryNormal};
        `}
    }
`
