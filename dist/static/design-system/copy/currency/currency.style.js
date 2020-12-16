import styled from '@emotion/styled'
import { css } from '@emotion/core'

export const CurrencyStyled = styled.span`
    ${({ isSymbol }) => isSymbol && css`
        display: inline-block;
        font-size: 1em;
    `}
`
