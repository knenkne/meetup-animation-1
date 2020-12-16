import * as rq from './rq'
import * as rs from './rs'

export const axiosConfig = {
    rq,
    rs,
    useMultipleInterceptors: () => {}
}
