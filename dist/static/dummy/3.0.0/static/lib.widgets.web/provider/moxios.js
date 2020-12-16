/* eslint-disable no-console, comment: данные запроса/ответа следует отображать */
import axios from 'axios'

const stubs = {}

const stubAdapter = (request) => new Promise((resolve, reject) => {
    console.log(request)
    const stub = stubs[request.url]

    if (stub) {
        stub.afterRequest(request, stub.response)

        const response = typeof stub.response === 'function' ? stub.response(request) : stub.response

        if (stub.timeout) {
            setTimeout(() => {
                resolve(response)
                stub.afterResponse(request, response, stub.timeout)
            }, stub.timeout)
        } else {
            resolve(response)
            stub.afterResponse(request, response)
        }
    } else {
        reject(new Error(`Для сервиса ${request.url} отсутствует заглушка`))
    }
})

const logAfterRequest = (rq) => {
    console.log('Запрос на URL:', rq.url, 'Тело запроса:', rq.data)
}
const logAfterResponse = (rq, rs, timeout) => {
    if (timeout) {
        console.log('Запрос на URL:', rq.url, 'Тело ответа:', rs.data, 'через (мс):', timeout)
    } else {
        console.log('Запрос на URL:', rq.url, 'Тело ответа:', rs.data)
    }
}

export const stubRequest = (url, response = {}, timeout = 0, afterRequest = logAfterRequest, afterResponse = logAfterResponse) => {
    if (axios.defaults.adapter !== stubAdapter) {
        axios.defaults.adapter = stubAdapter
    }

    stubs[url] = { response, timeout, afterRequest, afterResponse }
}
