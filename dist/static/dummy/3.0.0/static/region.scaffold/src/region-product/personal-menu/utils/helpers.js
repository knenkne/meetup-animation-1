import { GREAT, FINE_TEMPO, SLOW, LATE, OUTDATED } from '../../__data__/selectors/products/targets/dictionaries'

import { ERROR, LOADING, SUCCESS, CLIENT, EMPLOYEE } from './constants'

export const isStatusError = (status) => status === ERROR
export const isStatusLoading = (status) => status === LOADING
export const isStatusSuccess = (status) => status === SUCCESS

export const isClientProfile = (type) => type === CLIENT
export const isEmployeeProfile = (type) => type === EMPLOYEE

export const isTrue = (item) => item === true || item === 'true'
export const isFalse = (item) => item === false || item === 'false'

export const isGhostProduct = (item) => item === 'ghost'

export const isTechBreak = (item) => item === 'techBreak'
export const isNotReceivedAll = (item) => item === 'notReceivedAll'

export const isTargetStatusGreat = (status) => status === GREAT
export const isTargetStatusFineTempo = (status) => status === FINE_TEMPO
export const isTargetStatusLate = (status) => status === LATE || status === SLOW
export const isTargetStatusOutdated = (status) => status === OUTDATED
export const isTargetOk = (status) => isTargetStatusGreat(status) || isTargetStatusFineTempo(status)

export const isClaimDraft = (status) => status === 'INITIAL'
