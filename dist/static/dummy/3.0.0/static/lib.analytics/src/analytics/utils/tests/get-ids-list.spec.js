import { getIdsList } from '../get-ids-list'

describe('Модуль аналитики :: утилиты :: getIdsList', () => {
    it('Стандартное применение', () => {
        expect(getIdsList('1,2,3')).toEqual(['1', '2', '3'])
    })
    it('Значение отсутствуте', () => {
        expect(getIdsList('')).toEqual([])
    })
    it('Применение неквалифицированным специалистом', () => {
        expect(getIdsList(' 1,3,2 ,3, 45 ,5,, ,,')).toEqual(['1', '3', '2', '45', '5'])
    })
})
