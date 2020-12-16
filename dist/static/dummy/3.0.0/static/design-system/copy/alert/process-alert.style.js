import styled from '@emotion/styled'
import { css } from '@emotion/core'

import { xsBorderRadius } from '../styles/radius.config.style'
import {
    hex2rgba,
    green5,
    green0,
    violet0,
    violet5,
    orange0,
    orange5,
    gray0,
    gray5
} from '../styles/colors.config.style'
import { Icon } from '../icon'
import { fontSizeCaptionWeb, letterSpacingWeb, lineHeightCaptionWeb } from '../utils/styles/font-sizes.config.style'
import { textMainColor } from '../utils/styles/semantic-palette.config.style'

const modes = {
    success: {
        background: green0,
        border: green5
    },
    info: {
        background: violet0,
        border: violet5
    },
    error: {
        background: orange0,
        border: orange5
    },
    draft: {
        background: gray0,
        border: gray5
    },
    warning: {
        background: gray0,
        border: gray5
    }
}

const colorAlpha = 25

const dynamicMode = ({ mode }) => {
    const color = modes[mode]
    return css`
        background: ${color.background};
        border: solid 1px ${hex2rgba(color.border, colorAlpha)};
    `
}

export const AlertStyled = styled.div`
    position: relative;
    padding: 16px 16px 16px 60px;
    border-radius: ${xsBorderRadius};
    min-height: 68px;
    
    ${dynamicMode};
`

export const IconStyled = styled(Icon)`
    position: absolute;
    top: 16px;
    left: 16px;
`

export const TitleStyled = styled.h3`
    margin: 0 0 7px;
    font-size: ${fontSizeCaptionWeb};
    line-height: ${lineHeightCaptionWeb};
    letter-spacing: ${letterSpacingWeb};
    color: ${textMainColor};
    font-weight: 600;

    ${({ offset }) => offset && css`margin-top: 8px;`}
`

export const DescriptionStyled = styled.div`
    font-size: ${fontSizeCaptionWeb};
    line-height: ${lineHeightCaptionWeb};
    letter-spacing: ${letterSpacingWeb};
    text-align: left;
    color: ${textMainColor};
    margin: 0;
`
