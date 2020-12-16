import i18next from 'i18next'

i18next.loadNamespaces('lib.creditability')

export { CapacityInfo } from './info'
export { CapacityScale } from './scale'
export { CapacityHellScale } from './hellscale'
export { CapacityProduct } from './product'
export { calculatePercents, AnalyticEvent, COLORS, CHANCES } from './utils'
