import { getFormValues } from 'redux-form'

import { getName } from '.'

/*
 * @param {Object} store: redux store
 * @param {String} lookupFieldId - id поля значение которого берем
 * @returns {String||Number} newValue - значение поля
 */
export const getFieldValue = (store, fieldId) => getFormValues(getName(store))(store)?.[fieldId]
