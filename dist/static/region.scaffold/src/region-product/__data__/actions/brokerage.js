import _ from 'lodash'

import * as types from '../action-types'
import { axiosUFS } from '../axios'
import { checkFeature } from '../../../utils/check-feature'
import { errorCodes } from '../selectors/products/brokerage'


export function fetchBrokerageContracts () {
    return (dispatch) => {
        if (checkFeature('AccessBrokerageTab', 'region.scaffold')) {
            dispatch({
                type: types.BROKERAGE_LOADING
            })
            axiosUFS('/brokerage-info-ib/rest/v1.0/ib/Banking/Product/Brokerage/Registry/List', {
                method: 'POST',
                data: {}

            }).then(({ data }) => {
                if (data.success || _.includes(errorCodes, data.error.code)) {
                    dispatch({
                        type: types.BROKERAGE_FETCH,
                        payload: data
                    })
                } else {
                    dispatch({
                        type: types.BROKERAGE_ERROR
                    })
                }
            }).catch(() => dispatch({
                type: types.BROKERAGE_ERROR,
            }))
        }
    }
}

