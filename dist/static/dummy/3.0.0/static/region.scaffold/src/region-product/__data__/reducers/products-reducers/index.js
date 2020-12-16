import _ from 'lodash'
import { combineReducers } from 'redux'

import * as types from '../../action-types'
import { ERROR, LOADING, SUCCESS } from '../../../personal-menu/utils/constants'

import claims from './claims'
import depoaccounts from './depo'
import insurance from './insurance'
import investments from './investments'
import loans from './loans'
import autoLoans from './auto-loans'
import brokerage from './brokerage'
import creditability from './creditability'

const reducers = combineReducers({
    claims,
    depoaccounts,
    insurance,
    investments,
    loans,
    autoLoans,
    brokerage,
    creditability,
    // fix warning unexpected key passed to create store
    // todo: dynamic keys
    securityAccounts: (state = {}) => state,
    securityaccounts: (state = {}) => state,
    initialFetch: (state = {}) => state,
    cards: (state = {}) => state,
    offerInfoData: (state = {}) => state,
    commonStatus: (state = {}) => state,
    status: (state = {}) => state,
    imaccounts: (state = {}) => state,
    targets: (state = {}) => state,
    accounts: (state = {}) => state,
    ctaccounts: (state = {}) => state
})

export default (state = {}, action) => {
    let prefetched
    switch (action.type) {
        case types.PRODUCTS_LOADING:
            prefetched = {
                ...state,
                commonStatus: LOADING,
                initialFetch: action.initialFetch,
                status: { code: _.get(action.payload, 'status.code') }
            }
            break

        case types.PRODUCTS_FETCH: {
            prefetched = {
                ...state,
                ...action.payload,
                commonStatus: SUCCESS,
                status: { code: _.get(action.payload, 'status.code') }
            }
            break
        }

        case types.PRODUCTS_ERROR: {
            return { ...state, ...action.payload, commonStatus: ERROR }
        }

        case types.LOAN_OFFER_FETCH: {
            return { ...state, ...action.payload }
        }

        default:
            prefetched = {
                ...state
            }
    }

    return {
        ...prefetched,
        ...reducers(prefetched, action)
    }
}
