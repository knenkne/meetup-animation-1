import { EXTERNAL_ENTER, EXTERNAL_RETURN } from '../../../constants'
import { onEnterEvent, onReturnEvent } from '../thunks'
import { subFlowReturn, subFlowEnter } from '../actions'

export const handleExternalEvents = (url, result, pid, { onSuccess, onFail }) => (dispatch) => {
    if (result === EXTERNAL_RETURN) {
        dispatch(onReturnEvent(url, pid, {
            onSuccess: () => {
                onSuccess()
                dispatch(subFlowReturn(url))
            },
            onFail
        }))
    }

    if (result === EXTERNAL_ENTER) {
        dispatch(onEnterEvent(url, pid, {
            onSuccess: () => {
                onSuccess()
                dispatch(subFlowEnter(url))
            },
            onFail
        }))
    }
}
