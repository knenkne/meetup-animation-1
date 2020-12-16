import { createSelector } from './selector'
import { getName } from './core'


const getFormState = (state) => state.form
const getNamedFormState = createSelector(
    [getFormState, getName],
    (formState = {}, formName = '') => formState[formName]
)
export const getRegisteredFields = createSelector(
    [getNamedFormState],
    (namedFormState = {}) => namedFormState.registeredFields
)
