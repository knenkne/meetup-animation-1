import getOnline from './get-online'

const STATUS_FAIL = 400
const XHR_READY_STATE = 4

export default (url, body, onError = () => {}) => {
    if (getOnline()) {
        const xhr = new XMLHttpRequest()
        xhr.open('POST', url, true)
        xhr.setRequestHeader('Content-type', 'application/json;charset=utf-8')
        xhr.send(JSON.stringify(body))

        xhr.onreadystatechange = () => {
            if (xhr.readyState === XHR_READY_STATE && xhr.status >= STATUS_FAIL) {
                onError()
            }
        }
    } else {
        onError()
    }
}
