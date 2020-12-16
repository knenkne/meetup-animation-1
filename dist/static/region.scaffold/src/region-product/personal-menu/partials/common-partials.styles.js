import { css } from '@emotion/core'

import { colors } from '../theme-wrapper/theme-colors'
import {
    WARNING_TEXT,
    SUCCESS_TEXT,
    REFETCH_TEXT
} from '../../style-constants'

export const warningTextStyle = css`
  color: ${colors.orange6};
`

export const successTextStyle = css`
  color: ${colors.green6};
`

export const refetchTextStyle = css`
    text-overflow: initial;
    white-space: normal;
`

export const getTextStyle = (styleName) => {
    switch (styleName) {
        case WARNING_TEXT:
            return warningTextStyle
        case SUCCESS_TEXT:
            return successTextStyle
        case REFETCH_TEXT:
            return refetchTextStyle
        default:
            return ''
    }
}
