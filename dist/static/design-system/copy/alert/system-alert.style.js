import styled from '@emotion/styled'
import { css } from '@emotion/core'

import { Icon } from '../icon'
import {
    green6,
    orange5,
    violet5
} from '../styles/colors.config.style'
import { mediaSm } from '../styles/media.config.style'
import { fontSizeBodyWeb, letterSpacingWeb, lineHeightBodyWeb } from '../utils/styles/font-sizes.config.style'
import { textMainColor } from '../utils/styles/semantic-palette.config.style'

const modes = {
    success: {
        border: green6
    },
    info: {
        border: violet5
    },
    error: {
        border: orange5
    }
}

const dynamicMode = ({ mode }) => {
    const color = modes[mode]
    return css`
        border-bottom-color: ${color};
    `
}

export const IconStyled = styled(Icon)`
    position: absolute;
    top: 20px;
    left: 20px;
    
    ${mediaSm} {
        left: auto;
        right: 0;
    }
`

export const TitleStyled = styled.h3`
    margin: 0 0 8px;
    font-size: ${fontSizeBodyWeb};
    line-height: ${lineHeightBodyWeb};
    letter-spacing: ${letterSpacingWeb};
    font-weight: bold;
    color: ${textMainColor};
`

export const AlertStyled = styled.div`
    position: relative;
    padding: 20px 64px 40px;
    border-bottom: solid 4px transparent;
    
    ${dynamicMode};
    
    &:not(:last-child) {
        border-bottom: none;
    }
    
    ${mediaSm} {
        padding-left: 0;
        padding-right: 32px;
    }
    
    ${({ onlyTitled }) => onlyTitled && css`
        padding-bottom: 20px;

        ${TitleStyled} {
            margin-top: 8px;
        }
    `}
`
