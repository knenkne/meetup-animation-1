import { getConfigValue as getAppConfigValue } from '@sbol/lib.app/src/config'
import { log } from '@sbol/lib.app/src/log'

import { Tracker } from '../tracker'
import { EVENT_TYPES, getConfigValue } from '../../utils'
import { sberbankAnalytics } from '../../../sberbank-analytics'

import { sendValueToRambler } from './utils'

const DEFAULT_BUFFER = 10
const DEFAULT_API_KEY = '38ab27095c197a3960dda31a837595eb5f3149f4fba55081033ba14b411c2f27'

export class SberbankAnalyticsTracker extends Tracker {
    updateConfig () {
        this.url = getConfigValue('analytics.sberbank.url', '')
        this.buffer = Number(getConfigValue('analytics.sberbank.buffer', DEFAULT_BUFFER))
        this.apiKey = getConfigValue('analytics.sberbank.apikey', DEFAULT_API_KEY)

        sberbankAnalytics.setConfig({
            url: this.url,
            buffer: this.buffer,
        })
        sberbankAnalytics.setMeta({
            apiKey: this.apiKey
        })
    }

    register () {
        this.trackerName = 'sberbankAnalytics'
        this.updateConfig()

        try {
            if (getConfigValue('analytics.sberbank.rampix', false)) {
                sendValueToRambler(sberbankAnalytics.cookie)
            }
        } catch (error) {
            log.error(error)
        }

        sberbankAnalytics.setProfile({
            clientBlock: getAppConfigValue('erib.url', ''),
            hashUserLoginId: this.userId,
            applicationLanguage: document.documentElement.lang,
        })
    }

    prepareProperties = (properties) => {
        if (!properties) {
            return void 0
        }

        return Object.keys(properties).map((key) => ({ key, value: properties[key] }))
    }

    event (eventType, options = {}, resolveTracker = () => {}) {
        if (!this.url) {
            this.updateConfig()
        }

        switch (eventType) {
            case EVENT_TYPES.transition: {
                resolveTracker()
                break
            }
            case EVENT_TYPES.event:
            case EVENT_TYPES.stage:
            case EVENT_TYPES.finish:
            case EVENT_TYPES.private: {
                const args = [{
                    eventCategory: `${options.channel}_${options.application}`,
                    eventAction: options.label,
                    eventType: options.action,
                    value: options.value,
                    properties: this.prepareProperties(options.properties)
                }]

                sberbankAnalytics.push(...options.modifier(args, this.trackerName, this.id))
                resolveTracker()
                break
            }
            default: {
                throw new Error('Не определено событие')
            }
        }
    }
}
