import _ from 'lodash'

import { getScreens } from '../../adapter/selectors'

/**
 * Возвращает значение title виджета содержащего филд с определенным id
 *
 * @param {Object} store - redux store
 * @param {String} fieldId - id поля значение которого меняем
 * @param {String||Number} result - значение title виджета
 */

export const getWidgetTitleByFieldId = (store = {}, fieldId = '') => {
    const allWidgets = _.flatMap(getScreens(store), ({ widgets = [], header = [], footer = [] }) => [
        ...widgets,
        ...header,
        ...footer
    ])
    let result
    allWidgets.map((widget) => widget.fields?.map((field) => {
        if (field.id === fieldId) {
            result = widget.title
        }
        return void 0
    }))
    return result
}
