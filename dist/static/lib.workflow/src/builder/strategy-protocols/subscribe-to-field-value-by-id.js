import { getFormValues } from 'redux-form'

import { getFormName } from '../../adapter/selectors'

/**
 *
 * @param state
 * @param lookupFieldId
 * @param transformer
 * @returns {*}
 */
export const subscribeToFieldValueById = ({ state, lookupFieldId, transformer = (x) => x }) =>
    transformer(getFormValues(getFormName(state))(state)?.[lookupFieldId])
