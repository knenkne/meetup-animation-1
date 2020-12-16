import i18next from 'i18next'

export const WARNING = 'warning'
export const ARRESTED = 'arrested'
export const WAITING = 'waiting'
export const BAD_ATTENTION = 'bad-attention'
export const READY = 'ready'

export const ACTIVE = 'active'
export const BLOCKED = 'blocked'
export const DELIVERY = 'delivery'

export const DEBIT_CARD_CLAIM = 'UfsDebitCardClaim'
export const VIRTUAL_CARD_CLAIM = 'UfsVirtualCardClaim'
export const CREDIT_CARD_CLAIM = 'UfsCreditCardClaim'

export const iconDictionary = {
    blocked: 'icon:core/cards/mc36CardLock',
    ghost: 'icon:core/cards/mc36Default',
    default: 'icon:core/cards/mc36Visa'
}

export const typeDictionary = {
    credit: 'card.type.credit',
    corporate: 'card.type.corporate',
}

export const deliveryStatusDictionary = {
    ERIB_IR_INPRODUCTION: {
        name: 'card.delivery.inproduction',
        icon: WAITING
    },
    ERIB_IR_DELIVERING: {
        name: 'card.delivery.delivering',
        icon: READY
    },
    ERIB_IR_READY: {
        name: 'card.delivery.ready',
        icon: READY
    },
    ERIB_IR_CONTACTBANK: {
        name: 'card.delivery.contactbank',
        icon: WAITING
    },
    ERIB_IR_ELIMINATED: {
        name: 'card.delivery.eliminated',
        icon: BAD_ATTENTION
    },
    LOADING: {
        icon: WAITING
    },
    default: {
        name: 'card.delivery.unavailable',
        icon: WAITING
    }
}

/**
 * FIRST_REISSUE - первичный выпуск
 * REISSUE - досрочный перевыпуск
 * PLAN_REISSUE - плановый перевыпуск
 * REISSUE_PPRB - досрочный перевыпуск с миграцией из WAY4 в ППРБ
 * PLAN_REISSUE_PPRB - плановый перевыпуск с миграцией из WAY4 в ППРБ
 */
export const issueTypes = {
    FIRST_REISSUE: 0,
    REISSUE: 1,
    PLAN_REISSUE: 2,
    REISSUE_PPRB: 3,
    PLAN_REISSUE_PPRB: 4
}

export const loanCardClaimsFinished = [
    'REFUSED',
    'ERROR',
    'ISSUED'
]

export const cardClaimsFinished = [
    'EXECUTED',
    'REFUSED'
]

export const loanCardClaimsStatuses = {
    INITIAL: {
        message: 'card.loan.claim.initial',
    },
    REFUSED: {
        message: 'card.loan.claim.refused',
        status: BAD_ATTENTION
    },
    EXECUTED: {
        message: 'card.loan.claim.executed',
        status: READY
    },
    DISPATCHED: {
        message: 'card.loan.claim.dispatched',
        status: WAITING
    },
    ERROR: {
        message: 'card.loan.claim.error',
        status: BAD_ATTENTION
    },
    ISSUED: {
        message: 'card.loan.claim.issued',
        status: READY
    },
    APPROVED: {
        message: 'card.loan.claim.approved',
        status: WAITING
    },
    WAIT_CONFIRM: {
        message: 'card.loan.claim.wait.confirm',
        status: WAITING
    }
}

export const virtualCardClaimsStatuses = {
    INITIAL: {
        message: 'card.virtual.claim.initial'
    },
    SAVED: {
        message: 'card.virtual.claim.saved',
        status: WAITING
    },
    DISPATCHED: {
        message: 'card.virtual.claim.dispatched',
        status: WAITING
    },
    EXECUTED: {
        message: 'card.virtual.claim.executed',
        status: READY
    },
    REFUSED: {
        message: 'card.virtual.claim.refused',
        status: BAD_ATTENTION
    }
}

export const debitCardClaimsStatuses = {
    INITIAL: {
        message: 'card.debit.claim.initial'
    },
    SAVED: {
        message: 'card.debit.claim.saved',
        status: WAITING
    },
    EXECUTED: {
        message: 'card.debit.claim.executed',
        status: READY
    },
    REFUSED: {
        message: 'card.debit.claim.refused',
        status: BAD_ATTENTION
    }
}

export const cardClaimTitleDictionary = {
    [CREDIT_CARD_CLAIM]: {
        title: 'region.scaffold:card.loan.claim.title'
    },
    [DEBIT_CARD_CLAIM]: {
        title: 'region.scaffold:card.debit.claim.title'
    },
    [VIRTUAL_CARD_CLAIM]: {
        title: 'region.scaffold:card.virtual.claim.title'
    },

}

export const cardClaimTitle = (claim) => i18next.t(cardClaimTitleDictionary[claim.form]?.title) || claim.description
