import { pluralize } from '..'

describe('pluralize', () => {
    it('correctly pluralize when variants are present', () => {
        const variants = ['рублей', 'рубль', 'рубля']
        expect(pluralize(variants, 0)).toBe('рублей')
        expect(pluralize(variants, 1)).toBe('рубль')
        expect(pluralize(variants, 2)).toBe('рубля')
        expect(pluralize(variants, 5)).toBe('рублей')
        expect(pluralize(variants, 456456121)).toBe('рубль')
        expect(pluralize(variants, 456456121)).toBe('рубль')
    })

    it('пишет о необходимости наличия правильного массива', () => {
        const warning = console.warn
        console.warn = jest.fn()

        expect(pluralize([], 456456121)).toBeUndefined()

        expect(console.warn).toHaveBeenCalledWith(`Component Usage Warning: pluralize should has 3 options: [many = ${void 0}, one = ${void 0}, some = ${void 0}]`)

        console.warn = warning
    })
})
