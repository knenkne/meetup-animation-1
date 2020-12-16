import { createSelectorCreator, defaultMemoize } from 'reselect'
import _ from 'lodash'

export { createSelector, createStructuredSelector } from 'reselect'
export const createDeepEqualSelector = createSelectorCreator(defaultMemoize, _.isEqual)
