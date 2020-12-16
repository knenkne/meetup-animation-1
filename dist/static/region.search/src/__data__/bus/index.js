import { getBroker } from '@sbol/webpage.provider.bootstrap'

import { clientProductsUpdate } from '../actions/products'
import { clientLoansUpdate } from '../actions/loans'
import productSelector from '../../header/search/utils/interaction/regionScaffold'
import { PRODUCTS_UPDATE, LOANS_UPDATE } from '../event-types'
import { SUCCESS, CHAT_OPEN } from '../../header/constants'
import * as type from '../action-types'

const broker = getBroker()

const unsubscribers = []

const updateClientProducts = (store) => (products) => {
    const preparedProducts = productSelector({ products })

    store.dispatch(clientProductsUpdate(preparedProducts))
}

const updateClientLoans = (store) => (loans) => {
    const products = {
        loans: {
            ...loans,
            status: SUCCESS
        }
    }
    const preparedProducts = productSelector({ products })

    store.dispatch(clientLoansUpdate({ preparedProducts }))
}

/**
 * Подписаться на слушатели.
 * @param {Object} store - redux store
 * @return {undefined} - ничего не возвращает
 */
export const subscribeToMessageBusEvents = (store) => {
    unsubscribers.push(broker.subscribe(PRODUCTS_UPDATE, updateClientProducts(store)))
    unsubscribers.push(broker.subscribe(LOANS_UPDATE, updateClientLoans(store)))
}

/**
 * Отписаться от слушателей
 * @return {undefined} - ничего не возвращает
 */
export const unsubscribeFromMessageBusEvents = () => {
    unsubscribers.forEach((unsubscribe) => unsubscribe())
}

/**
 * Перечень action-ов которые перехватывает message bus и их обработчики
 * @param {Object} action - {type: 'someType', payload: {...}}
 * @return {undefined} - ничего не возвращает
 */
export const publishEventOnAction = (action) => {
    switch (action.type) {
        case type.PAGES_CHAT_OPEN:
            broker.publish(CHAT_OPEN, action.payload)
            break
        default:
            break
    }
}

export const messageBusMiddleware = () => (next) => (action) => {
    publishEventOnAction(action)

    return next(action)
}
