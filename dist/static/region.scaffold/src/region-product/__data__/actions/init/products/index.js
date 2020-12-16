import { checkFeature } from '../../../../../utils/check-feature'

import { fetchMainScreen } from './main-screen'
import { fetchEribProducts } from './products'

export const fetchProducts = (params) => (dispatch) => {
    if (checkFeature('AllowMainScreenRequest')) {
        dispatch(fetchMainScreen(params))
    } else {
        dispatch(fetchEribProducts(params))
    }
}
