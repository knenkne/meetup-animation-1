import { setWidgetTitle } from '../../adapter/actions/actions'

/**
 * @param {String} strategyOwnerId - в данном случае это айдишник любого поля расположенного в виджете, нужен для
 * идентификации виджета, поскольку виджеты не имеют id
 * @param {String} newTitle - новый title
 * @return {Function}
 */

export const updateWidgetTitle = ({ strategyOwnerId, newTitle }) => {
    setWidgetTitle({ fieldId: strategyOwnerId, newTitle })
}
