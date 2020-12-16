import { clickSearchHistoryMetric } from '../../../header/search/analytics/clickSearchHistory'
import { clickSearchExamplesMetric } from '../../../header/search/analytics/clickSearchExamples'
import { EXAMPLE_KEY, HISTORY_KEY } from '../../../header/search/constants'

/**
 * Тестовая функция клика по элементу из истории поиска или примеров поиска.
 * @param {Object} suggest - объект элемента (название + ключ)
 * @param {Function} clickSearchHistory - функция, возвращающая метрику истории поиска
 * @param {Function} clickSearchExamples - функция, возвращающая метрику примеров поиска
 * @return {function(...[*]=)} - ничего не возращает
 */
export function dumbClickSuggest (suggest, clickSearchHistory, clickSearchExamples) {
    if (suggest.typeOfSuggest === HISTORY_KEY) {
        clickSearchHistory(suggest.value)
    }

    if (suggest.typeOfSuggest === EXAMPLE_KEY) {
        clickSearchExamples(suggest.value)
    }
}

/**
 * Клик по элементу из истории поиска или примеров поиска.
 * @param {Object} suggest - объект элемента (название + ключ)
 * @return {function(...[*]=)} - ничего не возращает
 */
export const clickSuggest = (suggest) => dumbClickSuggest(suggest, clickSearchHistoryMetric, clickSearchExamplesMetric)
