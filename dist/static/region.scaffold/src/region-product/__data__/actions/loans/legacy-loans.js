import { getConfigValue, log } from '@sbol/lib.app'

import { checkFeature } from '../../../../utils/check-feature'
import { mulptipleFetch } from '../../utils/mulptiple-fetch'
import * as types from '../../action-types'
import { axiosClientApi } from '../../axios'

export function fetchOffer () {
    return (dispatch) => {
        if (checkFeature('ShowCreditCardGhost', 'region.scaffold')) {
            const api = `${getConfigValue('erib.url', '/')}${getConfigValue('mapi.url', 'api')}`
            axiosClientApi(`${api}/private/loan/loanOffer/show.do`, {
                method: 'POST',
                data: {},
            }).then(({ data }) => {
                dispatch({
                    type: types.LOAN_OFFER_FETCH,
                    payload: data.response
                })
            })
        }
        return {}
    }
}

export function fetchLoanInfo (id) {
    return new Promise((resolve, reject) => {
        axiosClientApi(`/private/loans/info.do?id=${id}`, {
            method: 'POST',
            data: {},
        }).then(
            ({ data }) => {
                const remainAmount = data?.response?.detail?.remainAmount || data?.response?.extDetail?.remainAmount
                resolve({
                    id,
                    remainAmount: {
                        amount: remainAmount?.amount,
                        currency: remainAmount?.currency
                    }
                })
            },
            (error) => {
                reject(error)
            }
        )
    })
}

export function fetchLegacyLoans () {
    return (dispatch) => {
        const api = `${getConfigValue('erib.url', '/')}${getConfigValue('mapi.url', 'api')}`
        dispatch({
            type: types.LOANS_LOADING,
        })
        axiosClientApi(`${api}/private/products/list.do?showProductType=loans`, {
            method: 'POST',
            data: {},
        }).then(
            ({ data }) => {
                dispatch({
                    type: types.LOANS_FETCH,
                    payload: data.response.loans
                })
                // eslint-disable-next-line promise/no-nesting, comment: запрос инфо для каждого кредита
                mulptipleFetch(
                    data.response.loans.loan.map(({ id }) => () => fetchLoanInfo(id))
                ).then((res) => {
                    dispatch({
                        type: types.LOANS_INFO_FETCH,
                        payload: res.map((item) => item.value)
                    })
                })
            },
            (error) => {
                log.error(error)
                dispatch({
                    type: types.LOANS_ERROR
                })
            }
        )
    }
}
