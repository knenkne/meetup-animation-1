import axios from 'axios'
import { getBroker, getConfigValue, log } from '@sbol/lib.app'
import { getManagerId } from '@sbol/lib.offers'

import * as types from '../action-types'
import { parseQuery, parsePromo } from '../utils'

const BASE_URL = getConfigValue('pfm.block.root.url', '/sbtsbol/PhizPFM/api')
const GET_URL = '/content-broker/content'

const IS_SBOL_PRO = getConfigValue('isSbolPro', false)

const CHANNEL = IS_SBOL_PRO ? 'webpro' : 'web'

const axiosInstance = axios.create()

export default () => (dispatch) => {
    const params = parseQuery()

    const isCurrent = (offer) => offer.document?.role === 'promo'
        && String(offer.campaignId) === params.offersCampaignId
        && String(offer.templateId) === params.offersTemplateId

    dispatch({
        type: types.LOADING_START
    })

    if (!params.offersPlaceName) {
        log.error(new Error('Нет параметров для promo-экрана'))

        dispatch({
            type: types.LOADING_STOP
        })

        return null
    }

    return getBroker().subscribe('PROMO:V1:PROMO', async (offer) => {
        try {
            if (getConfigValue('isSbolPro')) {
                await getManagerId()
            }

            if (offer && isCurrent(offer)) {
                dispatch({
                    type: types.INIT_FETCH,
                    contentId: offer.contentId,
                    promo: await parsePromo(offer.document.component)
                })
            } else {
                const response = await axiosInstance({
                    method: 'post',
                    withCredentials: true,
                    url: `${BASE_URL}${GET_URL}`,
                    data: {
                        places: [params.offersPlaceName],
                        channel: CHANNEL,
                        // TODO: добавить версионирование
                        version: '1'
                    }
                })

                const currentPlace = response.data.places
                    .find((place) => place.place === params.offersPlaceName)

                const fetchedOffer = currentPlace?.items?.find(isCurrent)

                if (fetchedOffer) {
                    dispatch({
                        type: types.INIT_FETCH,
                        contentId: fetchedOffer.contentId,
                        promo: await parsePromo(fetchedOffer.document.component, {
                            placeName: params.offersPlaceName,
                            contentId: fetchedOffer.contentId,
                            campaignId: fetchedOffer.campaignId,
                            campaignCode: fetchedOffer.campaignCode,
                            templateId: fetchedOffer.templateId
                        })
                    })
                } else {
                    dispatch({
                        type: types.RESET
                    })
                }
            }
        } catch (error) {
            log.error(error)

            dispatch({
                type: types.RESET
            })
        }

        dispatch({
            type: types.LOADING_STOP
        })
    })
}
