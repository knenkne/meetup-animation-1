import _ from 'lodash'
import React from 'react'
import styled from '@emotion/styled'
import { css } from '@emotion/core'

import { ComponentWrapper } from '../../utils/component-wrapper'

export const ProfileLinkStyled = styled((props) => <ComponentWrapper {..._.omit(props, 'isVisualRatingOpened')} />)`
    display: flex;
    width: 40px;
    height: 40px;
    border-radius: 50%;
    align-items: center;
    justify-content: center;
    overflow: hidden;
    position: relative;
    
    ${({ theme }) => css`
        
        background-color: ${theme.profileLink};
        
        &:hover:not(:focus) {
            svg {
                opacity: 0.45;
            }
        }
        
        &:focus {
            outline: 0;
            box-shadow: 0 0 0 1px ${theme.outline};
        }
        
        &:active {
            background-color: ${theme.profileLinkActive};
        }
    `}
    
    ${({ disabled }) => disabled && `
        pointer-events: none;
        svg {
            opacity: 0.8;
        }
    `}
    
    ${({ main }) => main && css`
        width: 64px;
        height: 64px;
        margin: 0 24px;
        svg {
            height: 64px;
            width: 64px;
        }
    `}
`
export const ProfileIconStyled = styled.span`
    line-height: 1;
    display: inline;
    font-size: 0;
    img {
        width: 100%;
        border-radius: 50%;
    }
`
