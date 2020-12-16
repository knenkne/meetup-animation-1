export const READY = 'ready'
export const BAD_ATTENTION = 'bad-attention'

export const FINISH = 'FINISH'
export const START = 'START'
export const SLOW = 'SLOW'
export const FINE_TEMPO = 'FINE_TEMPO'
export const GREAT = 'GREAT'
export const LATE = 'LATE'
export const OUTDATED = 'OUTDATED'

export const XXS = 'XXS'
export const XS = 'XS'
export const S = 'S'
export const M = 'M'
export const L = 'L'
export const XL = 'XL'


export const iconDictionary = {
    OTHER: {
        icon: 'icon:products/common/ic36StarLight'
    },
    AUTO: {
        icon: 'icon:products/common/ic36Car'
    },
    EDUCATION: {
        icon: 'icon:products/common/ic36StudentHat'
    },
    RESERVE: {
        icon: 'icon:products/common/ic36Wallet'
    },
    RENOVATION: {
        icon: 'icon:products/common/ic36Wrench'
    },
    VACATION: {
        icon: 'icon:products/common/ic36BeachUmbrella'
    },
    APPLIANCE: {
        icon: 'icon:products/common/ic36TvSet'
    },
    FURNITURE: {
        icon: 'icon:products/common/ic36TableLamp'
    },
    BUSINESS: {
        icon: 'icon:products/common/ic36Case'
    },
    ESTATE: {
        icon: 'icon:products/common/ic36House'
    },
    HOLIDAYS: {
        icon: 'icon:products/common/ic36Balloon'
    },
    ghost: {
        icon: 'icon:products/common/ic36StarLight'
    }
}

export const progressDictionary = {
    START: {
        text: 'target.start',
    },
    GREAT: {
        text: 'target.great',
        status: READY,
        color: '#0da94e'
    },
    SLOW: {
        text: 'target.slow',
        status: BAD_ATTENTION,
        color: '#f6650a'

    },
    FINE_TEMPO: {
        text: 'target.fine.tempo',
        color: '#0da94e'
    },
    LATE: {
        text: 'target.late',
        status: BAD_ATTENTION,
        color: '#f6650a'

    },
    OUTDATED: {
        text: 'target.outdated',
        status: BAD_ATTENTION,
        color: '#f6650a'
    },
    FINISH: {
        text: 'target.finish',
        status: READY,
        color: '#0da94e'
    }
}
