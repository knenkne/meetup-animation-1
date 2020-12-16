import * as rq from './rq'
import * as rs from './rs'
import useMultipleInterceptors from './use-multiple-interceptors'

export const axiosConfig = {
    rq,
    rs,
    useMultipleInterceptors
}
