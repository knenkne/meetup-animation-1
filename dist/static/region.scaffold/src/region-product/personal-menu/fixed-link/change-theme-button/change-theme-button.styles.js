import styled from '@emotion/styled'
import { IconLoader } from '@sbol/design-system/core/icon'

import { focusStyles } from '../../../style-constants'

export const ChangeThemeButtonStyled = styled.span`
    margin-left: 4px;
    ${({ theme }) => `
        background: ${theme.fixedLinkBg};
            border-left: 1px solid ${theme.fixedLinkDivider};
    `}
`

export const ChangeThemeButtonInnerStyled = styled.button`
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    height: 52px;
    width: 52px;
    outline: 0;
    margin-left: 4px;
    background: none;
    ${({ theme }) => `
        ${focusStyles({ outline: theme.fixedLinkColor })}
        &:hover {
            background-color: ${theme.fixedLinkHover};
        }
        &:active {
            background-color: ${theme.fixedLinkHover};
        }
    `}
`

export const ChangeThemeIconStyled = styled(IconLoader)`
  ${({ theme }) => `
       svg {
           fill: ${theme.fixedLinkColor}
       }
  `}
`
