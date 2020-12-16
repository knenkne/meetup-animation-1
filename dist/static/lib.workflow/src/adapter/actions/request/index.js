import _ from 'lodash'
import axios from 'axios'

import * as selectors from '../../selectors'
import { RESULT_END, EXTERNAL_ENTER, EXTERNAL_RETURN, restore } from '../../../constants'
import { httpClientRequest } from '../http-client-request'
import { syncLocationWithWorkflow, cancelSource } from '../utils'
import {
    success,
    startRequest,
    finishFlow,
    stopRequest,
    changeFlow, setShouldRestart
} from '../actions'
import { start } from '../thunks'

import { handleExternalEvents } from './handle-external-events'
import { handleView } from './handle-view'
import { handleMessages } from './handle-messages'
import { handleResponseError } from './handle-response-error'

const errorFromSOWA = (responseBody, body, messages) => {
    const statusErrors = responseBody?.status?.errors
    return !_.isEmpty(responseBody) && _.isEmpty(body) && _.isEmpty(messages) && !_.isEmpty(statusErrors)
}

export const request = (
    requestUrl,
    requestParams = {},
    requestData = {},
    requestCallbacks = {},
    options = {}
) => (dispatch, getState) => {
    const { onStart = _.noop, onSuccess = _.noop, onFail = _.noop } = requestCallbacks
    const { transition = _.noop, rqInterceptors = [], rsInterceptors = [] } = options
    const source = axios.CancelToken.source()

    onStart()
    dispatch(startRequest())

    // Добавляем сорс в коллекцию
    cancelSource.add(source)

    return httpClientRequest(
        requestUrl,
        requestParams,
        requestData,
        rqInterceptors,
        rsInterceptors,
        source.token
    ).then(
        (response) => {

            // Преинициализация ответа
            const responseBody = response?.data || {}
            const body = responseBody?.body || {}
            const messages = responseBody?.messages || []

            // обработка некорректного ответа SOWA
            const sowaError = errorFromSOWA(responseBody, body, messages)
            if (sowaError) {
                return dispatch(handleResponseError())
            }

            const { result, pid, output } = body

            dispatch(success(pid))

            // Заканчиваем процесс, если получили признак
            if (result === RESULT_END) {
                dispatch(finishFlow())
            }

            // Работа с подпроцессами CMD
            if (result === EXTERNAL_ENTER || result === EXTERNAL_RETURN) {
                const lastAvailablePid = pid || selectors.getPid(getState())
                const url = responseBody?.body?.url
                return dispatch(handleExternalEvents(url, result, lastAvailablePid, { onSuccess, onFail }))
            }

            // Работа с подпроцессами HEADER
            // https://sbtatlas.sigma.sbrf.ru/wiki/pages/viewpage.action?pageId=566526404
            if (response?.headers?.['x-gw-redirect']) {
                dispatch(changeFlow(response?.headers?.['x-gw-redirect']))
            }

            const formName = selectors.getName(getState())
            dispatch(handleView(formName, responseBody, result))
            dispatch(handleMessages(formName, messages))

            transition(body, messages)

            if (result !== RESULT_END || output || messages.length) {
                // Сохраняем в URL pid, documentId и другие идентификаторы процесса, если таковые имеются в ответе
                const { documentId, templateId, srcDocumentId, srcTemplateId } = output?.document || {}
                syncLocationWithWorkflow({ pid, documentId, templateId, srcDocumentId, srcTemplateId })
            }

            onSuccess()
            return dispatch(stopRequest())
        },
        (error) => {
            // если на restore пришло success: false, считаем восстановление процесса неудавшимся и пробуем стартовать процесс
            if (requestParams?.name === restore) {
                return dispatch(setShouldRestart(true))
            }
            onFail()
            return dispatch(handleResponseError(error))
        }
    )
}
