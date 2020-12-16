import { css } from '@emotion/core'

import { colors } from '../../src/region-product/personal-menu/theme-wrapper/theme-colors'

export const global = css`
    body.pointer-events .themed-layout &:focus {
        border-color: ${colors.noColor};
        box-shadow: 0 0 0 0 ${colors.noColor};
    }
`
