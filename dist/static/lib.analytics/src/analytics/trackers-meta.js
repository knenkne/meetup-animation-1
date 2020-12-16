import { getConfigValue as getAppConfigValue } from '@sbol/lib.app/src/config'

import { getConfigValue } from './utils'
import { YandexTracker } from './trackers/yandex'
import { GoogleTracker } from './trackers/google'
import { RutargetTracker } from './trackers/rutarget'
import { SberbankAnalyticsTracker } from './trackers/sberbank-analytics'

export const trackersMeta = {
    trackers: [
        {
            ids: getConfigValue('analytics.yandex.id'),
            level: getConfigValue('analytics.yandex.level'),
            builder: YandexTracker
        },
        {
            ids: getConfigValue('analytics.google.id'),
            level: getConfigValue('analytics.google.level'),
            builder: GoogleTracker
        },
        {
            ids: getConfigValue('analytics.segmento.id', 'SEGMENTO'),
            level: getConfigValue('analytics.segmento.level'),
            builder: RutargetTracker
        },
        {
            ids: getConfigValue('analytics.sberbank.id', 'SBERBANK'),
            level: getConfigValue('analytics.sberbank.level'),
            builder: SberbankAnalyticsTracker
        }
    ],
    userId: getAppConfigValue('user.id')
}
