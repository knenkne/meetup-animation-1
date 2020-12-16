import { CHANCES, RAW_COLORS } from './constants'
import { toRGBString } from './value'

const THRESHOLD = 1.5

const calculatePart = (from, to, distance, part) => Math.round(from[part] + ((to[part] - from[part]) * distance))

const calculateColor = (from, to, distance) => ({
    r: calculatePart(from, to, distance, 'r'),
    g: calculatePart(from, to, distance, 'g'),
    b: calculatePart(from, to, distance, 'b')
})

const getColor = (from, to, distance) => ({
    color: calculateColor(from.color, to.color, distance),
    background: calculateColor(from.background, to.background, distance)
})

const getZone = (used, limits, total) => {
    const hasMedium = Number.isFinite(limits.medium)
    const hasLow = Number.isFinite(limits.low)
    if (hasMedium && used >= limits.medium && ((hasLow && used < limits.low) || !hasLow) && limits.medium < total) {
        return CHANCES.MEDIUM
    }
    if (hasLow && used >= limits.low && limits.low < total) {
        return CHANCES.LOW
    }
    return CHANCES.HIGH
}

const getLimit = (total, used, limits = {}) => {
    const threshold = total / 100 * THRESHOLD
    const left = Math.max(used - threshold, 0)
    const right = Math.min(used + threshold, total)
    const from = getZone(left, limits, total)
    const to = getZone(right, limits, total)
    const distance = (right - used) / (right - left)
    return { from: RAW_COLORS[from], to: RAW_COLORS[to], distance }
}

export const getColors = (total, used, limits) => {
    const { from, to, distance } = getLimit(total, used, limits)
    const color = getColor(from, to, distance)

    return {
        color: toRGBString(color.color),
        background: toRGBString(color.background)
    }
}

export const getChance = (total, used, limits = {}) => getZone(used, limits, total)
