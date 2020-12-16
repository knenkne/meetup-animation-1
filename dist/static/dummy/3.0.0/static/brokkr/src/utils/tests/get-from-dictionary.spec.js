const getFromDictionary = require('../get-from-dictionary')

const dictionary = {
    'BDD word': 'селектор 1',
    '/^BDD regexp?$/': 'селектор 2'
}

describe('Берем хитрыми способами значения из словарей', () => {
    it('По слову', () => {
        expect(getFromDictionary(dictionary, 'BDD word')).toBe('селектор 1')
    })
    it('По регулярке', () => {
        expect(getFromDictionary(dictionary, 'BDD regexp')).toBe('селектор 2')
        expect(getFromDictionary(dictionary, 'BDD regex')).toBe('селектор 2')
    })
})
