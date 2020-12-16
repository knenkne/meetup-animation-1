import _ from 'lodash'

import { isProductFromPagesSelector } from 'Selectors'
import * as actions from 'Actions'

import { searchOperations } from '../../header/search/utils/operationHistory/search'
import { USER_INPUT_DEBOUNCE_TIMEOUT } from '../../header/search/constants'
import { requestOperations } from '../actions/operations/requests'
import { closeSearchMetric } from '../../header/search/analytics/searchOutput'

const debouncedSearchOperations = _.debounce(searchOperations, USER_INPUT_DEBOUNCE_TIMEOUT)
const debouncedPages = _.debounce((dispatch) => dispatch(actions.requestPages()), USER_INPUT_DEBOUNCE_TIMEOUT)

export const onSearchQueryChange = (query) => (dispatch, getState) => {
    const state = getState()
    const isProductFromPages = isProductFromPagesSelector(state)

    dispatch(actions.searchQueryChange(query))

    if (!isProductFromPages) {
        dispatch(actions.requestProviders(query))
        debouncedPages(dispatch)
        debouncedSearchOperations(dispatch, query, state, requestOperations)
    }
}

export const onPrefetchOperations = () => (dispatch) => dispatch(actions.prefetchOperations())

export const onClearSearchQuery = () => (dispatch) => {
    closeSearchMetric()
    dispatch(actions.clearSearchQuery())
}
