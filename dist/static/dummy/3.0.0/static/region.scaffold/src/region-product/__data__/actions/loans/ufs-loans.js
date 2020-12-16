import { getFeatureOption } from '@sbol/lib.app'

import * as types from '../../action-types'
import { axiosUFS } from '../../../__data__/axios'

const url = getFeatureOption(
    'AccessLoansTab',
    'api.list',
    'region.scaffold'
) || '/ib-dashboard-bh/person-credit/v1/ib/banking/products/loans/application/list'

const loansParam = getFeatureOption(
    'AccessLoansTab',
    'api.list.loansParam',
    'region.scaffold'
) || 'headers'

export function fetchUfsLoans () {
    return (dispatch) => {
        dispatch({
            type: types.LOANS_LOADING,
        })

        axiosUFS(
            url,
            { method: 'POST', data: {} }
        )
            .then(
                ({ data }) => {
                    const {
                        body,
                        success,
                        error,
                    } = data
                    const defaultCurrency = 'RUB'

                    dispatch({
                        type: types.LOANS_FETCH,
                        payload: {
                            success,
                            error,
                            loan: body?.[loansParam]?.map((loan) => ({
                                id: loan?.id,
                                name: loan?.alias || loan?.title,
                                loanType: loan?.loanType,
                                productType: loan?.id,
                                nextPayAmount: {
                                    amount: loan?.nextPaymentSum,
                                    currency: {
                                        code: loan.currency || defaultCurrency,
                                    },
                                },
                                remainAmount: {
                                    amount: loan?.totalLoanDebt,
                                    currency: {
                                        code: loan.currency || defaultCurrency,
                                    },
                                },
                            })),
                            ufsClaimList: body?.applications?.map((loan) => ({
                                ...loan,
                                form: loan.loanType,
                            })),
                            paymentOrders: body?.orders?.map((order) => ({
                                id: order?.id,
                                title: order?.title,
                                orderType: order?.orderType,
                                loanType: order?.orderType,
                                periodPaymentMessage: order?.periodPaymentMessage,
                                isClickable: order?.isClickable,
                            })),
                            loanListReceive: body?.loanListReceive,
                            applicationReceive: body?.applicationReceive,
                        },
                    })
                },
                () => {
                    dispatch({
                        type: types.LOANS_ERROR,
                    })
                }
            )
    }
}
