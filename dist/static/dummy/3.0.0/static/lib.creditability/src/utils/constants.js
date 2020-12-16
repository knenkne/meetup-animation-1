import { mapValues } from 'lodash'

import { toRGBString } from './value'

export const CHANCES = {
    HIGH: 'high',
    MEDIUM: 'medium',
    LOW: 'low'
}

export const RAW_COLORS = {
    [CHANCES.HIGH]: {
        color: { r: 8, g: 166, b: 82 },
        background: { r: 227, g: 249, b: 229 }
    },
    [CHANCES.MEDIUM]: {
        color: { r: 255, g: 204, b: 0 },
        background: { r: 255, g: 249, b: 229 }
    },
    [CHANCES.LOW]: {
        color: { r: 204, g: 0, b: 0 },
        background: { r: 255, g: 227, b: 227 }
    }
}

export const COLORS = mapValues(RAW_COLORS, (colors) => mapValues(colors, toRGBString))
