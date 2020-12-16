import { getProviderResult, getProvidersShowAll } from '../providers'

describe('Тестирование селекторов функций Организаций:', () => {

    it('getProviderResult: организаций больше 4, обрезать массив', () => {
        const result = getProviderResult(['a', 'b', 'c', 'd', 'e'])
        expect(result).toEqual(['a', 'b', 'c', 'd'])
    })

    it('getProviderResult: организаций меньше 4, ничего не менять', () => {
        const result = getProviderResult(['a', 'b', 'c'])
        expect(result).toEqual(['a', 'b', 'c'])
    })

    it('getProvidersShowAll: организаций больше 4, показать кнопку', () => {
        const result = getProvidersShowAll(['a', 'b', 'c', 'd', 'e'])
        expect(result).toBe(true)
    })

    it('getProvidersShowAll: организаций меньше 4, не показывать кнопку', () => {
        const result = getProvidersShowAll( ['a', 'b', 'c', 'd'] )
        expect(result).toBe(false)
    })

})
