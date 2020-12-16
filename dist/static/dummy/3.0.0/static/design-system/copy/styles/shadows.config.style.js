import { green4, violet4, blue4, teal4, skyBlue4, aqua4, yellow5, coolGray5, hex2rgba } from './colors.config.style'

export const commonShadow = '0 4px 8px 0 rgba(45, 73, 88, 0.1)'
export const commonShadowHover = '0 12px 24px 0 rgba(45, 73, 88, 0.15)'

const shadowAlpha = 42

/* COLORED SHADOWS */
export const generalShadow = `0 7px 17px 0 ${hex2rgba(green4, shadowAlpha)}`
export const purpleShadow = `0 7px 17px 0 ${hex2rgba(violet4, shadowAlpha)}`
export const blueShadow = `0 7px 17px 0 ${hex2rgba(blue4, shadowAlpha)}`
export const greenShadow = `0 7px 17px 0 ${hex2rgba(teal4, shadowAlpha)}`
export const skyBlueShadow = `0 7px 17px 0 ${hex2rgba(skyBlue4, shadowAlpha)}`
export const aquaShadow = `0 7px 17px 0 ${hex2rgba(aqua4, shadowAlpha)}`
export const goldShadow = `0 7px 17px 0 ${hex2rgba(yellow5, shadowAlpha)}`
export const blackShadow = `0 7px 17px 0 ${hex2rgba(coolGray5, shadowAlpha)}`
