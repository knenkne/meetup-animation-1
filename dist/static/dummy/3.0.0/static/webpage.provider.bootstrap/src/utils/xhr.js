export default (url, body, { method = 'POST', withCredentials = true, originSend, withContentType = true, requestedWith = false } = {}) =>
    new Promise((resolve, reject) => {
        const xhr = new XMLHttpRequest()

        xhr.open(method, url, true)

        xhr.withCredentials = Boolean(withCredentials)

        if (withContentType) {
            xhr.setRequestHeader('Content-type', 'application/json; charset=utf-8')
        }

        if (requestedWith) {
            xhr.setRequestHeader('X-Requested-With', 'XMLHttpRequest')
        }

        if (originSend && xhr.originSend) {
            xhr.originSend(JSON.stringify(body))
        } else if (body) {
            xhr.send(JSON.stringify(body))
        } else {
            xhr.send()
        }


        xhr.onerror = () => reject(xhr)

        xhr.onreadystatechange = () => {
            if (xhr.readyState === 4) {
                if (xhr.status > 400) {
                    return reject(xhr)
                }
                if (xhr.response) {
                    try {
                        return resolve(JSON.parse(xhr.response))
                    } catch (error) {
                        return reject(xhr)
                    }
                }
            }
            return null
        }
    })
