import styled from '@emotion/styled'
import { css } from '@emotion/core'

import {
    fontSizeL,
    lineHeightL,
    fontSizeM,
    lineHeightM,
    fontSizeS,
    lineHeightS,
    letterSpacing,
} from '../styles/font-sizes.config.style'
import * as colors from '../styles/colors.config.style'

const baseX = 4

export const dynamicColor = ({ colorScheme, theme }) => css`
    color: ${colors[colorScheme] || colorScheme || theme.primary}
`

const sizes = {
    sm: {
        fontSize: fontSizeS,
        lineHeight: lineHeightS
    },
    md: {
        fontSize: fontSizeM,
        lineHeight: lineHeightM
    },
    lg: {
        fontSize: fontSizeL,
        lineHeight: lineHeightL
    },
}

const dynamicIndent = (size) => {
    const { lineHeight } = sizes[size] || sizes.md
    const lineHeightNum = Number.parseInt(lineHeight, 10)
    return {
        openspace: {
            marginVertical: `${lineHeightNum}px`
        },
        innerspace: {
            marginVertical: `${lineHeightNum - baseX}px`
        },
        micro: {
            marginVertical: `${lineHeightNum - (2 * baseX)}px`
        },
        nano: {
            marginVertical: `${lineHeightNum - (3 * baseX)}px`
        },
        zero: {
            marginVertical: '0px'
        }
    }
}

const typographyCommonStyled = ({ mode }) => css`
    letter-spacing: ${letterSpacing};
    font-weight: ${mode === 'semibold' ? 600 : 400};
    padding: 0;
`

const dynamicSize = ({ size, indent, last }) => {
    const { fontSize, lineHeight } = sizes[size] || sizes.md
    return css`
       font-size: ${fontSize};
       line-height: ${lineHeight};
       margin-top: ${dynamicIndent(lineHeight)[indent || 'openspace'].marginVertical};
       margin-bottom: ${!last ? dynamicIndent(lineHeight)[indent || 'openspace'].marginVertical : 0};
    `
}

export const TypographyStyled = styled.p(
    typographyCommonStyled,
    dynamicSize,
    dynamicColor
)
