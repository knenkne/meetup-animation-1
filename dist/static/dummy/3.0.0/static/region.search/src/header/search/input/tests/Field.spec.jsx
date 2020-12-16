import { handleFront, handleBack } from '../Field'

describe('Функции фильтрации пропсов для поля ввода', () => {
    it('Для переднего input - handleFront', () => {
        const result = handleFront({ search: '1', something: '2' })

        expect(result).toEqual({ something: '2' })
    })

    it('Для заднего input - handleBack', () => {
        const result = handleBack({ search: '1', something: '2' })

        expect(result).toEqual({ something: '2', value: '1' })
    })
})
