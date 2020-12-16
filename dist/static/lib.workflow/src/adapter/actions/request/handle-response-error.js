import { failed, removeScreens } from '../actions'
import { getErrorPayload } from '../utils'

export const handleResponseError = (error) => (dispatch) => {
    dispatch(removeScreens())

    const hasUFSError = error?.hasUFSError

    // Если системная ошибка, диспетчеризуем событие failed
    if (hasUFSError) {
        return dispatch(failed(getErrorPayload(error?.error, true)))
    }

    // Для ответа с кодом HTTP групп 3xx, 4xx (кроме 401 и 403) или 5xx тело ответа отсутствует
    // https://sbtatlas.sigma.sbrf.ru/wiki/pages/viewpage.action?pageId=140442775
    return dispatch(failed(getErrorPayload({}, false)))
}
