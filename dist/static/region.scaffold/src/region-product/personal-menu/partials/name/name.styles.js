import styled from '@emotion/styled'

import { getTextStyle } from '../common-partials.styles'

export const NameStyled = styled.span`
    margin-right: 8px;
    flex: 1 1 auto;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    
    ${({ textStyle }) => getTextStyle(textStyle)}
`
