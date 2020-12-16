import {
    computeStepByDigits,
    getValueByMouse,
    makeDelimiters,
    getGridValue
} from '../utils'

describe('<Slider> utils', () => {
    describe('makeDelimiters', () => {
        it('calculates percents by min, max, step', () => {
            expect(makeDelimiters(0, 10, 2)).toEqual([20, 40, 60, 80])
        })
        it('delete delimiters in < 1.5 distance of borders', () => {
            expect(makeDelimiters(2, 10, 3)).toEqual([50])
        })
        it('return empty array', () => {
            expect(makeDelimiters(2, 3, 5)).toEqual([])
            expect(makeDelimiters()).toEqual([])
        })
    })

    describe('computeStepByDigits', () => {
        it('no digits', () => {
            expect(computeStepByDigits(0, 500, 5)).toBe(5)
        })

        it('default step', () => {
            expect(computeStepByDigits(0, 5, 1, [1, 2, 5, 10])).toBe(1)
        })

        it('calc step', () => {
            expect(computeStepByDigits(0, 500000, 920, [1, 2, 5, 10])).toBe(1000)
        })
    })

    describe('getGridValue tests', () => {
        it('string grid', () => {
            const grid = [1000, 2000, 5000, 10000]
            const value = '5000'
            const result = 2 / 3

            expect(getGridValue(value, grid)).toBe(result)
            expect(getGridValue(Number(value), grid)).toBe(result)
            expect(getGridValue('5000.', grid)).toBe(result)
            expect(getGridValue('4500', grid)).toBeLessThan(result)
            expect(getGridValue('5500', grid)).toBeGreaterThan(result)
        })

        it('number grid', () => {
            const grid = ['1000', '2000', '5000', '10000']
            const value = '2000'
            const result = 1 / 3

            expect(getGridValue(value, grid)).toBe(result)
            expect(getGridValue(Number(value), grid)).toBe(result)
            expect(getGridValue('2000.', grid)).toBe(result)
            expect(getGridValue('1500', grid)).toBeLessThan(result)
            expect(getGridValue('2500', grid)).toBeGreaterThan(result)
        })


    })

    xit('getValueByMouse is getting new value', () => {
        expect(getValueByMouse({ pageX: 200 }, { clientLeft: 50, getBoundingClientRect: () => ({ left: 50 }), clientWidth: 200 }, 50, 2, 0, 100, 2)).toBe('26')
        expect(getValueByMouse({ pageX: 200 }, { clientLeft: 150, getBoundingClientRect: () => ({ left: 150 }), clientWidth: 200 }, 50, 2, 0, 100, 2)).toBe('0')
        expect(getValueByMouse({ pageX: 500 }, { clientLeft: 50, getBoundingClientRect: () => ({ left: 50 }), clientWidth: 200 }, 50, 2, 0, 100, 2)).toBe('100')
        expect(getValueByMouse({ pageX: 200 }, { clientLeft: 0, getBoundingClientRect: () => ({ left: 0 }), clientWidth: 200 }, 199, 10, 0, 100, 2)).toBe('0')
    })
})
