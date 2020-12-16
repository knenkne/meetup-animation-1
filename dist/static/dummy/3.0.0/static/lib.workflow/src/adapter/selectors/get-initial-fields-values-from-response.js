import { parse } from '../utils'

import { createSelector } from './selector'
import { getFields } from './get-fields'

export const getInitialFieldsValuesFromResponse = createSelector(
    [getFields],
    (fields = []) => fields.reduce((acc, field) => Object.assign(acc, { [field.id]: parse(field) }), {})
)
