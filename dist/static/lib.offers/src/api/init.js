import { getFeatureOption } from '@sbol/lib.app'

import { BASE_URL, INIT_URL, CHANNEL } from '../constants'

import { cmsAxios } from './axios'

export const init = (app) => {
    const option = getFeatureOption(app, 'withProducts', process.env.PKG_ID) || ''
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
