import { getAllFeatures } from '@sbol/lib.app'

import { PAGES_CHAT_UID } from '../../../header/search/constants'
import * as actions from '../../actions'
import { simpleScreenUrl } from '../../selectors'

import { onSetSearchedValues } from '..'

/**
 * Отсортировать блоки по экрану
 * @param {String} screenUrl - window.location.href
 * @return {String[]} - массив блоков
 */
export const sortBlocks = (screenUrl) => {
    if (screenUrl.indexOf('payments/main') >= 0 || screenUrl.indexOf('operations') >= 0) {
        return ['OperationsHistory', 'Providers', 'Pages', 'Products']
    }

    return ['Pages', 'OperationsHistory', 'Providers', 'Products']
}

/**
 * Обновить информацию по экрану.
 * @return {undefined} - void
 */
export function updateScreenInfo () {
    setTimeout(() => {
        const url = simpleScreenUrl(updateScreenInfo.getState())

        if (url !== window.location.href) {
            updateScreenInfo.dispatch(actions.updateScreenUrl(window.location.href))
            updateScreenInfo.dispatch(actions.updateScreenBlockOrder(sortBlocks(window.location.href)))
        }

    }, 100)
}

/**
 * Добавление слушателей событий, способных поменять экран
 * @param {Function} dispatch - redux dispatch
 * @param {Function} getState - redux store
 * @return {undefined} - void
 */
export const addEvents = (dispatch, getState) => {
    Object.defineProperty(updateScreenInfo, 'dispatch', {
        value: dispatch,
        writable: true
    })
    Object.defineProperty(updateScreenInfo, 'getState', {
        value: getState,
        writable: true
    })

    window.addEventListener('load', updateScreenInfo)
    window.addEventListener('popstate', updateScreenInfo)
    window.addEventListener('keyup', updateScreenInfo)
    document.body.addEventListener('click', updateScreenInfo)
}

/**
 * Отписаться от событий.
 * @return {undefined} - void
 */
export const removeEvents = () => {
    window.removeEventListener('load', updateScreenInfo)
    window.removeEventListener('popstate', updateScreenInfo)
    window.removeEventListener('keyup', updateScreenInfo)
    document.body.removeEventListener('click', updateScreenInfo)
}

/**
 * Выполнять тут действия, когда SearchComponent примонтировался
 * @return {undefined} - ничего не возвращает
 */
export const didMount = () => (dispatch, getState) => {
    addEvents(dispatch, getState)
    dispatch(onSetSearchedValues())

    const chatAvailable = !!getAllFeatures('chat')

    if (!chatAvailable) {
        dispatch(actions.setPagesAvailability({ [PAGES_CHAT_UID]: !chatAvailable }))
    }
}

/**
 * Выполнять тут действия, когда SearchComponent отмонтировалсяя
 * @return {undefined} - ничего не возвращает
 */
export const willUnmount = () => () => {
    removeEvents()
}
