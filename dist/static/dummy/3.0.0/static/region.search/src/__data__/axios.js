import axios from 'axios'
import { axiosConfig } from '@sbol/lib.app'

export const mapiRequestInterceptor = (rqConfig) => {
    rqConfig.headers['Content-Type'] = 'application/json'
    rqConfig.withCredentials = true

    return rqConfig
}

const {
    useMultipleInterceptors,
    rq,
    rs
} = axiosConfig

const axiosClientApi = axios.create()

useMultipleInterceptors(
    axiosClientApi,
    [
        mapiRequestInterceptor,
        rq.prolongERIBSession,
        rq.disableCache,
        rq.addRequestType,
        rq.checkSession,
        ...rs.defaultInterceptors,
        rs.logErrors
    ]
)

export { axiosClientApi }
