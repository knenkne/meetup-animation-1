import _ from 'lodash'
import { getFeatureValue } from '@sbol/lib.app'

import { URL_DDP, URL_SEARCH_EXAMPLES, REQUEST_HEADERS } from '../../../header/search/constants'
import ddpClientApi from '../../../header/search/__data__/axiosDDP'
import quickSuggestions from '../../../header/assets/quickSuggests.json'
import { quickSuggestionsMetric } from '../../../header/search/analytics/requests/quickSuggestions'
import { recordStartDateTime } from '../../../header/search/analytics/requests/utils/duration'
import { simpleQuickSuggestions } from '../../selectors'

import {
    isLoadingQuickSuggestions,
    isLoadingFailedQuickSuggestions,
    updateQuickSuggestions
} from './suggests'

/**
 * Запрос на получение примеров поиска (https://sbtatlas.sigma.sbrf.ru/wiki/pages/viewpage.action?pageId=1961494112).
 * @param {Function} dispatch - dispatch
 * @param {Function} getState - getState
 * @return {Promise} - Результат запроса
 */
const requestQuickSuggestions = (dispatch, getState) => {
    const quickSuggests = simpleQuickSuggestions(getState())

    dispatch(isLoadingQuickSuggestions())

    if (quickSuggests.length) {
        const sortedQuickSuggests = quickSuggests.sort(() => 0.5 - Math.random())

        dispatch(updateQuickSuggestions([...sortedQuickSuggests]))

        return Promise.resolve(sortedQuickSuggests)
    }

    const requestData = getFeatureValue('quickSuggestionsFromDDP', 'region.search')

    if (requestData && requestData !== 'false') {
        const sendDuration = recordStartDateTime(quickSuggestionsMetric, '')

        return ddpClientApi
            .get(`${URL_DDP}${URL_SEARCH_EXAMPLES}`, REQUEST_HEADERS)
            .then((response) => {
                const examples = _.get(response, 'data.examples', [])

                dispatch(updateQuickSuggestions(examples))
                sendDuration(!examples.length)

                return examples
            })
            .catch(() => {
                dispatch(updateQuickSuggestions(quickSuggestions.data))
                dispatch(isLoadingFailedQuickSuggestions())

                return quickSuggestions.data
            })
    }

    dispatch(updateQuickSuggestions(quickSuggestions.data))

    return Promise.resolve(quickSuggestions.data)
}

export default {
    requestQuickSuggestions
}
