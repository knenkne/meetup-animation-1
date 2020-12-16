import { getFieldsFromScreens } from '../utils'

import { createSelector } from './selector'
import { getScreens } from './core'

export const getFields = createSelector(
    [getScreens],
    getFieldsFromScreens
)
