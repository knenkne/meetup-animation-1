import _ from 'lodash'

import { createSelector } from './selector'
import { getValues, getInitialValues } from './redux-form-values'
import { getMaskedFieldIDs } from './get-masked-field-ids'

export const getMaskedPristineFieldIDs = createSelector(
    [getValues, getInitialValues, getMaskedFieldIDs],
    (currentValues, initialValues, maskedIDs) =>
        _.filter(maskedIDs, (maskedFieldID) =>
            _.get(currentValues, maskedFieldID) === _.get(initialValues, maskedFieldID))
)
