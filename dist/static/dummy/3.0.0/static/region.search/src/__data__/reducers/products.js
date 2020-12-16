import _ from 'lodash'

import * as types from '../action-types'

const initialState = {
    accounts: [],
    cards: [],
    depoaccounts: [],
    imaccounts: [],
    loans: [],
    targets: []
}

const getProductsByType = (products, type) => _.get(_.find(products, { type }), 'content', [])

export default (state = initialState, action) => {
    switch (action.type) {
        case types.CLIENT_PRODUCTS_UPDATE: {
            return {
                accounts: getProductsByType(action.products, 'accounts'),
                cards: getProductsByType(action.products, 'cards'),
                depoaccounts: getProductsByType(action.products, 'depo'),
                imaccounts: getProductsByType(action.products, 'imaccounts'),
                loans: getProductsByType(action.products, 'loans'),
                targets: getProductsByType(action.products, 'targets'),
            }
        }

        case types.CLIENT_LOANS_UPDATE: {
            return {
                ...state,
                loans: getProductsByType(action.products, 'loans'),
            }
        }

        default:
            return state
    }
}
