import { clickProviderMetric } from '../../../header/search/analytics/clickProvider'
import { simpleProvidersSelector } from '../../selectors'

/**
 * Клик по операции из истории операций.
 * @param {Object} item - объект выбранной операции
 * @return {function(...[*]=)} - ничего не возращает
 */
export const clickProvider = (item) => (dispatch, getState) => {
    const state = getState()
    const providers = simpleProvidersSelector(state)
    const totalCount = providers.length

    clickProviderMetric(totalCount, item.position, item.name, item.id)
}
