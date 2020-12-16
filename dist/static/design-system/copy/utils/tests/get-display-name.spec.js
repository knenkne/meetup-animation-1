import { getDisplayName } from '../get-display-name'

describe('getDisplayName', () => {
    it('возвращает displayName переданной функции', () => {
        const Component = () => {}
        Component.displayName = 'foo'

        expect(getDisplayName(Component)).toBe('foo')
    })
    it('возвращает name переданной функции', () => {
        const Component = () => {}

        expect(getDisplayName(Component)).toBe('Component')
    })
    it('возвращает fallback name, если функция безымянная', () => {
        expect(getDisplayName(() => {}, 'fallback')).toBe('fallback')
    })
    it('возвращает Component, если он - непустая строка', () => {
        expect(getDisplayName('input')).toBe('input')
    })
    it('возвращает Unknown для функции, если fallback name не был передан', () => {
        expect(getDisplayName(() => {})).toBe('Unknown')
    })
    it('возвращает Unknown для пустой строки, если fallback name не был передан', () => {
        expect(getDisplayName('')).toBe('Unknown')
    })
})
