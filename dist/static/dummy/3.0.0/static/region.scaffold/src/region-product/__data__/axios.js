import axios from 'axios'
import { axiosConfig } from '@sbol/lib.app'

const axiosClientApi = axios.create()
const axiosUFS = axios.create()

const {
    useMultipleInterceptors,
    rq,
    rs
} = axiosConfig

useMultipleInterceptors(
    axiosClientApi,
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

useMultipleInterceptors(
    axiosUFS,
    [
        ...rq.defaultInterceptors,
        ...rs.defaultInterceptors,
        rs.logErrors
    ]
)

export { axiosClientApi, axiosUFS }

