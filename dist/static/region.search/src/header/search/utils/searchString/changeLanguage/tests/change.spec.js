import { enCorrespondsRu, ruCorrespondsEn } from '../../../../constants'
import { change } from '../change'

describe('Тестирование функции change:', () => {
    afterEach(() => {
        Object.defineProperty(navigator, 'platform', {
            writable: true,
            value: ''
        })
    })

    it('Дать на вход строку "Rfrfz-nj cnhjrf" (enCorrespondsRu):', () => {
        const result = change('Rfrfz-nj cnhjrf', enCorrespondsRu)

        expect(result).toBe('Какая-то строка')
    })

    it('Дать на вход строку " Rfrfz-nj cnhjrf" (enCorrespondsRu):', () => {
        const result = change(' Rfrfz-nj cnhjrf ', enCorrespondsRu)

        expect(result).toBe(' Какая-то строка ')
    })

    it('Дать на вход строку "[ { ] } ; : \' " \\ | , < . >" (enCorrespondsRu):', () => {
        const result = change('[ { ] } ; : \' " \\ | , < . >', enCorrespondsRu)

        expect(result).toBe('х Х ъ Ъ ж Ж э Э ё Ё б Б ю Ю')
    })

    it('Дать на вход строку "Ыеуфь фтв Дуегфду" (ruCorrespondsEn):', () => {
        const result = change('Ыеуфь фтв Дуегфду', ruCorrespondsEn)

        expect(result).toBe('Steam and Letuale')
    })

    it('Дать на вход строку "ыеуфь фтв Дуёгфду" (ruCorrespondsEn, Mac):', () => {
        Object.defineProperty(navigator, 'platform', {
            writable: true,
            value: 'MacIntel'
        })

        const result = change('ыеуфь фтв Дуёгфду', ruCorrespondsEn)

        expect(result).toBe('steam and Le\\uale')
    })

    it('Дать на вход строку "ыеуфь фтв Дуёгфду" (ruCorrespondsEn):', () => {
        const result = change('ыеуфь фтв Дуёгфду', ruCorrespondsEn)

        expect(result).toBe('steam and Letuale')
    })

    it('Дать на вход строку " э " (ruCorrespondsEn):', () => {
        const result = change(' э ', ruCorrespondsEn)

        expect(result).toBe(' \' ')
    })

    it('Дать на вход строку " Э " (ruCorrespondsEn):', () => {
        const result = change(' Э ', ruCorrespondsEn)

        expect(result).toBe(' " ')
    })

    it('Дать на вход строку " Э " (ruCorrespondsEn):', () => {
        const result = change(' Э ', ruCorrespondsEn)

        expect(result).toBe(' " ')
    })

    it('Дать на вход строку " ё Ё е Е " (ruCorrespondsEn, Mac):', () => {
        Object.defineProperty(navigator, 'platform', {
            writable: true,
            value: 'MacIntel'
        })

        const result = change(' ё Ё е Е ', ruCorrespondsEn)

        expect(result).toBe(' \\ | t T ')
    })

    it('Дать на вход строку " ё Ё е Е " (ruCorrespondsEn):', () => {
        const result = change(' ё Ё е Е ', ruCorrespondsEn)

        expect(result).toBe(' t T t T ')
    })

    it('Дать на вход строку " б Б ю Ю " (ruCorrespondsEn):', () => {
        const result = change(' б Б ю Ю ', ruCorrespondsEn)

        expect(result).toBe(' , < . > ')
    })
})
