export const calculatePercents = (total, used) => Math.ceil(used / total * 100 || 0)
export const toRGBString = (color) => `rgb(${color.r},${color.g},${color.b})`
