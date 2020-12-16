import _ from 'lodash'
import { getConfigValue } from '@sbol/lib.app'

import * as types from '../../../action-types'
import { axiosClientApi } from '../../../axios'

export function fetchEribProducts (props) {
    return (dispatch) => {
        const api = `${getConfigValue('erib.url', '/')}${getConfigValue(
            'mapi.url',
            'api'
        )}`

        dispatch({
            type: types.PRODUCTS_LOADING,
            initialFetch: _.get(props, 'initialFetch', false)
        })

        axiosClientApi(`${api}/private/products/list.do`, {
            method: 'POST',
            params: {
                showProductType: props?.showProductType,
                useCorporateCards: true
            },
            data: {}
        }).then(({ data }) => {
            dispatch({
                type: types.PRODUCTS_FETCH,
                payload: {
                    // ериб не присылает депо и кредиты в полном объеме,
                    // для них нужен дозапрос,
                    // уберем из ответа чтобы не смущать компонент
                    ..._.omit(data.response, ['loans', 'depoaccounts', 'depoAccounts'])
                }
            })
        }).catch(() => {
            dispatch({
                type: types.PRODUCTS_ERROR
            })
        })
    }
}
