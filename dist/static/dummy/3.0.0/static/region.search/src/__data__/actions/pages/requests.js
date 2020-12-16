import _ from 'lodash'
import { getFeatureValue } from '@sbol/lib.app'

import * as types from '../../action-types'
import {
    URL_PAGES,
    N_GRAM_LENGTH,
    REQUEST_HEADERS
} from '../../../header/search/constants'
import {
    pagesAvailabilitySelector,
    simpleIsLoadedPagesSelector,
    simpleProductsSelector,
    simpleSearchQuerySelector,
    simpleServerDataSelector
} from '../../selectors'
import plMiddleClientApi from '../../../header/search/__data__/axiosPLMiddle'
import { appFunctionsMetric } from '../../../header/search/analytics/requests/appFunctions'
import { recordStartDateTime } from '../../../header/search/analytics/requests/utils/duration'
import { find } from '../../../header/search/utils/levenshtein/findFeatures'
import { filterEmptyPages } from '../../selectors/pages'

const saveResults = (state, data, dispatch) => {
    const useLevenshteinWithFeatures = getFeatureValue('useLevenshteinWithFeatures', 'region.search')
    const query = simpleSearchQuerySelector(state)
    const filteredPages = filterEmptyPages(data, simpleProductsSelector(state), pagesAvailabilitySelector(state))

    if (useLevenshteinWithFeatures && useLevenshteinWithFeatures === 'true' && query.length >= N_GRAM_LENGTH) {
        const serverData = filteredPages.map((item) => ({
            ...item,
            keyWordsArray: item.keyWords.split(', ')
        }))

        find(serverData, query).then((pages) => {
            dispatch({
                type: types.PAGES_SEARCH_COMPLETE,
                pages: pages.sort((a, b) => a.score.distance - b.score.distance),
                serverData: data
            })
        })
    } else {
        dispatch({
            type: types.PAGES_SEARCH_COMPLETE,
            pages: filteredPages,
            serverData: data
        })
    }
}

const fetchPages = () => (dispatch, getState) => {
    const state = getState()
    const query = simpleSearchQuerySelector(state)
    const sendDuration = recordStartDateTime(appFunctionsMetric, query)

    dispatch({ type: types.PAGES_SEARCH_STARTED })
    plMiddleClientApi
        .get(URL_PAGES, {}, REQUEST_HEADERS)
        .then((response) => {
            const data = _.get(response, 'data.document', [])

            saveResults(state, data, dispatch)
            sendDuration(!data.length)
        })
        .catch(() => dispatch({ type: types.PAGES_SEARCH_FAILED }))
}

export const requestPages = () => (dispatch, getState) => {
    const state = getState()
    const isLoaded = simpleIsLoadedPagesSelector(state)

    if (isLoaded) {
        const serverData = simpleServerDataSelector(state)

        dispatch({ type: types.PAGES_SEARCH_STARTED })
        saveResults(state, serverData, dispatch)

        return
    }

    dispatch(fetchPages())
}

export const setProductsToShow = (item) => ({
    type: types.SET_PRODUCTS_TO_SHOW,
    item
})


export const clearProductsToShow = () => ({
    type: types.CLEAR_PRODUCTS_TO_SHOW
})
