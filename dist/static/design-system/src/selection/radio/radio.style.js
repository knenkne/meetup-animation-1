import styled from '@emotion/styled'
import { css } from '@emotion/core'

import { xsBorderRadius } from '../../styles/radius.config.style'
import { THEMES } from '../../styles/semantic-palette.config.style'
import { Typography } from '../../typography/typography'

const { LIGHT_THEME } = THEMES

export const RadioTypograpyStyled = styled(Typography)`
    cursor: pointer;
    padding-left: 12px;
    
    &:hover {
        color: ${LIGHT_THEME.secondary};
    }  
`

export const ButtonStyled = styled.div`
    position: relative;
    flex-shrink: 0;
    width: 20px;
    height: 20px;
    background: ${LIGHT_THEME.checkboxBody};
    border: solid 1px ${LIGHT_THEME.checkboxBorderOffNormal};
    border-radius: 20px;
    cursor: pointer;
    transition: 0.17s;
`

export const InputStyled = styled.input`
    position: absolute;
    opacity: 0;
    top: 0;
    left: 0;
    width: 20px;
    margin: 0;
    height: 20px;
    padding: 0;

    &:checked {
        ~ ${ButtonStyled} {
            cursor: default;
            border: 5px solid ${LIGHT_THEME.checkboxOnNormal};
        }

        ~ ${RadioTypograpyStyled} {
            cursor: default;
            color: ${LIGHT_THEME.primary};
        }
    }
    
    &:checked:hover {
      ~ ${ButtonStyled} {
            cursor: default;
            border: 5px solid ${LIGHT_THEME.checkboxOnHover};
        }
    }
            
    &:checked:active {
      ~ ${ButtonStyled} {
            cursor: default;
            border: 5px solid ${LIGHT_THEME.checkboxOnClick};
        }
    }

    &:disabled {
        ~ ${ButtonStyled} {
            cursor: default;
            border-color: ${LIGHT_THEME.checkboxBorderOffDisabled};
            background: ${LIGHT_THEME.checkboxBodyOffDisabled};
        }

        ~ ${RadioTypograpyStyled} {
            color: ${LIGHT_THEME.tertiary};
            cursor: default;

            &:hover {
                color: ${LIGHT_THEME.tertiary};
                cursor: default;
            }
        }
    }

    &:checked:disabled + ${ButtonStyled} {
        border: 5px solid ${LIGHT_THEME.checkboxBorderOnDisabled};
        background: ${LIGHT_THEME.checkboxBodyOnDisabled};
    }
`

const errorStyle = css`
  ${InputStyled} + ${ButtonStyled} {
     border-color: ${LIGHT_THEME.checkboxWarningNormal};
  } 

  ${InputStyled}:hover + ${ButtonStyled} {
     border-color: ${LIGHT_THEME.checkboxWarningHover};
  }

  ${InputStyled}:active + ${ButtonStyled} {
     border-color: ${LIGHT_THEME.checkboxWarningClick};
  }
`

export const RadioWrapperLabelStyled = styled.label`
    display: flex;
    position: relative;
    margin: 0 0 0 -12px;
    cursor: auto;
    border: 1px dotted ${LIGHT_THEME.noColor};
    border-radius: ${xsBorderRadius};

    body:not(.pointer-events) &:focus-within {
        border-color: ${LIGHT_THEME.primary};
    }

    &:hover {
        ${ButtonStyled} {
            border-color: ${LIGHT_THEME.checkboxOffHover};
        }

        ${RadioTypograpyStyled} {
            color: ${LIGHT_THEME.primary};
        }
    }
        
    ${({ error }) => error && errorStyle}
`
