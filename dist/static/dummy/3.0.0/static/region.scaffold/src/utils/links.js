import { getConfigValue } from '@sbol/lib.app'

const isErib = getConfigValue('isErib')
export const plUrl = isErib ? getConfigValue('pl.url') : ''

export const baseClientUrl = getConfigValue('base.client.url', '')

export const calcPlUrl = (path) => {
    if (plUrl) {
        return `${plUrl}${baseClientUrl}${path}`
    }

    return path
}
