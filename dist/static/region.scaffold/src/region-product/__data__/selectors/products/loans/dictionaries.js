import i18next from 'i18next'

import {
    BAD_ATTENTION,
    WAITING,
    READY
} from '../../../../personal-menu/utils/constants'
import { checkFeature } from '../../../../../utils/check-feature'

export const LOAN_CLAIM = 'UfsLoanClaim'
export const REFINANCING_CLAIM = 'UfsRefinancingClaim'

export const CONSUMER_SITE_UFS = 'consumerLoanSite'
export const CONSUMER_UFS = 'consumerLoan'
export const CAR_UFS = 'carLoan'
export const EKP_CAR_LOAN = 'ekpCarLoan'
export const MORTGAGE_UFS = 'mortgage'
export const REFINANCE_UFS = 'refinance'
export const CREDIT_CARD_UFS = 'creditCard'
export const IPOS_UFS = 'iPos'
export const EDUCATION_UFS = 'educationLoan'
export const PERSON_ORDER_UFS = 'personOrder'

export const LOAN_CLAIM_TITLE = 'loan.claim.title'

export const loanClaimsFinished = [
    'REFUSED',
    'ISSUED',
    'ERROR',
    'RECALLED'
]

export const ufsLoansClaimsFinished = [
    'EXECUTED',
]

export const ufsCarLoansClaimsFinished = [
    'INITIAL',
    'RECALLED',
    'DELETED'
]

export const ufsiPosFinished = [
    'INITIAL',
    'DEPO_EXECUTED',
    'TRANSFER_SUCCESSED',
    'PARTNER_INFORMED',
    'EXECUTED'
]

export const ufsMortgageFinished = [
    'INITIAL',
    'VISIT_REQUIRED',
    'EXECUTED'
]

export const loanClaimsStatuses = {
    INITIAL: {
        message: 'loan.claim.initial',
    },
    PREADOPTED: {
        message: 'loan.claim.preadopted',
        status: WAITING
    },
    DISPATCHED: {
        message: 'loan.claim.dispatched',
        status: WAITING
    },
    REFUSED: {
        message: 'loan.claim.refused',
        status: BAD_ATTENTION
    },
    ACCEPTED_WAIT_DELIVERY: {
        message: 'loan.claim.accepted.wait.delivery',
        status: READY
    },
    WAIT_CONFIRM: {
        message: 'loan.claim.wait.confirm',
        status: WAITING
    },
    APPROVED: {
        message: 'loan.claim.approved',
        status: READY
    },
    ISSUED: {
        message: 'loan.claim.executed',
        status: READY
    },
    APPROVED_MUST_CONFIRM: {
        message: 'loan.claim.approved.oferta',
        status: WAITING
    },
    ERROR: {
        message: 'loan.claim.error',
        status: BAD_ATTENTION
    },
    RECALLED: {
        message: 'loan.claim.recalled',
        status: BAD_ATTENTION
    },
    VISIT_REQUIRED: {
        message: 'loan.claim.visit.required',
        status: WAITING
    }
}

export const loanUfsClaimsStatuses = {
    INITIAL: {
        message: 'loan.claim.initial',
    },
    DISPATCHED: {
        message: 'ufs.consumer.dispatched',
        status: WAITING
    },
    DISPATCHED_CP: {
        message: 'ufs.consumer.dispatched.cp',
        status: WAITING
    },
    DISPATCHED_ISSUE: {
        message: 'ufs.consumer.dispatched.issue',
        status: WAITING
    },
    WAIT_CONFIRM: {
        message: 'ufs.consumer.wait.confirm',
        status: WAITING
    },
    WAITING_OFFER: {
        message: 'ufs.consumer.waiting.offer',
        status: WAITING
    },
    ACCEPTED_WAIT_DELIVERY: {
        message: 'ufs.consumer.accepted.wait.delivery',
        status: READY
    },
    NEED_UPDATE: {
        message: 'ufs.consumer.need.update',
        status: WAITING
    },
    VISIT_REQUIRED: {
        message: 'ufs.consumer.visit.required',
        status: READY
    },
    RECALLED: {
        message: 'ufs.consumer.recalled',
        status: READY
    },
    PREADOPTED: {
        message: 'ufs.consumer.preadopted',
        status: READY
    },
    REFUSED: {
        message: 'ufs.consumer.refused',
        status: BAD_ATTENTION
    },
    APPROVED: {
        message: 'ufs.consumer.approved',
        status: READY
    },
    ISSUED: {
        message: 'ufs.consumer.issued',
        status: READY
    },
    APPROVED_MUST_CONFIRM: {
        message: 'ufs.consumer.approved.must.confirm',
        status: WAITING
    },
    ERROR: {
        message: 'ufs.consumer.error',
        status: BAD_ATTENTION
    },
    MORATORY: {
        message: 'ufs.consumer.error',
        status: BAD_ATTENTION
    },
    FRAUD_DENY: {
        message: 'ufs.consumer.fraud.deny',
        status: BAD_ATTENTION
    }
}

export const autoLoanClaimsStatuses = {
    INITIAL: {
        message: 'auto.loan.claim.initial'
    },
    REFUSED: {
        message: 'auto.loan.claim.refused',
        status: BAD_ATTENTION
    },
    EXECUTED: {
        message: 'auto.loan.claim.executed',
        status: READY
    },
    DISPATCHED: {
        message: 'auto.loan.claim.dispatched',
        status: WAITING
    },
    ERROR: {
        message: 'auto.loan.claim.error',
        status: BAD_ATTENTION
    },
}

export const iPosClaimsStatuses = {
    ACCEPTED_WAIT_DELIVERY: {
        message: 'ufs.ipos.accepted.wait.delivery',
        status: WAITING
    },
    DISPATCHED: {
        message: 'ufs.ipos.dispatched',
        status: WAITING
    },
    APPROVED: {
        message: 'ufs.ipos.approved',
        status: READY
    },
    DEPO_REFUSED: {
        message: 'ufs.ipos.depo.refused',
        status: BAD_ATTENTION
    },
    TRANSFER_NOT_SUCCESSED: {
        message: 'ufs.ipos.transfer.not.successed',
        status: BAD_ATTENTION
    },
    FINANCIAL: {
        message: 'ufs.ipos.financial',
        status: BAD_ATTENTION
    },
    MORATORY: {
        message: 'ufs.ipos.moratory',
        status: BAD_ATTENTION
    },
    RECALLED: {
        message: 'ufs.ipos.recalled',
        status: BAD_ATTENTION
    },
    REFUSED: {
        message: 'ufs.ipos.refused',
        status: BAD_ATTENTION
    },
    EXPIRED: {
        message: 'ufs.ipos.expired',
        status: BAD_ATTENTION
    }
}

export const mortgageClaimsStatuses = {
    DISPATCHED: {
        message: 'ufs.mortgage.dispatched',
        status: WAITING
    },
    NEED_UPDATE: {
        message: 'ufs.mortgage.need.update',
        status: WAITING
    },
    WAIT_CONFIRM: {
        message: 'ufs.mortgage.wait.confirm',
        status: WAITING
    },
    ACCEPTED_WAIT_DELIVERY: {
        message: 'ufs.mortgage.accepted.wait.delivery',
        status: WAITING
    },
    APPROVED: {
        message: 'ufs.mortgage.approved',
        status: READY
    },
    REFUSED: {
        message: 'ufs.mortgage.refused',
        status: BAD_ATTENTION
    },
    MORATORY: {
        message: 'ufs.mortgage.moratory',
        status: BAD_ATTENTION
    },
    ERROR: {
        message: 'ufs.mortgage.error',
        status: BAD_ATTENTION
    }
}

export const educationClaimsStatuses = {
    INITIAL: {
        message: 'ufs.education.initial',
        status: WAITING
    },
    WAITING_OFFER: {
        message: 'ufs.education.waiting.offer',
        status: READY
    },
    APPROVED: {
        message: 'ufs.education.approved',
        status: READY
    },
    MORATORY: {
        message: 'ufs.education.moratory',
        status: BAD_ATTENTION
    },
    REFUSED: {
        message: 'ufs.education.refused',
        status: BAD_ATTENTION
    },
    EXECUTED: {
        message: 'ufs.education.executed',
        status: READY
    },
    ISSUED: {
        message: 'ufs.education.issued',
        status: READY
    },
    ERROR: {
        message: 'ufs.education.error',
        status: BAD_ATTENTION
    },
    FRAUD_DENY: {
        message: 'ufs.education.fraud.deny',
        status: BAD_ATTENTION
    },
    DISPATCHED_ISSUE: {
        message: 'ufs.education.dispatched.issue',
        status: WAITING
    },
    DISPATCHED: {
        message: 'ufs.education.dispatched',
        status: WAITING
    },
    RECALLED: {
        message: 'ufs.education.recalled',
        status: BAD_ATTENTION
    },
    VISIT_REQUIRED: {
        message: 'ufs.education.visit.required',
        status: WAITING
    },
    ACCEPTED_WAIT_DELIVERY: {
        message: 'ufs.education.accepted.wait.delivery',
        status: WAITING
    }
}

// name используется для определения иконок
export const loanIconDictionary = {
    ghost: 'icon:products/common/ic36CirclePlus',
    auto: {
        icon: 'icon:products/common/ic36Car',
        name: 'loan.type.auto'
    },
    consumer: {
        icon: 'icon:products/common/ic36Wallet',
        name: 'loan.type.consumer'
    },
    mortgage: {
        icon: 'icon:products/common/ic36House',
        name: 'loan.type.mortgage'
    },
    refinance: {
        icon: 'icon:products/common/ic36HousePercent',
        name: 'loan.type.refinance'
    },
    education: {
        icon: 'icon:products/common/ic36StudentHat',
        name: 'loan.type.education'
    },
    personOrder: {
        icon: 'icon:products/common/ic36Wallet',
        name: 'loan.type.personOrder'
    },
    waiting: 'icon:products/common/ic36Clock'
}

export const loanClaimTitleDictionary = {
    [LOAN_CLAIM]: {
        title: LOAN_CLAIM_TITLE
    },
    [REFINANCING_CLAIM]: {
        title: 'refinancing.claim.title'
    },
    [CONSUMER_SITE_UFS]: {
        title: LOAN_CLAIM_TITLE
    },
    [CONSUMER_UFS]: {
        title: LOAN_CLAIM_TITLE
    },
    [IPOS_UFS]: {
        title: 'ipos.claim.title'
    },
    [CAR_UFS]: {
        title: 'auto.claim.title'
    },
    [MORTGAGE_UFS]: {
        title: 'mortgage.claim.title'
    },
    [REFINANCE_UFS]: {
        title: 'refinancing.claim.title'
    },
    [EDUCATION_UFS]: {
        title: 'education.claim.title'
    }
}

export const getUfsLoanIcon = (loan) => {
    const { auto, consumer, mortgage, refinance, education, personOrder } = loanIconDictionary
    switch (loan?.loanType) {
        case CAR_UFS:
        case EKP_CAR_LOAN:
            return auto.icon
        case MORTGAGE_UFS:
            return mortgage.icon
        case REFINANCE_UFS:
            return refinance.icon
        case EDUCATION_UFS:
            return education.icon
        case PERSON_ORDER_UFS:
            return personOrder.icon
        default:
            return consumer.icon
    }
}

export const getEribLoanIcon = (loan) => {
    const { auto, consumer, mortgage, refinance } = loanIconDictionary
    const loanName = loan.name.toLowerCase()

    switch (true) {
        case loanName.includes(i18next.t(auto.name)):
            return auto.icon
        case loanName.includes(i18next.t(mortgage.name)):
            return mortgage.icon
        case loanName.includes(i18next.t(refinance.name)):
            return refinance.icon
        default:
            return consumer.icon
    }
}

export const loanIcon = (loan) => {

    if (checkFeature('NewLoanService')) {
        return getUfsLoanIcon(loan)
    }

    return getEribLoanIcon(loan)
}


export const loanClaimTitle = (claim) => i18next.t(loanClaimTitleDictionary[claim.form]?.title) || claim.description
