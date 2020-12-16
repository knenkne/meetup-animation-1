import styled from '@emotion/styled'

export const SeparatorStyled = styled.hr`
    height: 0;
    overflow: hidden;
    margin: 8px 0 8px 60px;
    padding: 0;
    border-width: 0;
    border-top: 1px solid #3a424a;
    
    ${({ theme }) => `
        border-color: ${theme.productDivider};
    `}
`
