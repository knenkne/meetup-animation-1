import {
    isExpired,
    isExpireThisMonth,
    getDifferenceInDays,
    getCardDate,
    isBalanceNegative,
    getExpireDateInfo,
    isTemporarilyBlockedVisible,
    isCardVisible,
    isPretermCardPPRB,
    isCardMigratedToPPRB,
    getSortedCardsPPRB
} from '../utils'

import {
    statusWay4CVisible,
    statusWay4CHidden,
    statusWay4gVisible,
    statusWay4KHidden,
    statusWay4KVisible,
    statusWay4UHidden,
    statusWay4UVisible,
    statusDelivery,
    cardPPRB,
    cardMigratedToPPRB,
    sort3PPRBcards,
    sort2PPRBwith1prevCardId,
    sort2PPRBwith1newCardId,
    sort2PPRBwith2PPRBwith1notPPRBandBunchOfRegularCards,
    sort2PlannedPPRBwith1newCardId,
    sort2PlannedPPRBwith2reissuedPPRB
} from './fixture'

describe('Utils для карт:', () => {
    it('isExpired', () => {
        expect(isExpired(new Date('2019', '02', '01'), new Date('2018', '02', '01'))).toBe(true)
        expect(isExpired(new Date('2019', '02', '01'), new Date('2019', '02', '01'))).toBe(false)
    })
    it('isExpireThisMonth', () => {
        expect(isExpireThisMonth(new Date('2019', '02', '15'), new Date('2018', '02'))).toBe(false)
        expect(isExpireThisMonth(new Date('2019', '02', '15'), new Date('2020', '02'))).toBe(false)
        expect(isExpireThisMonth(new Date('2019', '02', '15'), new Date('2019', '02'))).toBe(true)
    })
    it('getDifferenceInDays', () => {
        expect(getDifferenceInDays(new Date('2019', '02', '28'), new Date('2019', '02', '1'))).toBe(27)
    })
    it('getExpireDateInfo: getDifferenceInDays', () => {
        expect(getExpireDateInfo('11/2019', new Date('2019', '10', '22')).differenceInDays).toBe(8)
    })
    it('getCardDate', () => {
        expect(new Date('03/2022').toString()).toBe('Invalid Date')
        expect(getCardDate('03/2022').toString()).toBe('Tue Mar 01 2022 00:00:00 GMT+0300 (Moscow Standard Time)')
        expect(getCardDate('03/22').toString()).toBe('Tue Mar 01 2022 00:00:00 GMT+0300 (Moscow Standard Time)')
    })
    it('isBalanceNegative', () => {
        expect(isBalanceNegative({
            availableLimit: {
                amount: '-8787.50'
            }
        })).toBe(true)
        expect(isBalanceNegative({
            availableLimit: {
                amount: '-8787,50'
            }
        })).toBe(true)
        expect(isBalanceNegative({
            availableLimit: {
                amount: -9696.50
            }
        })).toBe(true)
        expect(isBalanceNegative({
            availableLimit: {
                amount: -9696
            }
        })).toBe(true)
        expect(isBalanceNegative({
            availableLimit: {
                amount: 9696
            }
        })).toBe(false)
    })
    it('isBalanceNegative if amount === 0', () => {
        expect(isBalanceNegative({
            availableLimit: {
                amount: 0
            }
        })).toBe(false)
    })

    it('is card PPRB ', () => {
        expect(isPretermCardPPRB(cardPPRB)).toBe(true)
        expect(isPretermCardPPRB(cardMigratedToPPRB)).toBe(false)
    })

    it('is card migrated to PPRB', () => {
        expect(isCardMigratedToPPRB(cardMigratedToPPRB, 111111)).toBe(true)
        expect(isCardMigratedToPPRB(cardMigratedToPPRB, 123456)).toBe(false)
    })
})

describe('isTemporarilyBlockedVisible', () => {
    it('Карта показывается', () => {
        expect(
            isTemporarilyBlockedVisible(
                { blockInfoReceived: '7.06.2020' },
                '5',
                new Date(2020, 5, 10)
            )
        ).toBe(true)

    })
    it('Карты скрыта', () => {
        expect(
            isTemporarilyBlockedVisible(
                { blockInfoReceived: '1.06.2020' },
                '5',
                new Date(2020, 5, 10)
            )
        ).toBe(false)
    })
})

describe('isCardVisible', () => {
    it('Карта statusWay4 === C видна', () => {
        expect(
            isCardVisible(
                statusWay4CVisible,
                {
                    showBlockedCardsTerm: '5',
                    showBlockedCardsTerm2: '14'
                },
                new Date(2020, 5, 10)
            )
        ).toBe(true)
    })
    it('Карта statusWay4 === C скрыта', () => {
        expect(
            isCardVisible(
                statusWay4CHidden,
                {
                    showBlockedCardsTerm: '5',
                    showBlockedCardsTerm2: '14'
                },
                new Date(2020, 5, 10)
            )
        ).toBe(false)
    })
    it('При userProperties === true скрытая карта statusWay4 === C видна', () => {
        expect(
            isCardVisible(
                statusWay4CHidden,
                {
                    showBlockedCardsTerm: '5',
                    showBlockedCardsTerm2: '14',
                    userProps: true
                },
                new Date(2020, 5, 10)
            )
        ).toBe(true)
    })
    it('Карта statusWay4 === U видна', () => {
        expect(
            isCardVisible(
                statusWay4UVisible,
                {
                    showBlockedCardsTerm: '5',
                    showBlockedCardsTerm2: '14'
                },
                new Date(2020, 5, 10)
            )
        ).toBe(true)
    })
    it('Карта statusWay4 === U скрыта', () => {
        expect(
            isCardVisible(
                statusWay4UHidden,
                {
                    showBlockedCardsTerm: '5',
                    showBlockedCardsTerm2: '14'
                },
                new Date(2020, 5, 10)
            )
        ).toBe(false)
    })
    it('При userProperties === true скрытая карта statusWay4 === U видна', () => {
        expect(
            isCardVisible(
                statusWay4UHidden,
                {
                    showBlockedCardsTerm: '5',
                    showBlockedCardsTerm2: '14',
                    userProps: true
                },
                new Date(2020, 5, 10)
            )
        ).toBe(true)
    })
    it('Карта statusWay4 === K видна', () => {
        expect(
            isCardVisible(
                statusWay4KVisible,
                {
                    showBlockedCardsTerm: '5',
                    showBlockedCardsTerm2: '14'
                },
                new Date(2020, 5, 10)
            )
        ).toBe(true)
    })
    it('Карта statusWay4 === K скрыта', () => {
        expect(
            isCardVisible(
                statusWay4KHidden,
                {
                    showBlockedCardsTerm: '5',
                    showBlockedCardsTerm2: '14'
                },
                new Date(2020, 5, 10)
            )
        ).toBe(false)
    })
    it('При userProperties === true скрытая карта statusWay4 === K видна', () => {
        expect(
            isCardVisible(
                statusWay4KHidden,
                {
                    showBlockedCardsTerm: '5',
                    showBlockedCardsTerm2: '14',
                    userProps: true
                },
                new Date(2020, 5, 10)
            )
        ).toBe(true)
    })
    it('Карта statusWay4 === g всегда видна', () => {
        expect(
            isCardVisible(
                statusWay4gVisible,
                {
                    showBlockedCardsTerm: '5',
                    showBlockedCardsTerm2: '14'
                },
                new Date(2020, 5, 10)
            )
        ).toBe(true)
    })
    it('Карта state === delivery всегда видна', () => {
        expect(
            isCardVisible(
                statusDelivery,
                {
                    showBlockedCardsTerm: '5',
                    showBlockedCardsTerm2: '14'
                },
                new Date(2020, 5, 10)
            )
        ).toBe(true)
    })


})

describe('Сортируем перевыпуск ППРБ, issueType = 3', () => {
    it('Три карты ппрб выстраиваются друг за другом', () => {
        expect(getSortedCardsPPRB(sort3PPRBcards, true, false).map((card) => card.id).join(',')).toBe('236869,235544,235546,235543')
    })
    it('Две карты ппрб сортируются друг за другом, карта c prevCardId без привязки остается на своем месте, не ППРБ остается на своем месте', () => {
        expect(getSortedCardsPPRB(sort2PPRBwith1prevCardId, true, false).map((card) => card.id).join(',')).toBe('236869,236871,235546,235543')
    })
    it('Две карты ппрб сортируются друг за другом, карта c newCardId без привязки перемещается в конец, не ППРБ остается на своем месте', () => {
        expect(getSortedCardsPPRB(sort2PPRBwith1newCardId, true, false).map((card) => card.id).join(',')).toBe('236871,235546,235543,235544')
    })
    it('Две карты ппрб сортируются друг за другом, затем еще две ппрб сортируются, не ППРБ остается на своем месте', () => {
        expect(getSortedCardsPPRB(sort2PPRBwith2PPRBwith1notPPRBandBunchOfRegularCards, true, false).map((card) => card.id).join(','))
            .toBe('236869,235544,236870,236871,235546,235542,235548,235545,235543,235547')
    })
})

describe('Сортируем плановый перевыпуск ППРБ, issueType = 4', () => {
    it('Карта newCardId выстраивается перед новой картой prevCardId', () => {
        expect(getSortedCardsPPRB(sort2PlannedPPRBwith1newCardId, false, true)
            .map((card) => card.id).join(',')).toBe('235546,236871,235543,235544')
    })
})

describe('Сортируем issueType = 3 и issueType = 2', () => {
    it('Плановые и неплановые сортируются, в конце остаются несортирующиеся', () => {
        expect(getSortedCardsPPRB(sort2PlannedPPRBwith2reissuedPPRB, true, true)
            .map((card) => card.id).join(',')).toBe('236869,235544,235546,236871,235543')
    })
})
