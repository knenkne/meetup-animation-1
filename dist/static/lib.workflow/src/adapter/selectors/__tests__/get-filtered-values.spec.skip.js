import { getFilteredValues } from '../get-filtered-values'

/* TODO восстановить тест функционала,
    возможно лучше тестировать не конечный селектор getFilteredValues а
    селекторы из которых он состоит
*/

describe.skip('Adapter :: selectors', () => {

    describe('getFilteredValues', () => {
        it.only('возвращает пустой объект, если нет полей и свойств документа', () => {

            const values = {}
            const editableIDs = []
            const maskedAndPristineIDs = []
            const visibleWidgetFieldsIDs = []

            const expected = {}

            const actual = getFilteredValues.resultFunc(values, editableIDs, maskedAndPristineIDs, visibleWidgetFieldsIDs)

            expect(actual).toEqual(expected)
        })
        it('возвращает объект со значениями различного типа (строка, массив строк)', () => {

            const values = {
                first: '',
                second: 'second',
                third: [],
                fourth: ['fourth', 'and', 'some']
            }
            const editableIDs = ['first', 'second', 'third', 'fourth']
            const maskedAndPristineIDs = []
            const visibleWidgetFieldsIDs = ['first', 'second', 'third', 'fourth']


            const expected = {
                first: '',
                second: 'second',
                third: [],
                fourth: ['fourth', 'and', 'some']
            }

            const actual = getFilteredValues.resultFunc(values, editableIDs, maskedAndPristineIDs, visibleWidgetFieldsIDs)

            expect(actual).toEqual(expected)
        })
        it('преобразует boolean в string boolean', () => {

            const values = {
                first: true,
                second: false,
                third: 'true',
                fourth: [true]
            }
            const editableIDs = ['first', 'second', 'third', 'fourth']
            const maskedAndPristineIDs = []
            const visibleWidgetFieldsIDs = ['first', 'second', 'third', 'fourth']


            const expected = {
                first: 'true',
                second: 'false',
                third: 'true',
                fourth: [true]
            }

            const actual = getFilteredValues.resultFunc(values, editableIDs, maskedAndPristineIDs, visibleWidgetFieldsIDs)

            expect(actual).toEqual(expected)
        })
        it('фильтрует readonly поля', () => {
            const values = {
                first: 'first',
                second: 'second'
            }
            const editableIDs = ['first']
            const maskedAndPristineIDs = []
            const visibleWidgetFieldsIDs = ['first', 'second']
            const expected = {
                first: 'first'
            }

            const actual = getFilteredValues.resultFunc(values, editableIDs, maskedAndPristineIDs, visibleWidgetFieldsIDs)

            expect(actual).toEqual(expected)
        })
        it('фильтрует маскированные поля, которые не менялись', () => {
            const values = {
                first: 'first',
                second: '****324'
            }
            const editableIDs = ['first', 'second']
            const maskedAndPristineIDs = ['second']
            const visibleWidgetFieldsIDs = ['first', 'second']

            const expected = {
                first: 'first'
            }

            const actual = getFilteredValues.resultFunc(values, editableIDs, maskedAndPristineIDs, visibleWidgetFieldsIDs)

            expect(actual).toEqual(expected)
        })
        it('фильтрует поля для invisible-виджетов', () => {
            const values = {
                first: 'firstValue',
                second: 'secondValue',
                third: true
            }
            const editableIDs = ['first', 'second', 'third']
            const maskedAndPristineIDs = []
            const visibleWidgetFieldsIDs = ['first', 'third']

            const expected = {
                first: 'firstValue',
                third: 'true'
            }

            const actual = getFilteredValues.resultFunc(values, editableIDs, maskedAndPristineIDs, visibleWidgetFieldsIDs)

            expect(actual).toEqual(expected)
        })
    })
})
