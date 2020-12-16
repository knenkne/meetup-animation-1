import { analytics } from '@sbol/lib.analytics'

import { hideNumbers } from '../utils'
import {
    APP,
    SEARCH_SUB_REGION
} from '..'

/**
 * Метрика для клика по продукту. Собрать количество элементов в блоке, позицию элемента в блоке, название, идентификатор.
 * @param {Number} count - количество элементов в блоке
 * @param {Number} position - позиция элемента в блоке
 * @param {String} name - наименование.
 * @param {Number} id - идентификатор.
 * @return {Object} - метрику
 */
export const clickProductMetric = (count, position, name, id) => {
    const metric = {
        application: APP,
        action: SEARCH_SUB_REGION,
        label: 'Выдача/Продукты_Клик',
        value: `${count}, ${position}, ${hideNumbers(name)}, ${id}`
    }

    analytics.private(metric)

    return metric
}
