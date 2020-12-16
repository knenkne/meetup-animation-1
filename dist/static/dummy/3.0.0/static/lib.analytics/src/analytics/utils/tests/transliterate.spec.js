import { transliterate } from '../transliterate'

describe('Модуль аналитики :: утилиты :: transliterate', () => {
    it('Стандартное применение', () => {
        expect(transliterate('Кредитный потенциал/Успешный расчет')).toBe('kreditnyj_potencial_-_uspeshnyj_raschet')
    })
    it('Маппинг целиком', () => {
        expect(transliterate('абвгдеёжзийклмнопрстуфхцчшщъыьэюя /')).toBe('abvgdeyozhzijklmnoprstufhcchshshhye-yuya__-_')
    })
})
