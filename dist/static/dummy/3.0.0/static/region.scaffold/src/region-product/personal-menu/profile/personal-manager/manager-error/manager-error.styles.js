import styled from '@emotion/styled'

import { ContentRow } from '../../../partials/content-row'

export const ErrorStyled = styled.div`
    display: flex;
    justify-content: space-between;
`

export const RefetchStyled = styled.button`
    background: none;
    padding: 0;
    margin-top: 40px;
    cursor: pointer;
    text-align: left;
    
    ${({ theme }) => `
        .repaint {
            fill: ${theme.mainFontColor}
        }
    `}
`

export const RefetchTextStyled = styled.span`
    font-size: 14px;
    font-weight: 600;
    letter-spacing: -0.3px;
    line-height: 16px;
    vertical-align: middle;
    margin-left: 6px;
    
    ${({ theme }) => `
        color: ${theme.mainFontColor}
    `}
`

export const ErrorTextStyled = styled(ContentRow)`
    flex: 0 0 165px;
`
