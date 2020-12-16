import _ from 'lodash'

import { log } from '../log'

const defaultResolve = (...args) => Promise.resolve(...args)

const defaultReject = (reason) => Promise.reject(reason)

/**
 * Enhance axios instance with multiple interceptors both request and response
 * @param {Object} axiosInstance - axios instance
 * @param {Array} interceptors - list of interceptors; function is treated as
 *      request interceptor, object is treated as response interceptor
 * @return {Object} - enhanced axios instance
 */
export default (axiosInstance, interceptors) => {
    // Eject all interceptors if function is called for the second time
    if (axiosInstance.__sbol__withInterceptors) {
        axiosInstance.interceptors.request.forEach(axiosInstance.interceptors.request.eject)
        axiosInstance.interceptors.response.forEach(axiosInstance.interceptors.response.eject)
    }

    axiosInstance.__sbol__withInterceptors = true
    _.forEach(interceptors, (interceptor) => {
        if (_.isFunction(interceptor)) {
            axiosInstance.interceptors.request.use(interceptor)
        } else if (_.isFunction(interceptor.handleSuccess) || _.isFunction(interceptor.handleError)) {
            axiosInstance.interceptors.response.use(
                interceptor.handleSuccess || defaultResolve,
                interceptor.handleError || defaultReject
            )
        }
    })

    return axiosInstance
}
