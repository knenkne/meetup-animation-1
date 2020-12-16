import {
    aqua5,
    violet4,
    blue4,
    teal5,
    skyBlue5,
    yellow6,
    orange5,
    gray5,
    coolGray4,
    coolGray3,
    white,
    red5,
    green4,
    gray4
} from '@sbol/design-system/core/styles/colors.config.style'

import { colors } from './personal-menu/theme-wrapper/theme-colors'

export const SLIDE_WIDTH = '320px'
export const COLLAPSED_SLIDE_WIDTH = '64px'

export const IE_MEDIA_HACK = 'screen and (min-width: 0\0)'
export const EDGE_MEDIA_HACK = '@supports (-ms-ime-align:auto)'

/* fix for Safari 10.1+ */
export const SAFARI_10_1_HACK_MEDIA = '@media not all and (min-resolution: .001dpcm)'
export const SAFARI_10_1_HACK_SUPPORTS = '@supports (-webkit-appearance:none)'

export const MOZILLA_HACK = '@-moz-document url-prefix()'

export const focusStyles = ({ outline = 'white' }, customStyles = '') => `
    border: 1px solid ${colors.noColor};
    outline: 0;
    &:focus {
        border-color: ${outline};
        border-radius: 4px;
    }
    ${customStyles}
`
export const styleConstants = {
    slideWidth: SLIDE_WIDTH,
    collapsedSlideWidth: COLLAPSED_SLIDE_WIDTH,
    negativeSlideWidth: `-${SLIDE_WIDTH}`,
    negativeCollapsedSlideWidth: `-${COLLAPSED_SLIDE_WIDTH}`,
    // calc(1px [margin] + 8px [padding top] + 4px [image margin] + 36px [svg height])
    graphTop: '49px',

    // calc(1px [margin] + 12px [padding] + 18px [half svg width])
    graphLeft: '31px',

    // calc (1 [border] + 8 [padding top] + 4px [image margin] )
    graphAdditionalHeight: '12px'
}

export const ACCOUNTS_COLOR = aqua5
export const INVESTMENTS_COLOR = violet4
export const DEPO_COLOR = violet4
export const LOANS_COLOR = blue4
export const TARGETS_COLOR = teal5
export const INSURANCE_COLOR = skyBlue5
export const CARDS_COLOR = '#08a652'

export const ERROR_COLOR = orange5
export const GHOST_COLOR = gray5
export const TECH_BREAK_COLOR = white
export const REFETCH_ICON_COLOR = white
export const ARRESTED_COLOR = red5
export const SUCCESS_COLOR = green4
export const NEUTRAL_COLOR = gray4

export const AURUM_COLOR = yellow6
export const ARGENTUM_COLOR = coolGray4
export const PLATINUM_COLOR = coolGray3
export const PALLADIUM_COLOR = gray5

export const WARNING_TEXT = 'warning-text'
export const SUCCESS_TEXT = 'success-text'
export const ADDITIONAL = 'additional'
export const REFETCH_TEXT = 'refetch-text'
export const ARRESTED = 'arrested'
export const NEED_RQ_DELIVERY = 'need-rq-delivery'
