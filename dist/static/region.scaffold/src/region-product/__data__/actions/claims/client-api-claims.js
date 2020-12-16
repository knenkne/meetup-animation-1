import _ from 'lodash'
import { getConfigValue, getOption } from '@sbol/lib.app'
import dateFns from 'date-fns'

import * as types from '../../action-types'
import { formatDate } from '../../utils/format-date'
import { axiosClientApi } from '../../axios'
import { checkFeature } from '../../../../utils/check-feature'

// По дефолту - три месяца
const DEFAULT_PRODUCTS_DEPTH_DAYS = 84
const PKG_NAME = 'region.scaffold'

export function fetchClaims () {
    return (dispatch) => {
        if (checkFeature('ShowLoanClaims', PKG_NAME) || checkFeature('ShowCardClaims', PKG_NAME)) {
            const api = `${getConfigValue('erib.url', '/')}${getConfigValue('mapi.url', 'api')}`
            const Depth2 = getOption('Depth2', PKG_NAME) || DEFAULT_PRODUCTS_DEPTH_DAYS
            return new Promise((resolve, reject) => {
                dispatch({
                    type: types.CLAIMS_LOADING
                })
                axiosClientApi(`${api}/private/payments/list.do`, {
                    method: 'POST',
                    params: {
                        from: formatDate(dateFns.addDays(new Date(), -Depth2)),
                        to: formatDate(new Date()),
                        paginationSize: 100,
                        paginationOffset: 0,
                        includeUfs: true,
                        showExternal: true,
                        filterName: 'UFSClaims'
                    }
                }).then(
                    ({ data }) => {
                        dispatch({
                            type: types.CLAIMS_FETCH,
                            payload: _.get(data, 'response.operations.operation', [])
                        })
                        resolve()
                    },
                    (error) => {
                        reject(error)
                        dispatch({
                            type: types.CLAIMS_ERROR
                        })
                    }
                )
            })
        }
        return {}
    }
}
