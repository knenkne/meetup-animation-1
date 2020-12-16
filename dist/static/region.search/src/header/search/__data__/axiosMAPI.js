import axios from 'axios'
import { axiosConfig } from '@sbol/lib.app'

const {
    useMultipleInterceptors,
    rq,
    rs
} = axiosConfig

const mApiClientApi = axios.create({})

useMultipleInterceptors(
    mApiClientApi,
    [
        rq.useMapiRoot,
        rq.prolongERIBSession,
        rq.disableCache,
        rq.addRequestType,
        rq.checkSession,
        ...rs.defaultInterceptors,
        rs.logErrors
    ]
)

export default mApiClientApi
