import _ from 'lodash'

import { Tracker } from '../tracker'
import { EVENT_TYPES } from '../../utils'

const firstLetterUpperCase = (word) => `${word.substring(0, 1).toUpperCase()}${word.substring(1).toLowerCase()}`

const splitRegExp = /[^a-zA-Z0-9а-яА-ЯёЁ]+/
const camelCase = (str) => str
    .split(splitRegExp)
    .map((word, index) => {
        if (index) {
            return firstLetterUpperCase(word)
        }

        return word.toLowerCase()
    })
    .join('')

const gaStack = (...args) => {
    window.ga.q.push(args)
}

function getCookieYm (name) {
    const match = document.cookie.match(new RegExp(`(^| )${name}=([^;]+)`))
    if (match) {
        return match[2]
    }

    return null
}

function sendCookiesYm () {
    const gaCD21 = getCookieYm('_ym_uid')
    const gaCD24 = getCookieYm('Segmento_UID')

    if (window.ga.getAll && window.ga.getAll()[0]) {
        window.ga('set', 'dimension2', window.ga.getAll()[0].get('clientId'))
    }

    if (gaCD21 != null) {
        window.ga('set', 'dimension21', gaCD21)
    }

    if (gaCD24 != null) {
        window.ga('set', 'dimension24', gaCD24)
    }

    window.ga('send', 'pageview')

}

const sendCookiesYmOnce = _.once(sendCookiesYm)

export class GoogleTracker extends Tracker {
    static src = 'https://www.google-analytics.com/analytics.js'

    constructor (props) {
        super(props)

        const elYm = document.createElement('iframe')

        elYm.src = 'https://cdn.rutarget.ru/static/sharecookie/index.html'
        elYm.width = '1'
        elYm.height = '1'
        elYm.style.display = 'none'

        document.body.appendChild(elYm)

        function handleMessage (event) {
            if (event.origin === 'https://cdn.rutarget.ru' && event.data) {
                document.cookie = `Segmento_UID=${event.data.rtgtCookie}; path=/; expires=Tue, 19 Jan 2038 03:14:07 GMT`
            }

            sendCookiesYmOnce()

        }

        window.addEventListener('message', handleMessage)

        setTimeout(sendCookiesYmOnce, 1000)
    }

    register () {
        this.trackerName = 'google'

        window.GoogleAnalyticsObject = 'ga'
        window.ga = window.ga || gaStack
        window.ga.q = window.ga.q || []

        window.ga('create', {
            trackingId: this.id,
            cookieDomain: 'auto',
            name: camelCase(this.id),
            userId: this.userId,
            flashVersion: void 0,
            dimension1: this.userId
        })
    }

    event (eventType, options = {}, resolveTracker = () => {}) {
        const counter = window.ga

        switch (eventType) {
            case EVENT_TYPES.transition: {
                counter(...options.modifier([`${camelCase(this.id)}.send`, 'pageview', {
                    title: options.title,
                    page: Tracker.cleanUpParamsFromUrl(options.url),
                    userId: this.userId,
                    hitCallback: resolveTracker,
                    dimension1: this.userId
                }], this.trackerName, this.id))
                break
            }
            case EVENT_TYPES.event:
            case EVENT_TYPES.stage:
            case EVENT_TYPES.finish: {
                counter(...options.modifier([`${camelCase(this.id)}.send`, 'event', {
                    eventCategory: `${options.channel}_${options.application}`,
                    eventAction: options.action,
                    eventLabel: options.label,
                    userId: this.userId,
                    hitCallback: resolveTracker,
                    dimension1: this.userId,
                    dimension37: options.version
                }], this.trackerName, this.id))
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
