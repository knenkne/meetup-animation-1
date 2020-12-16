import axios from 'axios'
import { axiosConfig } from '@sbol/lib.app'

import {
    antifraudHeadersWorkflow,
    designVersions,
    valueParser
} from '../interceptors/rq'
import {
    platformErrorCheck,
    protocolMapper,
    apiLinks
} from '../interceptors/rs'

const { useMultipleInterceptors, rq, rs } = axiosConfig

// TODO: Get UFS interceptors from lib.app
const commonRqInterceptors = [
    rq.prolongERIBSession,
    rq.useUfsBlockRoot,
]

const commonRsInterceptors = [
    rs.reopenSession,
    rs.logErrors,
]

const workflowRqInterceptors = [
    ...commonRqInterceptors,
    antifraudHeadersWorkflow,
    designVersions,
    valueParser
]

const workflowRsInterceptors = [
    ...commonRsInterceptors,
    platformErrorCheck,
    protocolMapper,
    apiLinks
]

const getHttpClient = (
    customRqInterceptors = [],
    customRsInterceptors = []
) =>
    useMultipleInterceptors(axios.create(), [
        ...workflowRqInterceptors,
        ...customRqInterceptors,
        ...customRsInterceptors,
        ...workflowRsInterceptors
    ])

export const defaultHttpClient = getHttpClient()

export const httpClientRequest = (url, params, data, rqInterceptors, rsInterceptors, cancelToken) => {
    const extendedHttpClient = rqInterceptors.length || rsInterceptors.length
        ? getHttpClient(rqInterceptors, rsInterceptors)
        : defaultHttpClient

    return extendedHttpClient({
        method: 'post',
        url,
        params,
        data,
        cancelToken
    })
}
