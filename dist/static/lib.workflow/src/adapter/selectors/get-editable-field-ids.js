import { createSelector } from './selector'
import { getFields } from './get-fields'

export const getEditableFieldIDs = createSelector(
    [getFields],
    (fields = []) => fields
        .filter(({ readonly }) => !readonly)
        .map((field) => field.id)
)
