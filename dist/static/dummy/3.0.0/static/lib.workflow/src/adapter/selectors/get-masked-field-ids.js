import { createSelector } from './selector'
import { getFields } from './get-fields'

export const getMaskedFieldIDs = createSelector(
    getFields,
    (fields = []) => fields
        .filter(({ masked }) => masked)
        .map((field) => field.id)
)
