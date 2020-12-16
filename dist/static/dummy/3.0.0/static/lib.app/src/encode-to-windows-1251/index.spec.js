import encodeToWindows1251 from '.'

describe('encodeToWindows1251', () => {
    it('should encode to Windows-1251 encoding', () => {
        expect(encodeToWindows1251('')).toBe('')
        expect(encodeToWindows1251('0')).toBe('0')
        expect(encodeToWindows1251('test')).toBe('test')
        expect(encodeToWindows1251('test123')).toBe('test123')
        expect(encodeToWindows1251('123test')).toBe('123test')
        expect(encodeToWindows1251('123test4567')).toBe('123test4567')

        expect(encodeToWindows1251('а')).toBe('%E0')
        expect(encodeToWindows1251('абырвалг')).toBe('%E0%E1%FB%F0%E2%E0%EB%E3')
        expect(encodeToWindows1251('Абракадабра01Бумс')).toBe(
            '%C0%E1%F0%E0%EA%E0%E4%E0%E1%F0%E001%C1%F3%EC%F1'
        )
        expect(encodeToWindows1251('Ежемесячные зачисления')).toBe(
            '%C5%E6%E5%EC%E5%F1%FF%F7%ED%FB%E5%20%E7%E0%F7%E8%F1%EB%E5%ED%E8%FF'
        )
        expect(
            encodeToWindows1251(
                'абвгдеёжзийклмнопрстуфхцчшщъыьэюяабвгдеёжзийклмноп'
            )
        ).toBe(
            '%E0%E1%E2%E3%E4%E5%B8%E6%E7%E8%E9%EA%EB%EC%ED%EE%EF%F0%F1%F2%F3%F4%F5%F6%F7%F8%F9%FA%FB%FC%FD%FE%FF%E0%E1%E2%E3%E4%E5%B8%E6%E7%E8%E9%EA%EB%EC%ED%EE%EF'
        )

        expect(encodeToWindows1251('!@%#&#($(')).toBe(
            '%21%40%25%23%26%23%28%24%28'
        )
        expect(encodeToWindows1251('♠')).toBe('%26%239824%3B')
        expect(encodeToWindows1251('123♠')).toBe('123%26%239824%3B')
        expect(encodeToWindows1251('123♠45')).toBe('123%26%239824%3B45')
        expect(encodeToWindows1251('♠xxx♦xxx♣')).toBe(
            '%26%239824%3Bxxx%26%239830%3Bxxx%26%239827%3B'
        )
        expect(encodeToWindows1251('Моя игральная карта ♣♦♠')).toBe(
            '%CC%EE%FF%20%E8%E3%F0%E0%EB%FC%ED%E0%FF%20%EA%E0%F0%F2%E0%20%26%239827%3B%26%239830%3B%26%239824%3B'
        )
    })
})
