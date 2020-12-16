import { filterByFields, filterWithConvertedQuery } from 'Selectors/utils'

describe('Тестирование селекторов функций:', () => {

    it('filterByFields - не найдено', () => {
        const query = '1'
        const fields = ['title']
        const items = [
            { title: 'Avon' },
            { title: 'MasterCard Gold' },
            { title: 'Visa Digital' },
            { title: 'Платина' },
            { title: 'Палладий' },
        ]
        const result = filterByFields(fields)(items, query)

        expect(result).toEqual([])
    })

    it('filterByFields - русские символы', () => {
        const query = 'П'
        const fields = ['title']
        const items = [
            { title: 'Avon' },
            { title: 'MasterCard Gold' },
            { title: 'Visa Digital' },
            { title: 'Платина' },
            { title: 'Палладий' },
        ]
        const result = filterByFields(fields)(items, query)

        expect(result).toEqual([{ title: 'Платина' }, { title:'Палладий' }])
    })

    it('filterByFields - английские символы', () => {
        const query = 'Av'
        const fields = ['title']
        const items = [
            { title: 'Avon' },
            { title: 'MasterCard Gold' },
            { title: 'Visa Digital' },
            { title: 'Платина' },
            { title: 'Палладий' },
        ]
        const result = filterByFields(fields)(items, query)

        expect(result).toEqual([{ title: 'Avon' }])
    })

    it('filterWithConvertedQuery - русские символы', () => {
        const query = 'М'
        const fields = ['title']
        const items = [
            { title: 'Avon' },
            { title: 'MasterCard Gold' },
            { title: 'Visa Digital' },
            { title: 'Платина' },
            { title: 'Палладий' },
        ]
        const result = filterWithConvertedQuery(fields)(items, query)

        expect(result).toEqual([{ title: 'Avon' }, { title: 'Visa Digital' }])
    })

    it('filterWithConvertedQuery - английские символы', () => {
        const query = 'G'
        const fields = ['title']
        const items = [
            { title: 'Avon' },
            { title: 'MasterCard Gold' },
            { title: 'Visa Digital' },
            { title: 'Платина' },
            { title: 'Палладий' },
        ]
        const result = filterWithConvertedQuery(fields)(items, query)

        expect(result).toEqual([{ title: 'Платина' }, { title:'Палладий' }])
    })

    it('filterWithConvertedQuery - русские и английский символы', () => {
        const query = 'ФV'
        const fields = ['title']
        const items = [
            { title: 'Avon' },
            { title: 'MasterCard Gold' },
            { title: 'Visa Digital' },
            { title: 'Платина' },
            { title: 'Палладий' },
        ]
        const result = filterWithConvertedQuery(fields)(items, query)

        expect(result).toEqual([])
    })

})
