import _ from 'lodash'

import * as actions from '../actions'
import {
    getSearchHistorySuggests,
    saveSearchHistorySuggest
} from '../../header/search/suggests/search-history'
import { checkHtmlCodes } from '../../utils'
import utilsCollection from '../../header/search/utils/suggests'
import { simpleSearchQuerySuggestions } from '../selectors'
import suggestsRequests from '../actions/suggests/requests'

const MAX_SUGGEST_TEXT_LENGTH = 50

export const onSetSearchedValues = () => (dispatch) => {
    const searchHistorySuggests = getSearchHistorySuggests()

    dispatch(actions.setSearchedValues(searchHistorySuggests))
}

export const onAddSuggestValue = (value) => (dispatch) => {
    const suggest = checkHtmlCodes(_.truncate(value, { length: MAX_SUGGEST_TEXT_LENGTH, omission: '' }))
    const dataOnSave = { suggest, date: Date.now() }

    dispatch(actions.addSuggestValue(dataOnSave))
    saveSearchHistorySuggest(dataOnSave)
}

/**
 * Поиск и сохранение suggests
 * @param {String} query - значение из строки поиска
 * @param {Object} merchantsData - объект в котором искать саджесты.
 * @return {*} - undefined
 */
export const onUpdateSearchQuerySuggestions = (query, merchantsData) => (dispatch, getState) => {
    if (query) {
        let accum = ''

        query.split('').forEach((letter) => {
            const store = simpleSearchQuerySuggestions(getState())

            accum += letter

            const { key, value } = utilsCollection.findPathsSuggestions(accum, store, merchantsData)

            if (value) {
                value.suggestions.sort(
                    ({ w: firstWeightParam }, { w: secondWeightParam }) => secondWeightParam - firstWeightParam
                )

                dispatch(actions.updateSearchQuerySuggestions({ key, value }))
            }
        })
    }
}

/**
 * Получение примеров поиска (простых), которые будут располагаться в левой колонке поисковой выдачи,
 * когда поисковая строка пустая.
 * @return {Promise} - результат запроса.
 */
export const getQuickSuggestions = () => (dispatch, getState) => suggestsRequests.requestQuickSuggestions(dispatch, getState)
