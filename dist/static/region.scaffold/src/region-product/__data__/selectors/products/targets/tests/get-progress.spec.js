import { getProgress } from '../utils'
import {
    START,
    FINISH,
    LATE,
    SLOW,
    FINE_TEMPO,
    GREAT,
    OUTDATED
} from '../dictionaries'

import {
    xxsFreshTargetStart,
    xsFreshTargetStart,
    sFreshTargetStart,
    mFreshTargetStart,
    lFreshTargetStart,
    xlFreshTargetStart,

    xxsFreshTargetGreat,
    xsFreshTargetGreat,
    sFreshTargetGreat,
    mFreshTargetGreat,
    lFreshTargetGreat,
    xlFreshTargetGreat,

    xxsFreshTargetFineTempo,
    xsFreshTargetFineTempo,
    sFreshTargetFineTempo,
    mFreshTargetFineTempo,
    lFreshTargetFineTempo,
    xlFreshTargetFineTempo,

    xxsFreshTargetLate,
    xsFreshTargetLate,
    sFreshTargetLate,
    mFreshTargetLate,
    lFreshTargetLate,
    xlFreshTargetLate,

    xxsFreshTargetFinish,
    xsFreshTargetFinish,
    sFreshTargetFinish,
    mFreshTargetFinish,
    lFreshTargetFinish,
    xlFreshTargetFinish,

    sFreshTargetSlow,
    mFreshTargetSlow,
    lFreshTargetSlow,
    xlFreshTargetSlow
} from './fixture'

describe('getProgress: START', () => {
    const currentDate = new Date('2019', '06', '3')
    it('getProgress: Поздравляем — вы на старте! копить. XXS', () => {
        expect(getProgress(xxsFreshTargetStart, currentDate)).toBe(START)
    })
    it('getProgress: Поздравляем — вы на старте! копить. XS', () => {
        expect(getProgress(xsFreshTargetStart, currentDate)).toBe(START)
    })
    it('getProgress: Поздравляем — вы на старте! копить. S', () => {
        expect(getProgress(sFreshTargetStart, currentDate)).toBe(START)
    })
    it('getProgress: Поздравляем — вы на старте! копить. M', () => {
        expect(getProgress(mFreshTargetStart, currentDate)).toBe(START)
    })
    it('getProgress: Поздравляем — вы на старте! копить. L', () => {
        expect(getProgress(lFreshTargetStart, currentDate)).toBe(START)
    })
    it('getProgress: Поздравляем — вы на старте! копить. XL', () => {
        expect(getProgress(xlFreshTargetStart, currentDate)).toBe(START)
    })
})

describe('getProgress: GREAT', () => {
    const currentDate = new Date('2019', '06', '3')

    it('getProgress: Вы отлично справляетесь XXS', () => {
        expect(getProgress(xxsFreshTargetGreat, currentDate)).toBe(GREAT)
    })
    it('getProgress: Вы отлично справляетесь, XS', () => {
        expect(getProgress(xsFreshTargetGreat, currentDate)).toBe(GREAT)
    })
    it('getProgress: Вы отлично справляетесь, S', () => {
        expect(getProgress(sFreshTargetGreat, currentDate)).toBe(GREAT)
    })
    it('getProgress: Вы отлично справляетесь, M', () => {
        expect(getProgress(mFreshTargetGreat, currentDate)).toBe(GREAT)
    })
    it('getProgress: Вы отлично справляетесь, L', () => {
        expect(getProgress(lFreshTargetGreat, currentDate)).toBe(GREAT)
    })
    it('getProgress: Вы отлично справляетесь, XL', () => {
        expect(getProgress(xlFreshTargetGreat, currentDate)).toBe(GREAT)
    })
})

describe('getProgress: FINE_TEMPO', () => {
    it('getProgress: Отлично! Не сбавляйте темп XXS', () => {
        const currentDate = new Date('2019', '06', '4')
        expect(getProgress(xxsFreshTargetFineTempo, currentDate)).toBe(FINE_TEMPO)
    })
    it('getProgress: Отлично! Не сбавляйте темп XS', () => {
        const currentDate = new Date('2019', '06', '24')
        expect(getProgress(xsFreshTargetFineTempo, currentDate)).toBe(FINE_TEMPO)
    })
    it('getProgress: Отлично! Не сбавляйте темп S', () => {
        const currentDate = new Date('2019', '9', '4')
        expect(getProgress(sFreshTargetFineTempo, currentDate)).toBe(FINE_TEMPO)
    })
    it('getProgress: Отлично! Не сбавляйте темп M', () => {
        const currentDate = new Date('2020', '1', '4')
        expect(getProgress(mFreshTargetFineTempo, currentDate)).toBe(FINE_TEMPO)
    })
    it('getProgress: Отлично! Не сбавляйте темп L', () => {
        const currentDate = new Date('2020', '1', '4')
        expect(getProgress(lFreshTargetFineTempo, currentDate)).toBe(FINE_TEMPO)
    })
    it('getProgress: Отлично! Не сбавляйте темп XL', () => {
        const currentDate = new Date('2022', '9', '4')
        expect(getProgress(xlFreshTargetFineTempo, currentDate)).toBe(FINE_TEMPO)
    })
})

describe('getProgress: LATE', () => {
    it('getProgress: Вы отстаете от цели XXS', () => {
        const currentDate = new Date('2019', '06', '4')
        expect(getProgress(xxsFreshTargetLate, currentDate)).toBe(LATE)
    })
    it('getProgress: Вы отстаете от цели XS', () => {
        const currentDate = new Date('2019', '06', '24')
        expect(getProgress(xsFreshTargetLate, currentDate)).toBe(LATE)
    })
    it('getProgress: Вы отстаете от цели S', () => {
        const currentDate = new Date('2019', '9', '4')
        expect(getProgress(sFreshTargetLate, currentDate)).toBe(LATE)
    })
    it('getProgress: Вы отстаете от цели M', () => {
        const currentDate = new Date('2020', '1', '4')
        expect(getProgress(mFreshTargetLate, currentDate)).toBe(LATE)
    })
    it('getProgress: Вы отстаете от цели L', () => {
        const currentDate = new Date('2020', '1', '4')
        expect(getProgress(lFreshTargetLate, currentDate)).toBe(LATE)
    })
    it('getProgress: Вы отстаете от цели XL', () => {
        const currentDate = new Date('2022', '9', '4')
        expect(getProgress(xlFreshTargetLate, currentDate)).toBe(LATE)
    })
})

describe('getProgress: OUTDATED', () => {
    it('getProgress: Увы, цель просрочена. XXS', () => {
        const currentDate = new Date('2019', '06', '5')
        expect(getProgress(xxsFreshTargetLate, currentDate)).toBe(OUTDATED)
    })
    it('getProgress: Увы, цель просрочена. XS', () => {
        const currentDate = new Date('2021', '1', '4')
        expect(getProgress(xsFreshTargetLate, currentDate)).toBe(OUTDATED)
    })
    it('getProgress: Увы, цель просрочена. S', () => {
        const currentDate = new Date('2021', '1', '4')
        expect(getProgress(sFreshTargetLate, currentDate)).toBe(OUTDATED)
    })
    it('getProgress: Увы, цель просрочена. M', () => {
        const currentDate = new Date('2021', '1', '4')
        expect(getProgress(mFreshTargetLate, currentDate)).toBe(OUTDATED)
    })
    it('getProgress: Увы, цель просрочена. L', () => {
        const currentDate = new Date('2021', '1', '4')
        expect(getProgress(lFreshTargetLate, currentDate)).toBe(OUTDATED)
    })
    it('getProgress: Увы, цель просрочена. XL', () => {
        const currentDate = new Date('2026', '9', '4')
        expect(getProgress(xlFreshTargetLate, currentDate)).toBe(OUTDATED)
    })
})

describe('getProgress: FINISH', () => {
    const currentDate = new Date('2019', '06', '3')
    it('getProgress: Поздравляем — цель достигнута! XXS', () => {
        expect(getProgress(xxsFreshTargetFinish, currentDate)).toBe(FINISH)
    })
    it('getProgress: Поздравляем — цель достигнута! XS', () => {
        expect(getProgress(xsFreshTargetFinish, currentDate)).toBe(FINISH)
    })
    it('getProgress: Поздравляем — цель достигнута! S', () => {
        expect(getProgress(sFreshTargetFinish, currentDate)).toBe(FINISH)
    })
    it('getProgress: Поздравляем — цель достигнута! M', () => {
        expect(getProgress(mFreshTargetFinish, currentDate)).toBe(FINISH)
    })
    it('getProgress: Поздравляем — цель достигнута! L', () => {
        expect(getProgress(lFreshTargetFinish, currentDate)).toBe(FINISH)
    })
    it('getProgress: Поздравляем — цель достигнута! XL', () => {
        expect(getProgress(xlFreshTargetFinish, currentDate)).toBe(FINISH)
    })
})

describe('getProgress: SLOW', () => {
    it('getProgress: Не помешает ускориться. S', () => {
        const currentDate = new Date('2019', '9', '4')
        expect(getProgress(sFreshTargetSlow, currentDate)).toBe(SLOW)
    })
    it('getProgress: Не помешает ускориться. M', () => {
        const currentDate = new Date('2020', '1', '4')
        expect(getProgress(mFreshTargetSlow, currentDate)).toBe(SLOW)
    })
    it('getProgress: Не помешает ускориться. L', () => {
        const currentDate = new Date('2020', '1', '4')
        expect(getProgress(lFreshTargetSlow, currentDate)).toBe(SLOW)
    })
    it('getProgress: Не помешает ускориться. XL', () => {
        const currentDate = new Date('2022', '9', '4')
        expect(getProgress(xlFreshTargetSlow, currentDate)).toBe(SLOW)
    })
})
