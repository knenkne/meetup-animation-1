import { getReferenceByReferenceId, getScreens, getFieldValue } from '../../adapter/selectors'
import { getFieldsFromScreens } from '../../adapter/utils'

/**
 * @param {Object} store - redux store
 * @param {String} fieldLookupId - fieldLookupId
 * @param {Function} transformer - функция преобразующая результат
 * @return {String||Number} - Функция возвращает введенное пользователем значение в поле с id === fieldLookupId,
 * если в этом поле референсы, то оно идет в них и возвращает properties?.amount
 */

export const getAmount = ({ store, fieldLookupId, transformer = (x) => x }) => {
    const fieldValue = getFieldValue(store, fieldLookupId)
    const lookupReferenceId = getFieldsFromScreens(getScreens(store))?.find((field) => field.id === fieldLookupId)?.referenceId
    if (lookupReferenceId) {
        const references = getReferenceByReferenceId(store, lookupReferenceId)
        if (references && fieldValue) {
            return transformer(references?.items?.find((ref) => ref.value === fieldValue)?.properties?.amount)
        }
    }

    return transformer(fieldValue)
}
