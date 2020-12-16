import { getBroker } from '@sbol/webpage.provider.bootstrap'

import {
    CREDITABILITY_FETCH,
    DELIVERY_CARD_FETCH,
    EMPLOYEE_FETCH,
    INSURANCE_CONTRACTS_FETCH,
    INVESTMENTS_FETCH,
    LOAN_OFFER_FETCH,
    LOANS_FETCH,
    PRODUCTS_FETCH,
    PROFILE_FETCH,
} from '../action-types'
import {
    CREDITABILITY_REFETCH,
    CREDITABILITY_UPDATE,
    DELIVERY_CARD_UPDATE,
    EMPLOYEE_UPDATE,
    INSURANCE_CONTRACTS_REFETCH,
    INSURANCE_CONTRACTS_UPDATE,
    INVESTMENTS_UPDATE,
    LOAN_CARD_OFFER_UPDATE,
    LOANS_UPDATE,
    PRODUCTS_REFETCH,
    PRODUCTS_UPDATE,
    PROFILE_REFETCH,
    PROFILE_UPDATE,
    USER_PROPERTIES_SET
} from '../event-types'
import { fetchContracts } from '../actions/insurance'
import { fetchProducts } from '../actions/init/products'
import { fetchClient } from '../actions/init/profile'
import { fetchPropForBlockedCards } from '../actions/init'
import { fetchCreditability } from '../actions/creditability'

const unsubscribers = []

const broker = getBroker()

const insuranceContractsRefetch = (store) => () => {
    store.dispatch(fetchContracts())
}

const updateProducts = (store) => (payload) => {
    store.dispatch(fetchProducts(payload))
}

const updateProfile = (store) => () => {
    store.dispatch(fetchClient())
}

const updateUserProperties = (store) => () => {
    store.dispatch(fetchPropForBlockedCards())
}

const updateCreditability = (store) => () => {
    store.dispatch(fetchCreditability())
}

export const subscribeToMessageBusEvents = (store) => {
    unsubscribers.push(broker.on(INSURANCE_CONTRACTS_REFETCH, insuranceContractsRefetch(store)))
    unsubscribers.push(broker.on(PRODUCTS_REFETCH, updateProducts(store)))
    unsubscribers.push(broker.on(PROFILE_REFETCH, updateProfile(store)))
    unsubscribers.push(broker.on(USER_PROPERTIES_SET, updateUserProperties(store)))
    unsubscribers.push(broker.on(CREDITABILITY_REFETCH, updateCreditability(store)))
}

export const messageBusMiddleware = () => (next) => (action) => {
    // eslint-disable-next-line callback-return, comment: паблишинг месседж баса
    const nextValue = next(action)

    switch (action.type) {
        case PRODUCTS_FETCH:
            broker.publish(PRODUCTS_UPDATE, action.payload)
            break
        case LOANS_FETCH:
            broker.publish(LOANS_UPDATE, action.payload)
            break
        case DELIVERY_CARD_FETCH:
            broker.publish(DELIVERY_CARD_UPDATE, action.payload)
            break
        case LOAN_OFFER_FETCH:
            broker.publish(LOAN_CARD_OFFER_UPDATE, action.payload)
            break
        case INSURANCE_CONTRACTS_FETCH:
            broker.publish(INSURANCE_CONTRACTS_UPDATE, action.payload)
            break
        case INVESTMENTS_FETCH:
            broker.publish(INVESTMENTS_UPDATE, action.payload)
            break
        case PROFILE_FETCH:
            broker.publish(PROFILE_UPDATE, action.payload)
            break
        case EMPLOYEE_FETCH:
            broker.publish(EMPLOYEE_UPDATE, action.payload)
            break
        case CREDITABILITY_FETCH:
            broker.publish(CREDITABILITY_UPDATE, action.payload)
            break
        default:
            break
    }

    return nextValue
}

export const unsubscribeFromMessageBusEvents = () => {
    unsubscribers.forEach((unsubscribe) => unsubscribe())
}
