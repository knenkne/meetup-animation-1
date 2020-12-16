import { calculatePercents, toRGBString } from '../value'

describe('Utils', () => {
    describe('Value', () => {

        it('should proper calculate percents', () => {
            expect(calculatePercents(0, 0)).toEqual(0)
            expect(calculatePercents(100, 0)).toEqual(0)
            expect(calculatePercents(100, 35.5)).toEqual(36)
            expect(calculatePercents(100, 88.143)).toEqual(89)
            expect(calculatePercents(void 0, null)).toEqual(0)
        })

        it('should proper construct rgb string', () => {
            expect(toRGBString({ r: 0, g: 0, b: 0 })).toEqual('rgb(0,0,0)')
            expect(toRGBString({ r: 127, g: 255, b: 3 })).toEqual('rgb(127,255,3)')
        })
    })
})
