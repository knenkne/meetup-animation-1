/* eslint-disable no-underscore-dangle, comment: private fields */
import { trim } from 'lodash'
import { log } from '@sbol/lib.app'
import { analytics } from '@sbol/lib.analytics'

const REPLACE_REGEX = /{([^{}]+)}/g
const MD_CLEAN_REGEX = /\[(.+?)\]\(.+?\)/g
const ESCAPE_REGEX = /[^\wА-ЯЁа-яё ./-]/g
const SLASH_REGEX = /\/+/g

/**
 * Класс-builder событий аналитики.
 * Включает механизм формирования описания события из шаблона вида '{0}{1}' или '{option1}{option2}',
 * подстановка происходит из options, которые могут быть массивом или объектом.
 */
export class AnalyticEvent {

    static replacer = (values) => (match, index) => values[index] || ''

    constructor (application, action, label, options = {}) {
        this._application = application
        this._action = action
        this._label = label
        this._options = options
    }

    formatLabel () {
        return trim(this._label
            .replace(REPLACE_REGEX, AnalyticEvent.replacer(this._options))
            .replace(MD_CLEAN_REGEX, '$1')
            .replace(ESCAPE_REGEX, '')
            .replace(SLASH_REGEX, '/'),
        '/')
    }

    prepare () {
        return {
            application: this._application,
            action: this._action,
            label: this.formatLabel()
        }
    }

    track () {
        const preparedEvent = this.prepare()
        analytics.event(preparedEvent).then(() => {
            log.debug('Analytic send', preparedEvent)
        }).catch((error) => {
            log.error('Analytic sending error', error)
        })
    }
}
