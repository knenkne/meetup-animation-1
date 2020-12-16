import { checkFeature } from '../../../../utils/check-feature'
import { fetchCarLoan } from '../claims'
import { fetchCreditability } from '../creditability'

import * as legacyLoans from './legacy-loans'
import * as ufsLoans from './ufs-loans'

export {
    ufsLoans,
    legacyLoans
}

export function fetchLoans () {
    return (dispatch) => {
        // Старый сервис не присылает автокредиты,
        // запрашиваем их отдельно
        if (checkFeature('NewLoanService')) {
            dispatch(ufsLoans.fetchUfsLoans())
        } else {
            dispatch(legacyLoans.fetchLegacyLoans())
            dispatch(fetchCarLoan())
        }
        dispatch(fetchCreditability())
    }
}
