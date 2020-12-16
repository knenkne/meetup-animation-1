import { log } from '@sbol/lib.app'

import { FEEDBACK } from '../constants'

import { setFeedback, sendPackage } from './set-feedback'
import { getParamsFromLocation } from './url'

// Показ
const shown = async (feedback) => {
    await setFeedback(feedback, FEEDBACK.shown)
    log.info('Был добавлен отклик shown.')
}

// Отказ
const close = async (feedback, detail) => {
    await setFeedback(feedback, FEEDBACK.close, detail)
    log.info('Был добавлен отклик close. Отправка пакета.')
    sendPackage()
}

// Презентация
const started = async (feedback) => {
    await setFeedback(feedback, FEEDBACK.started)
    log.info('Был добавлен отклик started.')
}

// Начало оформления
const opened = async (feedback) => {
    await setFeedback(feedback || getParamsFromLocation(), FEEDBACK.opened)
    log.info('Был добавлен отклик opened. Отправка пакета.')
    sendPackage()
}

// Завершение
const done = async (feedback) => {
    await setFeedback(feedback || getParamsFromLocation(), FEEDBACK.done)
    log.info('Был добавлен отклик done. Отправка пакета.')
    sendPackage()
}

export const feedback = {
    shown,
    started,
    opened,
    close,
    done
}
