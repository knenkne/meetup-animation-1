import styled from '@emotion/styled'
import { IconLoader } from '@sbol/design-system/core/icon'

import { isDarkTheme } from '../theme-wrapper/theme-colors'

const MONO = 'mono'
const GRAY = 'gray'

export const typeStyles = (type, themeColor, { theme }) => {
    switch (type) {
        case MONO:
            return `               
                svg {
                    fill: ${theme.monoIconColor};
                }
            `
        case GRAY:
            return `
                ${isDarkTheme(themeColor) && `
                    svg {
                        opacity: 0.47;
                    }
                `}
            `
        default:
            return ''
    }
}

export const ThemedIconStyled = styled(IconLoader)`
    ${({ type, themeColor, ...additional }) => typeStyles(type, themeColor, additional)}
`
