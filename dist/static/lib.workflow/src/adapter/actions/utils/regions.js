import { getFeature } from '@sbol/lib.app'

const swapKeyValue = (obj) => Object.entries(obj).reduce((acc, val) => ({ ...acc, [val?.[1]]: val?.[0] }), {}) || {}

export const getRegionsMapFromLauncher = (mainProcessId) => swapKeyValue(getFeature('subFlowRegions', mainProcessId)?.options || {})

export const isRegion = (url, mainProcessId) => Boolean(getRegionsMapFromLauncher(mainProcessId)?.[url])

export const getRegionName = (url, mainProcessId) => getRegionsMapFromLauncher(mainProcessId)?.[url]
