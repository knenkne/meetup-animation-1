import { mergeTheme } from '../merge-theme'

describe('utils/mergeTheme', () => {
    it('is merging theme', () => {
        const theme1 = {
            foo: 'foo',
            baz: 'quux'
        }
        const theme2 = {
            bar: 'bar',
            baz: 'quuux'
        }

        const expectedTheme = {
            foo: 'foo',
            bar: 'bar',
            baz: 'quux quuux'
        }
        expect(mergeTheme(theme1, theme2)).toEqual(expectedTheme)
    })
})
