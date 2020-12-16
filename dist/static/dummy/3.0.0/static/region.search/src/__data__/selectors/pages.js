import _ from 'lodash'
import { log } from '@sbol/lib.app'

import { PAGES_CHAT_UID, PAGES_SPECIAL_CASE } from '../../header/search/constants'

/**
 * Костыль. Отфильтровать link == null и функция не является специальным случаем.
 * @param {Object} item - функция
 * @return {Boolean} - оставить/убрать
 */
export const filterByEmptyLink = (item) => {
    if (!PAGES_SPECIAL_CASE[item.id] && !item.link) {
        log.error('App function, error in data structure: link does not exist.')

        return false
    }

    return !!item.link || !!PAGES_SPECIAL_CASE[item.id]
}

/**
 * Отфильтровать недоступные фичи/функции. Сейчас работает только с "Связь с банком".
 * @param {Object} item - функция
 * @param {Object} pagesUnAvailable - словарь, содержащий состояние доступности функций приложения для пользователя.
 * @return {Boolean} - использовать/пропустить функцию
 */
export const filterByAvailability = (item, pagesUnAvailable) => !pagesUnAvailable[item.id]

/**
 * Отфильтровать по наличию/отсутствию внутреннего контента - это когда при клике на функцию открывается список
 * продуктов, но не происходит перехода на новый экран.
 * @param {Object} page - функция/операция
 * @param {Object} products - продукты - вклады, карты, счета.
 * @return {Boolean} - оставить/убрать
 */
export const filterByCategory = (page, products) => {
    const category = _.toLower(page.prodListType)

    if (!category) {
        return true
    }

    // Фильтруем функции, по которым надо отображать доп. продукты
    // но таких продкутов у клиента нет
    return (products[category] || []).length > 0
}

/**
 * Сортировка функций: например перенос чата в конец списка.
 * @param {Object[]} pages - функции
 * @return {Object[]} - отсортированные функции
 */
export const sortPages = (pages) => {
    const chat = pages.find((item) => item.id === PAGES_CHAT_UID)
    const filteredPages = pages.filter((item) => item.id !== PAGES_CHAT_UID)

    if (chat) {
        filteredPages.push(chat)
    }

    return filteredPages
}

/**
 * Сортировка и фильтрация функций
 * @param {Object[]} pages - функции
 * @param {Object} products - продукты - вклады, карты, счета
 * @param {Object} pagesUnAvailable - словарь, содержащий состояние доступности функций приложения для пользователя.
 * @return {Object[]} - отсортированные функции
 */
export const filterEmptyPages = (pages, products, pagesUnAvailable) => {
    const sortedPages = sortPages(pages)

    return sortedPages
        .filter((page) => filterByAvailability(page, pagesUnAvailable))
        .filter((page) => filterByCategory(page, products))
        .filter((page) => filterByEmptyLink(page))
}
