import styled from '@emotion/styled'

export const ErrorBgStyled = styled.div`
    padding: 32px 30px;
    margin: 40px 0 100%;
    flex: 1 0 0;
    
    ${({ theme }) => `
        background-color: ${theme.commonErrorBg};
    `}
`

export const DescriptionStyled = styled.p`
    margin-bottom: 30px;
    font-size: 16px;
    line-height: 1.5;
    letter-spacing: -0.3px;
    
    ${({ theme }) => `
        color: ${theme.additionalFontColor};
    `}
`

export const ErrorTitleStyled = styled.h3`
    font-size: 24px;
    font-weight: 600;
    line-height: 1.17;
    letter-spacing: -0.5px;
    margin: 0;
    ${({ theme }) => `
        color: ${theme.mainFontColor};
    `}
`
