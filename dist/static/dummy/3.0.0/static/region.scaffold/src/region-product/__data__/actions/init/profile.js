import _ from 'lodash'
import { getConfigValue } from '@sbol/lib.app'
import { getPrefetch } from '@sbol/webpage.provider.bootstrap'

import * as types from '../../action-types'
import { axiosClientApi } from '../../axios'
import { isTrue } from '../../../personal-menu/utils/helpers'
import { isSbolPro } from '../../../../region-header/utils'
import { checkFeature } from '../../../../utils/check-feature'

const safeFunction = (fn) => typeof fn === 'function' ? fn : () => {}

export function fetchEmployee () {
    return (dispatch) => {
        const { employee } = safeFunction(getPrefetch)('region.products') || {}
        const api = `${getConfigValue('erib.url', '/')}${getConfigValue(
            'mapi.url',
            'api'
        )}`

        if (getConfigValue('isSbolPro', false)) {
            dispatch({
                type: types.EMPLOYEE_LOADING
            })
            if (_.isEmpty(employee)) {
                axiosClientApi(`${api}/private/getManagerInfo.do?type=SBOL_PRO`, {
                    method: 'POST',
                    data: {}
                })
                    .then(({ data }) => {
                        const sbolProEmployee = data.response.employees.employee
                        if (sbolProEmployee) {
                            dispatch({
                                type: types.EMPLOYEE_FETCH,
                                payload: {
                                    originalResponse: data.response,
                                    id: sbolProEmployee.id,
                                    fio: sbolProEmployee.name,
                                    address: `${_.get(
                                        sbolProEmployee.office,
                                        'postAddress',
                                        ''
                                    )}`
                                }
                            })
                        }
                    })
                    .catch(() => {
                        dispatch({
                            type: types.EMPLOYEE_ERROR
                        })
                    })
            } else {
                dispatch({
                    type: types.EMPLOYEE_FETCH,
                    payload: employee
                })
            }
        }
    }
}

export function fetchManager () {
    return async (dispatch) => {
        const prefetchedRequest = safeFunction(getPrefetch)('getManagerInfo.do') || {}
        const api = `${getConfigValue('erib.url', '/')}${getConfigValue(
            'mapi.url',
            'api'
        )}`
        let managerResponse = {}
        if (!_.isEmpty(prefetchedRequest)) {
            managerResponse = prefetchedRequest?.response
        } else {
            dispatch({
                type: types.MANAGER_LOADING
            })
            const request = await axiosClientApi(`${api}/private/getManagerInfo.do`, {
                method: 'POST',
                data: {}
            }).catch(() => {
                dispatch({
                    type: types.MANAGER_ERROR
                })
            })
            managerResponse = request.data?.response
        }

        if (managerResponse?.employees?.employee && !_.isEmpty(managerResponse?.employees?.employee)) {
            dispatch({
                type: types.MANAGER_FETCH,
                payload: {
                    managerList: managerResponse?.employees?.employee,
                    managerEmployeeStructure: true
                }
            })
        } else if (managerResponse?.name) {
            dispatch({
                type: types.MANAGER_FETCH,
                payload: {
                    managerList: [{
                        id: managerResponse?.id,
                        name: managerResponse?.name,
                        phone: managerResponse?.phone,
                        email: managerResponse?.email
                    }]
                }
            })
        } else {
            dispatch({
                type: types.MANAGER_ERROR
            })
        }
    }
}

export function fetchClient (props) {
    return async (dispatch) => {
        const prefetchedRequest = safeFunction(getPrefetch)('profile/info.do') || {}
        const api = `${getConfigValue('erib.url', '/')}${getConfigValue(
            'mapi.url',
            'api'
        )}`
        const {
            initialFetch = false
        } = props || {}

        let detail = {}

        if (initialFetch && !_.isEmpty(prefetchedRequest)) {

            const { detail: prefetchDetail = {} } = prefetchedRequest?.response || {}
            detail = prefetchDetail
            dispatch({
                type: types.PROFILE_FETCH,
                payload: detail
            })

        } else {

            dispatch({
                type: types.PROFILE_LOADING
            })
            const request = await axiosClientApi(`${api}/private/profile/info.do`, {
                method: 'POST',
                data: {}
            }).catch(() => {
                dispatch({
                    type: types.PROFILE_ERROR
                })
            })
            if (request) {
                const {
                    detail: fetchDetail = {}
                } = request?.data?.response || {}

                detail = fetchDetail
                dispatch({
                    type: types.PROFILE_FETCH,
                    payload: detail
                })
            }

        }

        const hasClientManager = detail?.hasClientManager

        if (checkFeature('ShowClientManagerInfo') && !isSbolPro && isTrue(hasClientManager)) {
            dispatch(fetchManager())
        }
    }
}
