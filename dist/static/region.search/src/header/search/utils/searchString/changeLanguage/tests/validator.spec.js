import { validateRussianLetters, validateEnglishLetters } from '../validator'

describe('Тестирование валидаторов, проверяющих наличие русских или английских букв:', () => {
    it('validateRussianLetters, "Какая-то строка!"', () => {
        expect(validateRussianLetters('Какая-то строка!')).toBe(true)
    })

    it('validateRussianLetters, "Какая-то строка with eng!"', () => {
        expect(validateRussianLetters('Какая-то строка with eng!')).toBe(false)
    })

    it('validateRussianLetters, ""', () => {
        expect(validateRussianLetters('')).toBe(false)
    })

    it('validateEnglishLetters, "Some string!"', () => {
        expect(validateEnglishLetters('Some string!')).toBe(true)
    })

    it('validateEnglishLetters, "Some string, с русским!"', () => {
        expect(validateEnglishLetters('Some string, с русским!')).toBe(false)
    })

    it('validateEnglishLetters, ""', () => {
        expect(validateEnglishLetters('')).toBe(false)
    })
})
