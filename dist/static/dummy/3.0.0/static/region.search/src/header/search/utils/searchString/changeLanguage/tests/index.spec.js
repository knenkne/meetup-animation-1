import { getConvertedString } from '..'

describe('Протестировать функцию getConvertedString:', () => {
    it('Дать на вход строку "":', () => {
        expect(getConvertedString('')).toBe('')
    })

    it('Дать на вход строку "Rfrfz-nj cnhjrf!":', () => {
        expect(getConvertedString('Rfrfz-nj cnhjrf!')).toBe('Какая-то строка!')
    })

    it('Дать на вход строку "Rfrfz-nj cnhjrf с русскими букваМи!":', () => {
        expect(getConvertedString('Rfrfz-nj cnhjrf с русскими букваМи!')).toBe('')
    })

    it('Дать на вход строку "Ыщьу ыекштп!":', () => {
        expect(getConvertedString('Ыщьу ыекштп!')).toBe('Some string!')
    })

    it('Дать на вход строку "Ыщьу ыекштп with english letters!":', () => {
        expect(getConvertedString('Ыщьу ыекштп with english letters!')).toBe('')
    })
})
