import { log } from '@sbol/lib.app'

import { BASE_URL, GET_URL, CHANNEL, DEFAULT_PLACE, IS_SBOL_PRO } from '../constants'

import { cmsAxios } from './axios'
import { parser } from './parser'
import { getManagerId } from './get-manager-id'

const getFirst = ([arg]) => arg

export const getOffers = async ({ withProducts = [], contentId, apiVersion, withFallback }) => {
    const data = {
        places: withProducts,
        channel: CHANNEL,
        version: apiVersion
    }

    const requests = [
        cmsAxios({
            method: 'post',
            withCredentials: true,
            url: `${BASE_URL}${GET_URL}`,
            data
        })
    ]

    log.info('Запрос за предложениями клиента')

    if (IS_SBOL_PRO) {
        requests.push(getManagerId())
        log.info('Запрос за табельным номером сотрудника')
    }

    return Promise.all(requests)
        .then(getFirst)
        .then(parser(contentId))
        .then((offers = []) => {
            if (!withProducts.includes(DEFAULT_PLACE) && !offers.length && withFallback) {
                log.info(`Для небазового места показа не найдено предложений. Включен запрос к месту показа ${DEFAULT_PLACE}`)

                return getOffers({
                    withProducts: [DEFAULT_PLACE],
                    contentId,
                    apiVersion
                })
            }

            return offers
        })
}
