import { getProductMessage } from '../../../utils/get-product-message'

import { loanClaimsStatuses, autoLoanClaimsStatuses } from './dictionaries'

export const loanClaimsInfo = ({ state }) => {
    const {
        message = '',
        status = ''
    } = loanClaimsStatuses[state] || {}
    return {
        ...getProductMessage(message),
        notification: status
    }
}

export const autoLoanClaimsInfo = ({ status: state, statusName }) => {
    const {
        message = '',
        status = ''
    } = autoLoanClaimsStatuses[state] || {}
    return {
        ...getProductMessage(statusName || message),
        notification: status
    }
}

export const ufsClaimsInfo = ({ status: state, statusName }, statusesDictionary = []) => {
    const {
        message = '',
        status = ''
    } = statusesDictionary[state] || {}
    return {
        ...getProductMessage(statusName || message),
        notification: status
    }
}
