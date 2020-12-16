const selectorClarification = require('../selector-clarification')

describe('Объединение селекторов', () => {
    it('Обычное', () => {
        expect(selectorClarification('.foo .bar', '.baz .qux')).toBe('.foo .bar .baz .qux')
    })
    it('Бесполезные', () => {
        expect(selectorClarification('.foo .bar', '')).toBe('.foo .bar')
        expect(selectorClarification('', '.baz .qux')).toBe('.baz .qux')
    })
    it('Комплексные', () => {
        const array = selectorClarification('.foo, .bar', '.baz, .qux').split(', ')

        expect(array.includes('.foo .baz')).toBe(true)
        expect(array.includes('.foo .qux')).toBe(true)
        expect(array.includes('.bar .baz')).toBe(true)
        expect(array.includes('.bar .qux')).toBe(true)
    })
})
