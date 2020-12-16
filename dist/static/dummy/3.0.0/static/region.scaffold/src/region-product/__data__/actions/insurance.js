import { getFeatureOption } from '@sbol/lib.app'

import * as types from '../action-types'
import { axiosUFS } from '../axios'

export function fetchContracts () {
    return (dispatch) => {
        const url = getFeatureOption('AccessInsuranceTab', 'api.contract.list.url')

        dispatch({
            type: types.INSURANCE_CONTRACTS_LOADING
        })

        axiosUFS(
            url,
            {
                method: 'POST',
                data: {},
            }
        ).then(({ data }) => {
            dispatch({
                type: types.INSURANCE_CONTRACTS_FETCH,
                payload: data
            })
        }).catch(() => {
            dispatch({
                type: types.INSURANCE_CONTRACTS_ERROR
            })
        })
    }
}
