import styled from '@emotion/styled'

import { focusStyles } from '../../../style-constants'
import { profileLineOnHover } from '../profile.styles'

export const ProfileNameStyled = styled.a`
    font-size: 16px;
    font-weight: 600;
    line-height: 1.4;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    max-width: 100%;
    padding: 0 4px;
    text-decoration: none;
    ${profileLineOnHover}
    ${({ theme }) => `
        ${focusStyles(theme)}
        color: ${theme.mainFontColor};
    `}
`
