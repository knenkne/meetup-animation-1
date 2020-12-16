import * as types from '../../action-types'
import { axiosUFS } from '../../axios'
import { checkFeature } from '../../../../utils/check-feature'

export function fetchCarLoan () {
    return (dispatch) => new Promise((resolve, reject) => {
        if (checkFeature('ShowCarLoans', 'region.scaffold')) {
            dispatch({
                type: types.CAR_LOAN_LOADING
            })
            axiosUFS('/car-loan/v1/sbol/Banking/Products/Loans/CarLoans/Application/list', {
                method: 'POST',
                data: {
                    productType: 'CarLoan'
                }
            }).then(
                ({ data }) => {
                    dispatch({
                        type: types.CAR_LOAN_FETCH,
                        payload: data
                    })
                    resolve()
                },
                (error) => {
                    reject(error)
                    dispatch({
                        type: types.CAR_LOAN_ERROR
                    })
                }
            )
        }
    })
}
