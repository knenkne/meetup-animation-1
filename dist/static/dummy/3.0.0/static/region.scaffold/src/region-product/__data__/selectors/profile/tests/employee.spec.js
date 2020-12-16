import { formatAddress } from '../employee'

const NORMAL_ADDRESS = 'г. Москва, ул. Кантемировская, 47, 115477, 45, офис'

describe('Профиль сотрудника:', () => {
    it('Возврат каретки \r', () => {
        expect(formatAddress('г\x0D.\x0DМосква\x0D,\x0Dул\x0D.\x0DКантемировская\x0D,\x0D47\x0D,115477\x0D,\x0D45\x0D,\x0Dофис'))
            .toBe(NORMAL_ADDRESS)
    })
    it('Перенос строки \n', () => {
        expect(formatAddress('г.\x0AМосква\x0A,\x0Aул.\x0AКантемировская\x0A,47,\x0A115477\x0A,45\x0A,офис'))
            .toBe(NORMAL_ADDRESS)
    })
    it('Tab', () => {
        expect(formatAddress('г\x09.Москва\x09,\x09ул.\x09Кантемировская\x09,47\x09,115477\x09,45 ,офис'))
            .toBe(NORMAL_ADDRESS)
    })
    it('Space', () => {
        expect(formatAddress('г .Москва ,ул. Кантемировская ,47 ,115477 ,45 ,офис'))
            .toBe(NORMAL_ADDRESS)
    })
    it('No spaces', () => {
        expect(formatAddress('г.Москва,ул.Кантемировская,47,115477,45,офис'))
            .toBe(NORMAL_ADDRESS)
    })
})
