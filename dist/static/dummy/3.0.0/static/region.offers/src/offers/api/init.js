import { getFeatureOption } from '@sbol/lib.app/src/config'

import { BASE_URL, INIT_URL, CHANNEL } from '../constants'

import { cmsAxios } from './axios'

export const init = (app) => {
    const option = getFeatureOption(app, 'withProducts', 'region.offers.config') || ''
    const places = option.split(',')

    places.forEach((place) => {
        if (place) {
            cmsAxios({
                method: 'get',
                withCredentials: true,
                url: `${BASE_URL}${INIT_URL}?channel=${CHANNEL}&place=${place}`
            })
        }
    })
}
