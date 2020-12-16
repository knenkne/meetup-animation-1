import _ from 'lodash'
import { startSubmit, submit, stopSubmit, destroy as destroyReduxForm, isDirty, getFormSyncErrors } from 'redux-form'
import i18next from 'i18next'
import { getHistory } from '@sbol/lib.app'

import {
    START,
    EVENT,
    ROLLBACK,
    EXIT,
    ABORT,
    ON_ENTER,
    ON_RETURN,
    next as nextEventName,
    update as updateEventName,
} from '../../constants'
import {
    getPid,
    getName,
    getActiveProcessStepIDs,
    getPreviousActiveStepId,
    getRequestBody,
    getUrl,
    getActiveProcessSteps,
    isProcessInRegion, getMainProcessId
} from '../selectors'

import {
    stopRequest,
    clearState,
    initialize,
    resumeProcess,
    noAvailableSteps,
    noStepFound,
    updateHistory, setSubFlowInRegionStarted, setSubFlowInRegionFinished
} from './actions'
import { request } from './request'
import { cancelAllRequests } from './utils'
import { getRegionName, isRegion } from './utils/regions'

const defaultHandlers = { onStart: _.noop, onSuccess: _.noop, onFail: _.noop }

const callbacks = { transition: _.noop }

const eventsWithValidation = [nextEventName, updateEventName]

// Инициализация формы
export const init = (options, nextCallbacks) => (dispatch) => {
    dispatch(initialize(options))

    Object.assign(callbacks, nextCallbacks)

    return void 0
}

// /<gateUrl>?cmd=START&name=<flowName>
export const start = (
    flowName,
    query = {},
    additionalParams = {},
    handlers = defaultHandlers,
    { ignoreDocumentIdUrl } = {}
) => (dispatch, getState) => {
    const { documentId } = query
    const url = getUrl(getState())

    const { onStart, onSuccess, onFail } = handlers

    const queryParams = { cmd: START, name: flowName }

    if (documentId && !ignoreDocumentIdUrl) {
        dispatch(resumeProcess(documentId))
        Object.assign(queryParams, { documentId })
    }

    return dispatch(request(url, queryParams, { document: additionalParams }, { onStart, onSuccess, onFail }, callbacks))
}

const eventActionCreator = ({ url, eventId, getState, formName, additionalParams, queryParams }) => {
    const body = getRequestBody(getState(), { name: formName })

    if (additionalParams) {
        body.document = { ...body.document || {}, ...additionalParams }
    }

    return request(url, { cmd: EVENT, name: eventId, pid: getPid(getState()), ...queryParams }, body, {}, callbacks)
}

// /<gateUrl>?cmd=EVENT&pid=<processId>&name=<eventId>
export const event = (eventId, additionalParams, needValidation, queryParams) => (dispatch, getState) => {
    const url = getUrl(getState())
    const formName = getName(getState())

    if (eventsWithValidation.includes(eventId) || needValidation) {
        // Если событие - сабмит, то предварительно выполняем валидацию и если всё ок - отправляем запрос
        dispatch(startSubmit(formName))
        dispatch(submit(formName))

        const errors = getFormSyncErrors(formName)(getState()) || {}
        if (Object.keys(errors).length) {
            dispatch(stopSubmit(formName))
            dispatch(stopRequest())
        } else {
            dispatch(eventActionCreator({ url, eventId, getState, formName, additionalParams }))
        }
    } else {
        // Если мы обрабатываем событие, не являющееся сабмитом (rollback, exit и т.д.) - то сразу отправляем запрос
        return dispatch(eventActionCreator({ url, eventId, getState, formName, additionalParams, queryParams }))
    }
    return void 0
}

const onExternal = (name, url, pid, handlers = defaultHandlers) => (dispatch, getState) => {
    const processInRegion = isProcessInRegion(getState())
    /* в основном процессе ставим в стор начало загрузки сабфлоу в Регионе */
    if (name === ON_ENTER && isRegion(url, getMainProcessId(getState())) && !processInRegion) {
        return dispatch(setSubFlowInRegionStarted({ regionName: getRegionName(url, getMainProcessId(getState())), url, pid }))
    }
    /* в сабфлоу в Регионе ставим в стор завершение сабфлоу */
    if (name === ON_RETURN && processInRegion) {
        return dispatch(setSubFlowInRegionFinished({ url, pid }))
    }
    return dispatch(request(url, { cmd: EVENT, name, pid }, {}, handlers, callbacks))
}

// /<gateUrl>?cmd=EVENT&pid=<processId>&name=on-enter
export const onEnterEvent = (...args) => onExternal(ON_ENTER, ...args)

// /<gateUrl>?cmd=EVENT&pid=<processId>&name=on-return
export const onReturnEvent = (...args) => onExternal(ON_RETURN, ...args)

export const handleReturnFromRegionSubFlow = ({ url, pid }) => (dispatch) =>
    dispatch(onReturnEvent(url, pid, {
        onSuccess: () => dispatch(setSubFlowInRegionFinished({ url, pid }))
    }))

// /<gateUrl>?cmd=ROLLBACK&pid=<processId>&name=<stepId>
export const rollbackHistory = (stepId) => (dispatch, getState) =>
    dispatch(request(getUrl(getState()), { cmd: ROLLBACK, name: stepId, pid: getPid(getState()) }, {}, {}, callbacks))

// /<gateUrl>?cmd=ROLLBACK&pid=<processId>&name=<stepId>
// with checks
export const rollback = (stepId) => (dispatch, getState) => {
    if (
        isDirty(getName(getState()))(getState()) &&
        // библиотека спрашивает пользователя, можно ли покинуть страницу,
        // если пользователь заполнил форму
        // eslint-disable-next-line no-alert, comment: мы все еще не порицаем такой упоротый UX
        !window.confirm(i18next.t('lib.workflow:confirm.rollback'))
    ) {
        return null
    }

    const historyAvailableForRollback = getActiveProcessStepIDs(getState())

    if (_.isEmpty(historyAvailableForRollback)) {
        return dispatch(noAvailableSteps())
    }

    let destinationStepId = null

    if (!stepId) {
        const previousStepId = getPreviousActiveStepId(getState())
        const ABSENT_ITEM_FLAG = -1

        // Убираем из истории последний шаг
        const arrayHistory = getActiveProcessSteps(getState())
        arrayHistory.shift()
        dispatch(updateHistory([...arrayHistory]))

        if (previousStepId === ABSENT_ITEM_FLAG) {
            return dispatch(noStepFound())
        }

        destinationStepId = previousStepId
    } else {
        destinationStepId = stepId
    }

    return dispatch(rollbackHistory(destinationStepId))
}


export const clearStore = (name) => (dispatch) => {
    dispatch(destroyReduxForm(name))
    dispatch(clearState(name))
}

const abstractExit = (cmd) => (dispatch, getState) => {
    const url = getUrl(getState())
    const pid = getPid(getState())
    const name = getName(getState())
    clearStore(name)

    return dispatch(request(url, { cmd, pid }, {}, {}, callbacks))
}

// /<gateUrl>?cmd=EXIT&pid=<processId>
export const exit = () => abstractExit(EXIT)

// /<gateUrl>?cmd=ABORT&pid=<processId>
export const abort = () => abstractExit(ABORT)

export const defaultEventHandlers = {
    event,
    rollback,
    exit,
    abort
}

// Синхронизация с браузерной кнопкой "назад"
export const historyListen = () => (dispatch) => {
    const history = getHistory()
    let previousLocation = history.location

    // Слушаем переходы пользователя
    return history.listen((location, action) => {
        if (action === 'POP') {
            // Это только для IE
            window.history.replaceState({}, '', window.location.toString())

            // Отменяем все запросы
            cancelAllRequests()
            const resultRollback = dispatch(rollback())
            // Если результат rollback Promise (значит посылается запрос на ролбэк), то остаемся на той же странице
            if (typeof resultRollback.then === 'function') {
                return history.push(`${previousLocation.pathname}${previousLocation.hash}`)
            }
        }
        previousLocation = location
        return false
    })
}
