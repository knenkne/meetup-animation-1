import * as types from '../action-types'
import { axiosUFS } from '../../__data__/axios'
import { checkFeature } from '../../../utils/check-feature'

export function fetchInvestments () {
    return (dispatch) => {

        if (checkFeature('AccessInvestmentTab', 'region.scaffold')) {
            dispatch({
                type: types.INVESTMENTS_LOADING
            })
            axiosUFS('/bh-ubagreements-ib/v3.0/ib/banking/products/investments/contract/list', {
                method: 'POST',
                data: {
                    productCategories: ['cat_opif', 'cat_iis', 'cat_dy']
                }

            }).then(({ data }) => {
                dispatch({
                    type: types.INVESTMENTS_FETCH,
                    payload: data
                })

            }).catch(() => {
                dispatch({
                    type: types.INVESTMENTS_ERROR,
                })
            })
        }
    }
}

