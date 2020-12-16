import _ from 'lodash'
import React from 'react'
import styled from '@emotion/styled'
import { css } from '@emotion/core'

import { focusStyles } from '../../../style-constants'
import { ComponentWrapper } from '../../utils/component-wrapper'
import { colors } from '../../theme-wrapper/theme-colors'
import { READY } from '../../utils/constants'
import { NotificationsStyled } from '../single-product-icon/product-icon-notification/notification.styles'

export const linkStatuses = (theme) => `
        &:hover {
            background: ${theme.backgroundProductWrapperOnHover};
            ${NotificationsStyled} {
                background: ${theme.backgroundProductWrapperOnHover};
            }
        }
        
        &:active {
            background: ${theme.backgroundProductWrapperOnActive};
            ${NotificationsStyled} {
                background: ${theme.backgroundProductWrapperOnActive};
                background: ${theme.backgroundProductWrapperOnActive};
            }
        }  
        
        ${focusStyles(theme)}
`

export const SingleProductLinkStyled = styled((props) => <ComponentWrapper {..._.omit(props, 'iconStyle')} />)`
    display: flex;
    align-items: flex-start;
    padding: 8px 12px;
    text-decoration: none;
    border: solid 1px ${colors.noColor};
    outline: 0;
    
    ${({ withUpdate }) => withUpdate && `
        padding-bottom: 7px;
    `}        

    ${({ theme }) => css`
        &[href], &[button] {
           ${linkStatuses(theme)}
        }
    `}

    ${({ active, theme }) => active && `
         &[href], &[button] {
             background: ${theme.backgroundProductWrapperOnActive};
             ${NotificationsStyled} {
                background: ${theme.backgroundProductWrapperOnActive};
             }
             &:hover {
                background: ${theme.backgroundProductWrapperOnHoverOnActive};
                ${NotificationsStyled} {
                    background: ${theme.backgroundProductWrapperOnHoverOnActive};
                }
             }
         }
    `}
    
    ${({ notification }) => notification === READY && `
        &::after {
            content: '';
            width: 4px;
            position: absolute;
            right: 0;
            top: 0;
            height: 100%;
            background: ${colors.green6};
        }
    `}
`
