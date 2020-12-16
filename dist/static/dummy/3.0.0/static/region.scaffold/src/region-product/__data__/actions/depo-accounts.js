import { getConfigValue } from '@sbol/lib.app'

import * as types from '../action-types'
import { axiosClientApi } from '../axios'

export function fetchDepoAccounts () {
    return (dispatch) => {
        const api = `${getConfigValue('erib.url', '/')}${getConfigValue('mapi.url', 'api')}`
        dispatch({
            type: types.DEPO_ACCOUNTS_LOADING
        })

        axiosClientApi(
            `${api}/private/products/list.do?showProductType=depoaccounts`,
            {
                method: 'POST',
                data: {},
            }
        ).then(({ data }) => {
            // ериб может прислать разный регистр
            const depoaccount = data?.response?.depoAccounts?.depoAccount || data?.response?.depoaccounts?.depoaccount
            dispatch({
                type: types.DEPO_ACCOUNTS_FETCH,
                payload: depoaccount
            })
        }).catch(() => {
            dispatch({
                type: types.DEPO_ACCOUNTS_ERROR
            })
        })
    }
}

