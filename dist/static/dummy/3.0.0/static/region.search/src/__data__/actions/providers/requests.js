import _ from 'lodash'

import { PROVIDERS_SEARCH_COMPLETE, PROVIDERS_SEARCH_FAILED, PROVIDERS_SEARCH_STARTED } from '../../action-types'
import {
    URL_PROVIDERS_HISTORY,
    USER_INPUT_DEBOUNCE_TIMEOUT,
    REQUEST_HEADERS
} from '../../../header/search/constants'
import { unicodeToWin1251UrlEncoded } from '../../../utils'
import { providersMetric } from '../../../header/search/analytics/requests/providers'
import { recordStartDateTime } from '../../../header/search/analytics/requests/utils/duration'
import mApiClientApi from '../../../header/search/__data__/axiosMAPI'
import { createUrlParams } from '../utils/urlParams'

const debouncedProvidersRequest = _.debounce((searchQuery = '', dispatch) => {
    if (!searchQuery) {
        return void 0
    }

    const params = {
        paginationOffset: 0,
        paginationSize: 4,
        search: unicodeToWin1251UrlEncoded(searchQuery)
    }
    const sendDuration = recordStartDateTime(providersMetric, searchQuery)

    dispatch({ type: PROVIDERS_SEARCH_STARTED })

    return mApiClientApi
        .post(`${URL_PROVIDERS_HISTORY}?${createUrlParams(params)}`, {}, REQUEST_HEADERS)
        .then((response) => {
            const providers = _.get(response, 'data.response.payments.payment', [])

            dispatch({
                type: PROVIDERS_SEARCH_COMPLETE,
                providers
            })
            sendDuration(!providers.length)
        })
        .catch(() => {
            dispatch({ type: PROVIDERS_SEARCH_FAILED })
        })
}, USER_INPUT_DEBOUNCE_TIMEOUT)

export const requestProviders = (searchQuery) => (dispatch) =>
    debouncedProvidersRequest(searchQuery, dispatch)
