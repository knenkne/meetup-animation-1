import { PAGES_SPECIAL_CASE } from '../../constants'

import { iconDictionary, DEFAULT_ICON } from './dictionaries'

/**
 * Получит идентификатор иконку функции (операции)
 * @param {Object} id - идентификатор функции
 * @return {String} - идентификатор картинки
 */
export const getOperationIconName = ({ id }) => iconDictionary[id] || DEFAULT_ICON

/**
 * Выбрать для каждой функции (операции) нужный компонент.
 * @param {Object} item - интерфейс (характеристики, свойства) функции/операции
 * @return {String|null|undefined} - true/false
 */
export const select = (item) => PAGES_SPECIAL_CASE[item.id]
