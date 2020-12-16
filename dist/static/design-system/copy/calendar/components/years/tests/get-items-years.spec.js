import getYear from 'date-fns/getYear'

import { getItemsYears } from '../../../utils'

describe('getItemsYears function', () => {
    it('Export is correct', () => {
        expect(getItemsYears).toBeDefined()
    })

    it('making decade array', () => {
        const now = new Date()
        const nowYear = getYear(now)
        const expectedYears = [
            [
                new Date(nowYear, 0, 1, 0, 0),
                new Date(nowYear + 1, 0, 1, 0, 0),
                new Date(nowYear + 2, 0, 1, 0, 0),
            ],
            [
                new Date(nowYear + 3, 0, 1, 0, 0),
                new Date(nowYear + 4, 0, 1, 0, 0),
                new Date(nowYear + 5, 0, 1, 0, 0),
            ],
            [
                new Date(nowYear + 6, 0, 1, 0, 0),
                new Date(nowYear + 7, 0, 1, 0, 0),
                new Date(nowYear + 8, 0, 1, 0, 0)
            ], [
                new Date(nowYear + 9, 0, 1, 0, 0),
                new Date(nowYear + 10, 0, 1, 0, 0),
                new Date(nowYear + 11, 0, 1, 0, 0)
            ]

        ]
        expect(getItemsYears(now)).toEqual(expectedYears)
    })


})
