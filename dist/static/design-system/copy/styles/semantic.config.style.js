import { gray3, gray5, gray9, orange5 } from './colors.config.style'

/* INPUT */
/* WIDTH */
export const commonBorderWidth = '1px'
export const focusShadowWidth = '1px'
export const menuShadowWidth = '2px'

/* STYLE */
export const commonBorderStyle = 'solid'
export const readonlyBorderStyle = 'dashed'

/* COLOR */
export const commonBorderColor = `${gray3}`
export const hoverBorderColor = `${gray5}`
export const focusBorderColor = `${gray9}`
export const errorBorderColor = `${orange5}`

/* COMMON */
/* Сделаное через box-shadow для плавного перехода */
export const inputBorder = `${commonBorderWidth} ${commonBorderStyle} ${commonBorderColor}`
export const inputFocusBorder = `inset 0 0 0 ${focusShadowWidth} ${focusBorderColor}`
export const listFocusBorder = `inset 0 0 0 ${menuShadowWidth} ${focusBorderColor}`

/* ERROR */
export const inputFocusErrorBorder = `inset 0 0 0 ${focusShadowWidth} ${errorBorderColor}`

/* READONLY */
export const inputReadonlyBorder = `${commonBorderWidth} ${readonlyBorderStyle} ${hoverBorderColor}`

