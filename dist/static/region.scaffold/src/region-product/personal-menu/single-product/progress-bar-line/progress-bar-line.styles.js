import styled from '@emotion/styled'
import { css } from '@emotion/core'

import { colors } from '../../theme-wrapper/theme-colors'

export const ProgressBarLineStyled = styled.div`
        height: 2px;
        width: 100%;
        border-radius: 100px;
        background-color: rgba(137, 150, 169, 0.3);
        margin: 10px 0;
        overflow: hidden;
`

export const ProgressBarValueStyled = styled.span`
        height: 100%;
        display: block;
        background-color: ${colors.white};
        
        ${({ progressWidth }) => progressWidth && css`
            width: ${progressWidth};
        `}
        
        ${({ progressColor }) => progressColor && css`
            background-color: ${progressColor};
        `}
`
