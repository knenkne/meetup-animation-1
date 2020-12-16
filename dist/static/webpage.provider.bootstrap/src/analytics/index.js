import { getCommonConfigValue, getLauncherConfigValue } from '../configuration/config'

import analyticsMessageQueue from './analytics-message-queue'

const APP = 'onboarding'
const ACTION = (step) => `Шаг ${step}`

let localAnalytics

export const loadAnalytics = async () => {
    const analyticsVersion = getLauncherConfigValue('analytics.version')
        || getCommonConfigValue('analytics.version')

    if (analyticsVersion) {
        try {
            const analyticsModule = await System.import(`lib.analytics/${analyticsVersion}/index.js`)
            localAnalytics = analyticsModule.analytics
        } catch (error) {
            console.error(error, 'Failed loading lib.analytics')
        }
    }
}

export const initAnalytics = async () => {
    const messagesQueue = analyticsMessageQueue.getQueue()
    await loadAnalytics()

    if (localAnalytics) {
        messagesQueue.forEach((message) => {
            localAnalytics.event(message)
        })
    }
}

const sendAnalytics = async (message) => {
    if (localAnalytics) {
        try {
            localAnalytics.event(message)
        } catch (error) {
            console.error(error, 'Failed sending lib.analytics')
        }
    } else {
        analyticsMessageQueue.addElementToQueue(message)
    }
}


export const onOpenClick = (step) =>
    void sendAnalytics({
        application: APP,
        action: ACTION(step),
        label: 'Открытие'
    })

export const onStartUsingClick = (step) =>
    void sendAnalytics({
        application: APP,
        action: ACTION(step),
        label: 'Начать пользоваться_Клик'
    })
