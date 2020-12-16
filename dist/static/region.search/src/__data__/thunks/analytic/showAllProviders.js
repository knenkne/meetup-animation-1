import { showAllProvidersMetric } from '../../../header/search/analytics/showAll'
import {
    simpleProvidersSelector
} from '../../selectors'

/**
 * Вызов метрики для фиксирования нажатия кнопки "Показать все", ведущей в поставщики услуг.
 * @return {function(...[*]=)} - ничего не возращает
 */
export const showAllProviders = () => (dispatch, getState) => {
    const state = getState()
    const totalCount = simpleProvidersSelector(state).length

    showAllProvidersMetric(totalCount)
}
