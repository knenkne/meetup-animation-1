import styled from '@emotion/styled'

import { getTextStyle } from '../common-partials.styles'

export const ValueStyled = styled.span`
    margin-left: auto;
    flex: 1 0 auto;
    text-align: right;
    
    ${({ textStyle }) => getTextStyle(textStyle)}
`
