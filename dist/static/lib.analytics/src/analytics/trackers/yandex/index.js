import { Tracker } from '../tracker'
import { transliterate, pathToObject, EVENT_TYPES } from '../../utils'

const cbStorage = 'yandex_metrika_callbacks'

const safeCallbackInvoke = (track, cb) => {
    if (track) {
        cb() // eslint-disable-line callback-return, comment: здесь нет нужды возвращать результат
    } else {
        window[cbStorage] = window[cbStorage] || []
        window[cbStorage].push(cb)
    }
}

export class YandexTracker extends Tracker {
    static src = 'https://mc.yandex.ru/metrika/watch.js'

    initialCallback () {
        const metric = new window.Ya.Metrika({ id: this.id })
        metric.setUserID(this.userId)
        this.track = metric
    }

    register () {
        this.trackerName = 'yandex'

        if (window.Ya && window.Ya.Metrika) {
            this.initialCallback()
        } else {
            safeCallbackInvoke(this.track, this.initialCallback.bind(this))
        }
    }

    event (eventType, options = {}, resolveTracker = () => {}) {
        switch (eventType) {
            case EVENT_TYPES.transition: {
                safeCallbackInvoke(this.track, () => {
                    this.track.hit(...options.modifier([Tracker.cleanUpParamsFromUrl(options.url), {
                        title: options.title,
                        callback: resolveTracker
                    }], this.trackerName, this.id))
                })
                break
            }
            case EVENT_TYPES.event:
            case EVENT_TYPES.stage:
            case EVENT_TYPES.finish: {
                safeCallbackInvoke(this.track, () => {
                    this.track.reachGoal(...options.modifier([
                        transliterate(`${options.application}/${options.action}/${options.label}`),
                        pathToObject(`${options.channel}/${options.application}/${options.action}/${options.label}`),
                        resolveTracker
                    ], this.trackerName, this.id))
                })
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
