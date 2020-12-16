import { getFormSyncErrors, hasSubmitFailed, getFormSubmitErrors } from 'redux-form'

import { getName } from './core'

export const getFormErrors = (state) => getFormSyncErrors(getName(state))(state)
export const formSubmitFailed = (state) => hasSubmitFailed(getName(state))(state)

export const getSubmitErrors = (state) => getFormSubmitErrors(getName(state))(state)
