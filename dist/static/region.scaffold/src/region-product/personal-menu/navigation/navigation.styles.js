import styled from '@emotion/styled'
import { mediaSm } from '@sbol/design-system/core/styles/media.config.style'

export const NavigationStyled = styled.div`
    display: none;
    justify-content: space-between;
    margin: 24px 24px 8px;
    align-items: center;
    
    ${mediaSm} {
        display: flex;
        min-height: 24px;
    }
    
    ${({ theme }) => `
        svg {
            fill: ${theme.mainFontColor};
        }  
    `}
`

export const CloseStyled = styled.button`
    background-color: transparent;
    border: none;
    cursor: pointer;
    height: 24px;
    padding: 0;
`

export const LogoffStyled = styled.a`
    text-decoration: none;
`
