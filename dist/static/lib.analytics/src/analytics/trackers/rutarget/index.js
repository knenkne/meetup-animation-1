import { Tracker } from '../tracker'
import { transliterate, EVENT_TYPES } from '../../utils'

export class RutargetTracker extends Tracker {
    static src = 'https://cdn.rutarget.ru/static/tag/tag.js'

    static preflight = () => {
        window._rtgParams = { // eslint-disable-line no-underscore-dangle, comment: вендоры не наши
            rtgNoSync: true,
            rtgSyncFrame: false
        }
    }

    register () {
        this.trackerName = 'rutarget'
        window._rutarget = window._rutarget || [] // eslint-disable-line no-underscore-dangle, comment: вендоры не наши
    }

    event (eventType, options = {}, resolveTracker = () => {}) {
        const counter = window._rutarget // eslint-disable-line no-underscore-dangle, comment: вендоры не наши

        switch (eventType) {
            case EVENT_TYPES.transition: {
                counter.push(...options.modifier([{
                    event: 'otherPage',
                    __title: options.title,
                    __location: `https://online.sberbank.ru/${Tracker.cleanUpParamsFromUrl(options.url).replace(/^\//, '')}`
                }], this.trackerName, this.id))
                resolveTracker()
                break
            }
            case EVENT_TYPES.event:
            case EVENT_TYPES.stage: {
                counter.push(...options.modifier([{
                    event: 'otherPage',
                    __title: `${options.action}/${options.label}`,
                    __location: `https://online.sberbank.ru/${transliterate(options.application)}`
                }], this.trackerName, this.id))
                resolveTracker()
                break
            }
            case EVENT_TYPES.finish: {
                counter.push(...options.modifier([{
                    event: 'thankYou',
                    conv_id: transliterate(`${options.application}/${options.action}/${options.label}`), // eslint-disable-line camelcase, comment: вендоры не наши
                    __location: `https://online.sberbank.ru/${transliterate(options.application)}`
                }], this.trackerName, this.id))
                resolveTracker()
                break
            }
            case EVENT_TYPES.private:
                resolveTracker()
                break

            default: {
                throw new Error('Не определено событие')
            }
        }
    }
}
