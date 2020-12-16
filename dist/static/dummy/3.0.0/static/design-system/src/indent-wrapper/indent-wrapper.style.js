import styled from '@emotion/styled'
import { css } from '@emotion/core'

import {
    lineHeightL,
    lineHeightM,
    lineHeightS,
} from '../styles/font-sizes.config.style'
import { baseX } from '../styles/semantic.config.style'

const sizes = {
    sm: {
        lineHeight: lineHeightS
    },
    md: {
        lineHeight: lineHeightM
    },
    lg: {
        lineHeight: lineHeightL
    },
}

const dynamicIndent = (size) => {
    const lineHeightSrt = sizes[size].lineHeight
    const lineHeight = Number.parseInt(lineHeightSrt, 10)
    return {
        openspace: {
            margin: `${lineHeight}px`
        },
        innerspace: {
            margin: `${lineHeight - baseX}px`
        },
        micro: {
            margin: `${lineHeight - (2 * baseX)}px`
        },
        nano: {
            margin: `${lineHeight - (3 * baseX)}px`
        },
        zero: {
            margin: '0px'
        }
    }
}

export const IndentWrapper = styled.div`
    margin-top: ${({ size, vertical }) => dynamicIndent(size || 'md')[vertical || 'innerspace'].margin};
    margin-bottom: ${({ size, vertical }) => dynamicIndent(size || 'md')[vertical || 'innerspace'].margin};
    margin-left: ${({ size, horizontal }) => dynamicIndent(size || 'md')[horizontal || 'zero'].margin};
    margin-right: ${({ size, horizontal }) => dynamicIndent(size || 'md')[horizontal || 'zero'].margin};
    display: block;
`
