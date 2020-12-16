import { ITEMS_MAX_COUNT } from '../../header/search/constants'

/**
 * Обрезать массив всех Организаций до 4
 * @param {Object} providers - список Организаций
 * @return {Object} - обрезанный список Организаций
 */
export const getProviderResult = (providers) => providers.slice(0, ITEMS_MAX_COUNT)


/**
 * Вывести кнопку "Показать все" при результатах поиска >4
 * @param {Object} providers - список Организаций
 * @return {Boolean} - показать/нет
 */
export const getProvidersShowAll = (providers) => providers.length > ITEMS_MAX_COUNT
