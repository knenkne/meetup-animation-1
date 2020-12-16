import { getTargetSize } from '../utils'
import {
    XXS,
    XS,
    S,
    M,
    L,
    XL
} from '../dictionaries'

describe('Определение размера цели', () => {

    it('XXS (extra extra small) - ультра короткая < 4 недель', () => {
        expect(getTargetSize(new Date('2019', '06', '17'), new Date('2019', '06', '3'))).toBe(XXS)
    })
    it('XS (extra small) - месячная => 4 недель и < 6 недель', () => {
        expect(getTargetSize(new Date('2019', '07', '3'), new Date('2019', '06', '3'))).toBe(XS)
    })
    it('S (small) - краткосрочная => 6 недель и < 6 мес', () => {
        expect(getTargetSize(new Date('2019', '07', '29'), new Date('2019', '06', '3'))).toBe(S)
    })
    it('M (medium) - среднесрочная => 6 ме. и < 12 мес', () => {
        expect(getTargetSize(new Date('2020', '02', '17'), new Date('2019', '06', '3'))).toBe(M)
    })
    it('L (large) - долгосрочная => 12 мес. и < 2 лет', () => {
        expect(getTargetSize(new Date('2020', '07', '17'), new Date('2019', '06', '3'))).toBe(L)
    })
    it('XL (extra large) - многолетняя => 2 лет', () => {
        expect(getTargetSize(new Date('2025', '07', '17'), new Date('2019', '06', '3'))).toBe(XL)
    })
})
