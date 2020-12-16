import styled from '@emotion/styled'

export const ThemedLayoutStyled = styled.div`
    ${({ theme }) => `
        background: ${theme.background};
    `}
`
