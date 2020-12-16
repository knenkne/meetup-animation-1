import { getConfigValue } from '@sbol/lib.app'

export const BASE_URL = getConfigValue('pfm.block.root.url', '/sbtsbol/PhizPFM/api')

export const GET_URL = '/content-broker/content'
export const INIT_URL = '/content-broker/init'
export const PUT_URL = `${GET_URL}/feedbacks`

export const DEFAULT_TIMEOUT = 30000
export const TIMEOUT = getConfigValue('offers.feedback.timeout', DEFAULT_TIMEOUT)

const MAX_OFFERS_SBOL_PRO = 30
const MAX_OFFERS_SBOL_WEB = 5

export const IS_SBOL_PRO = getConfigValue('isSbolPro', false)
export const MAX_OFFERS = IS_SBOL_PRO
    ? getConfigValue('offers.max.offers.pro', MAX_OFFERS_SBOL_PRO)
    : getConfigValue('offers.max.offers', MAX_OFFERS_SBOL_WEB)

export const DEFAULT_PLACE = IS_SBOL_PRO ? 'webCatalogPro' : 'webCatalog'
export const CHANNEL = IS_SBOL_PRO ? 'webpro' : 'web'
export const CHANNEL_CASE = IS_SBOL_PRO ? 'webPro' : 'web'

export const FEEDBACK = {
    shown: 'shown',
    close: 'close',
    started: 'started',
    opened: 'opened',
    done: 'done'
}

export const FEEDBACK_DETAILS = getConfigValue(
    'offers.close.details',
    'intrusive,nonInterested,error'
).split(',')
