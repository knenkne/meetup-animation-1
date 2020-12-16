import { log } from '@sbol/lib.app/src/log'
import _ from 'lodash'
import { analytics } from '@sbol/lib.analytics'

import { BASE_URL, TIMEOUT, PUT_URL, CHANNEL, IS_SBOL_PRO, FEEDBACK } from '../constants'

import { cmsAxios } from './axios'
import { getTimestamp, getUniqueId } from './utils'
import { getManagerId } from './get-manager-id'

const ACTIVE_QUEUE = []
const PASSIVE_QUEUE = []

export const sendPackage = () => {
    if (ACTIVE_QUEUE.length) {
        const activeQueue = ACTIVE_QUEUE.splice(0, ACTIVE_QUEUE.length)

        const data = {
            feedbacks: activeQueue
        }

        log.debug('Отправка данных:', data)

        cmsAxios({
            method: 'post',
            withCredentials: true,
            url: `${BASE_URL}${PUT_URL}`,
            data
        })
            .then(() => {
                PASSIVE_QUEUE.splice(
                    PASSIVE_QUEUE.length,
                    PASSIVE_QUEUE.length,
                    ...activeQueue
                )
            })
            .catch((error) => {
                log.error(error)
                ACTIVE_QUEUE.splice(0, 0, ...activeQueue)
            })
    }
}

// Кидаем пачку любой ценой перед уходом
window.addEventListener('beforeunload', sendPackage)

const isNewFeedback = _.negate(
    (feedback, type) =>
        ACTIVE_QUEUE.find(
            (queueFeedback) =>
                queueFeedback.type === type &&
                getUniqueId(queueFeedback) === getUniqueId(feedback)
        ) ||
        PASSIVE_QUEUE.find(
            (queueFeedback) =>
                queueFeedback.type === type &&
                getUniqueId(queueFeedback) === getUniqueId(feedback)
        )
)

let autoTimeout
export const setFeedback = async (feedback, type, detail) => {
    if (feedback && !_.isEmpty(feedback) && isNewFeedback(feedback, type)) {
        clearTimeout(autoTimeout)

        const item = {
            campaignId: feedback.campaignId,
            campaignCode: feedback.campaignCode,
            contentId: feedback.contentId,
            templateId: feedback.templateId,
            placeName: feedback.placeName,
            type,
            detail,
            time: getTimestamp(),
            application: {
                channel: CHANNEL
            }
        }

        if (IS_SBOL_PRO) {
            const employeeNumber = await getManagerId()

            if (employeeNumber) {
                item.metadata = {
                    employeeNumber
                }
            }
        }

        log.info('Добавление отклика в очередь:', item)
        ACTIVE_QUEUE.push(item)

        const analyticsParams = {
            application: 'region.offers',
            action: feedback.placeName,
            label: `${feedback.title}_${type}${detail ? `/${detail}` : ''}`,
            properties: {
                campaignId: String(feedback.campaignId || ''),
                contentId: String(feedback.contentId || ''),
                templateId: String(feedback.templateId || ''),
                campaignCode: String(feedback.campaignCode || ''),
                position: String(feedback.position || ''),
                last: feedback.last ? 'true' : 'false'
            }
        }

        if (type === FEEDBACK.shown) {
            analytics.private(analyticsParams)
        } else {
            analytics.event(analyticsParams)
        }

        autoTimeout = setTimeout(sendPackage, TIMEOUT)
    }
}
