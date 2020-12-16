import styled from '@emotion/styled'
import { Link } from '@sbol/lib.app'
import { IconLoader } from '@sbol/design-system/core/icon'

import { focusStyles, EDGE_MEDIA_HACK } from '../../../style-constants'
import { ContentRowStyled } from '../../partials/content-row/content-row.styles'

export const BannerStyled = styled.span`
    display: flex;
    align-items: center;
    width: 100%;
    ${({ theme }) => `
        background: ${theme.fixedLinkBg};
    `}
`

export const BannerInnerStyled = styled(Link)`
    flex: 1 0 auto;
    display: block;
    padding: 8px;
    font-weight: 600;
    ${({ theme }) => `
        ${focusStyles({ outline: theme.fixedLinkColor })}
        &:hover {
            background-color: ${theme.fixedLinkHover};
        }
        &:active {
            background-color: ${theme.fixedLinkHover};
        }
    `}
    
    svg {
        width: 36px;
        height: 36px;
    }
    
    /* fix for Edge */
    ${EDGE_MEDIA_HACK} {
        position: fixed;
    }
`

export const BannerInfoStyled = styled(ContentRowStyled)`
    flex: 1 0 0;
    flex-direction: column;
    display: inline-block;
    vertical-align: middle;
    line-height: 36px;
    ${({ theme }) => `
        color: ${theme.fixedLinkColor};
    `}
    
`

export const BannerIconWrapperStyled = styled.div`
    margin-right: 10px;
    position: relative;
    display: inline-block;
    vertical-align: middle;
    min-height: 36px;
    min-width: 36px;
`

export const BannerIconStyled = styled(IconLoader)`
  ${({ theme }) => `
       svg {
           fill: ${theme.fixedLinkColor}
       }
  `}
`
