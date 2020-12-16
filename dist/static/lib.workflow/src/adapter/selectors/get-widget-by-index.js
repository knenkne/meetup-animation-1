import { structurePositionToWidgetPart } from '../../builder/components/utils/structure-position-to-widget-part'

import { createSelector } from './selector'
import { getScreens } from './core'

export const getWidgetFromScreens = ({ screens, screenIndex, screenPart, widgetIndex }) =>
    screens?.[screenIndex]?.[structurePositionToWidgetPart(screenPart)]?.[widgetIndex]

/**
 * Достаем виджет по его индексу в сторе
 * @param {Object} state - cтейт
 * @param {Number} screenIndex - индекс скрина
 * @param {String} screenPart - раздел скрина
 * @param {Number} widgetIndex - индекс виджета
 * @return {Object} - виджет
 */
export const getWidgetByIndex = ({ state, screenIndex, screenPart, widgetIndex }) =>
    getWidgetFromScreens({ screens: getScreens(state), screenIndex, screenPart, widgetIndex })

