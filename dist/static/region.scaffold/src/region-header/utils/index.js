import { getConfigValue } from '@sbol/lib.app'

export const isSbolPro = getConfigValue('isSbolPro')
export const isErib = getConfigValue('isErib')

export const eribUrl = isErib
    ? window.location.origin
    : getConfigValue('erib.url', '')
export const plUrl = isErib ? getConfigValue('pl.url') : ''
