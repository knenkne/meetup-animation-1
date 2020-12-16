import { getConfigValue, getOption } from '@sbol/lib.app/src/config'

const getLauncherOrMiddleOption = (launcherName, middleName, defaultValue) => {
    const option = getOption(launcherName, process.env.PKG_ID)
    if (option === void 0) {
        return getConfigValue(middleName, defaultValue)
    }

    return option
}

export const BASE_URL = getConfigValue('pfm.block.root.url', '/sbtsbol/PhizPFM/api')

export const GET_URL = '/content-broker/content'
export const INIT_URL = '/content-broker/init'
export const PUT_URL = `${GET_URL}/feedbacks`

export const DEFAULT_TIMEOUT = 30000
export const TIMEOUT = parseInt(getLauncherOrMiddleOption('offers.feedback.timeout', 'offers.feedback.timeout', DEFAULT_TIMEOUT), 10)

const MAX_OFFERS_SBOL_PRO = 30
const MAX_OFFERS_SBOL_WEB = 5

export const IS_SBOL_PRO = getConfigValue('isSbolPro', false)
export const MAX_OFFERS = IS_SBOL_PRO
    ? getLauncherOrMiddleOption('max.offers', 'offers.max.offers.pro', MAX_OFFERS_SBOL_PRO)
    : getLauncherOrMiddleOption('max.offers', 'offers.max.offers', MAX_OFFERS_SBOL_WEB)

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

export const FEEDBACK_DETAILS = getLauncherOrMiddleOption(
    'close.details',
    'offers.close.details',
    'intrusive,nonInterested,error'
).split(',')

export const DEFAULT_AUTO_TRANSITION = 5000
export const AUTO_TRANSITION = parseInt(getLauncherOrMiddleOption(
    'auto.transition.time',
    'offers.auto.transition.time',
    DEFAULT_AUTO_TRANSITION
), 10)
