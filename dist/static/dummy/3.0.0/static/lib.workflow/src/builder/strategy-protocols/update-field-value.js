import { change } from 'redux-form'

import { getFormName } from '../../adapter/selectors'

/**
 * Изменяет значение филда с lookupFieldId
 *
 * @param {Object} store: redux store
 * @param {String} lookupFieldId - id поля значение которого меняем
 * @param {String||Number} newValue - устанавливаемое значение
 */

export const updateFieldValue = ({ store, lookupFieldId, newValue }) => {
    store.dispatch(change(getFormName(store.getState()), lookupFieldId, newValue))
}
