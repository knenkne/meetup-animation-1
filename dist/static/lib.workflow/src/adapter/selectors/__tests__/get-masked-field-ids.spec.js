import { getMaskedFieldIDs } from '../get-masked-field-ids'

describe('Adapter :: selectors', () => {
    describe('getMaskedFieldIDs возвращает', () => {
        it('массив идентификаторов полей с признаком masked', () => {

            const fields = [
                {
                    id: 'transfer:passport',
                    value: '***23232',
                    type: 'text',
                    masked: true,
                    referenceId: 'swiftPurposes',
                    title: 'Фамилия',
                    validators: []
                },
                {
                    id: 'transfer:address',
                    value: 'Василий',
                    type: 'text',
                    masked: false,
                    referenceId: 'text',
                    title: 'Имя',
                    validators: []
                },
                {
                    id: 'transfer:fullName:middlename',
                    value: 'Василий',
                    type: 'text',
                    validators: []
                }
            ]

            const expected = [
                'transfer:passport'
            ]

            const actual = getMaskedFieldIDs.resultFunc(fields)

            expect(actual).toEqual(expected)
        })
    })
})
