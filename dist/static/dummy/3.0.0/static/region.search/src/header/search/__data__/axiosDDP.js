import axios from 'axios'
import { axiosConfig } from '@sbol/lib.app'

const {
    useMultipleInterceptors,
    rq,
    rs
} = axiosConfig

const ddpClientApi = axios.create({})

useMultipleInterceptors(
    ddpClientApi,
    [
        rq.useApiRoot,
        rq.prolongERIBSession,
        rq.disableCache,
        rq.addRequestType,
        rq.checkSession,
        ...rs.defaultInterceptors,
        rs.logErrors
    ]
)

export default ddpClientApi
