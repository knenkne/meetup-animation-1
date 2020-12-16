import styled from '@emotion/styled'
import { css } from '@emotion/core'

import { xsBorderRadius } from '../../styles/radius.config.style'
import { THEMES } from '../../styles/semantic-palette.config.style'
import { Typography } from '../../typography/typography'

const { LIGHT_THEME } = THEMES

const errorColors = (theme) => ({
    ...theme,

    checkboxBorderOffNormal: theme.checkboxWarningNormal,
    checkboxOnNormal: theme.checkboxWarningNormal,
    checkboxOffHover: theme.checkboxWarningHover,
    checkboxOnHover: theme.checkboxWarningHover,
    checkboxOffClick: theme.checkboxWarningClick,

    switchOffNormal: theme.switchWarningNormal,
    switchOnNormal: theme.switchWarningNormal,
    switchOffHover: theme.switchWarningHover,
    switchOnHover: theme.switchWarningHover,
    switchOffClick: theme.switchWarningClick,
})

const pointSize = '20px'

export const CheckboxTypographyStyled = styled(Typography)`
    padding-left: 12px;
    color: ${LIGHT_THEME.tertiary};
    cursor: pointer;
`

export const IconStyled = styled.span`
    display: none;
    position: absolute;
    width: ${pointSize};
    height: ${pointSize};
    top: 0;
    left: 0;
    
    svg {
      width: 20px;
      height: 20px;
      fill: ${LIGHT_THEME.whitePrimary}
    }
`

export const SwitchStyled = styled.div`
    position: relative;
    width: 36px;
    height: 20px;
    flex-shrink: 0;
    cursor: pointer;
    border-radius: 10px;
    transition: background-color 0.17s ease-in-out;
    
    &::before {
        content: '';
        position: absolute;
        left: 3px;
        top: 2px;
        height: 16px;
        width: 16px;
        border-radius: 100%;
        box-shadow: 0px 2px 4px ${LIGHT_THEME.additional24};
        background-color: ${LIGHT_THEME.whitePrimary};
        transition: 0.4s;
        transition-timing-function: ease-in-out;
    }
    
    & ~ ${CheckboxTypographyStyled} {
        padding-left: 8px;
    }
`

export const CheckboxStyled = styled.div`
    position: relative;
    height: ${pointSize};
    cursor: pointer;

    &::before {
        content: '';
        display: block;
        width: ${pointSize};
        height: ${pointSize};
        background-color: ${LIGHT_THEME.noColor};
        border-radius: ${xsBorderRadius};
        box-sizing: border-box;
        transition: background-color 0.17s ease-in-out, border-color 0.17s ease-in-out;
    }

`

export const InputStyled = styled.input(css`
    position: absolute;
    opacity: 0;
    top: 0;
    left: 0;
    margin: 3px;
            
`, ({ error, theme }) => {
    const checkboxColors = error ? errorColors(LIGHT_THEME) : LIGHT_THEME

    return css`
           
            /* Checkbox */
            & ~ ${CheckboxStyled}::before {
                border: 1px solid ${checkboxColors.checkboxBorderOffNormal};
                background-color: ${checkboxColors.checkboxBody};
            }
            
            &:hover ~ ${CheckboxStyled}::before {       
                border-color: ${checkboxColors.checkboxOffHover};
            }
             
            body:not(.pointer-events) &:focus {
                & ~ ${CheckboxStyled}::before {
                    border-color: ${checkboxColors.checkboxOffHover};
                }
            }
            
            &:active ~ ${CheckboxStyled}::before {
                border-color: ${checkboxColors.checkboxOffClick};
            }
            
            &:disabled ~ ${CheckboxStyled}::before {
                border-color: ${checkboxColors.checkboxBorderOffDisabled};
                background-color: ${checkboxColors.checkboxBodyOffDisabled};
                cursor: default;
            }
            
            &:checked {
                & ~ ${CheckboxStyled}::before {
                    border: 1px solid ${checkboxColors.checkboxOnNormal};
                    background-color: ${checkboxColors.checkboxOnNormal};
                }
                
                & ~ ${CheckboxStyled} ${IconStyled} {
                    display: block;
                }
                
                &:hover ~ ${CheckboxStyled}::before {
                    border-color: ${checkboxColors.checkboxOnHover};
                    background-color: ${checkboxColors.checkboxOnHover};
                }
                
                &:active ~ ${CheckboxStyled}::before {
                    border-color: ${checkboxColors.checkboxOnNormal};
                    background-color: ${checkboxColors.checkboxOnNormal};
                }
                
                body:not(.pointer-events) &:focus {
                    & ~ ${CheckboxStyled}::before {
                        border-color: ${checkboxColors.checkboxOffHover};
                    }
                }
                
                &:disabled ~ ${CheckboxStyled}::before {
                    border-color: ${checkboxColors.checkboxBorderOnDisabled};
                    background-color: ${checkboxColors.checkboxBorderOnDisabled};
                    cursor: default;
                }
                
                &:disabled ~ ${CheckboxStyled} {
                    position: relative;
                }
                
                &:disabled ~ ${CheckboxStyled} ${IconStyled} svg {
                    fill: ${checkboxColors.checkboxBodyOnDisabled};
                }
            }
            
            /* Switch */
            & ~ ${SwitchStyled} {
                background-color: ${checkboxColors.switchOffNormal};
            }
            
            &:hover ~ ${SwitchStyled} {
                background-color: ${checkboxColors.switchOffHover};
                cursor: default;
            }
            
            &:active ~ ${SwitchStyled} {
                background-color: ${checkboxColors.switchOffClick};
                cursor: default;
            }
            
            &:disabled ~ ${SwitchStyled} {
                background-color: ${checkboxColors.switchBodyOffDisabled};
                cursor: default;
            }
            
            &:disabled ~ ${SwitchStyled}::before {
                background-color: ${checkboxColors.switchToggleDisabled};
                cursor: default;
            }
            
            &:checked {
                & ~ ${SwitchStyled} {
                    background-color: ${checkboxColors.switchOnNormal};
                }
                
                & ~ ${SwitchStyled}::before {
                    transform: translateX(14px);
                }
                
                &:hover ~ ${SwitchStyled} {
                    background-color: ${checkboxColors.switchOnHover};
                    cursor: default;
                }
                
                &:active ~ ${SwitchStyled} {
                    background-color: ${checkboxColors.switchOnNormal};
                    cursor: default;
                }
                
                &:disabled ~ ${SwitchStyled} {
                    background-color: ${checkboxColors.switchBodyOnDisabled};
                    cursor: default;
                }
                
                &:disabled ~ ${SwitchStyled}::before {
                    background-color: ${checkboxColors.switchToggleDisabled};
                    cursor: default;
                }
            }
            
            /* Text content */
            &:hover ~ ${CheckboxTypographyStyled} {
                color: ${LIGHT_THEME.secondary};
            }
            
            body:not(.pointer-events) &:focus ~ ${CheckboxTypographyStyled} {
                color: ${LIGHT_THEME.secondary};
            }
       
            &:disabled {
                & ~ ${CheckboxTypographyStyled} {
                    color: ${LIGHT_THEME.tertiary};
                }
        
                &:hover ~ ${CheckboxTypographyStyled} {
                    cursor: default;
                }
            }
        
            &:checked {
                & ~ ${CheckboxTypographyStyled} {
                    color: ${LIGHT_THEME.primary};
                }
        
                body:not(.pointer-events) &:focus {
                    & ~ ${CheckboxTypographyStyled} {
                        color: ${LIGHT_THEME.primary};
                    }
                }
            }
        `
})

const mdStyle = css`
`

const smStyle = css``

const dynamicSize = (props) => {
    switch (props.size) {
        case 'md':
            return mdStyle
        case 'sm':
            return smStyle
        default:
    }
    return null
}

export const CheckboxWrapperStyled = styled.label`
    display: inline-flex;
    position: relative;
    margin: 0 0 0 -12px;
    border: 1px dotted ${LIGHT_THEME.noColor};
    border-radius: ${xsBorderRadius};
    cursor: auto;
    user-select: none;

    body:not(.pointer-events) &:focus-within {
        border-color: ${LIGHT_THEME.primary};
    }

    svg {
        margin: 0 auto;
    }

    ${dynamicSize}
`
