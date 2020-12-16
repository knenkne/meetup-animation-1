import { getEditableFieldIDs } from '../get-editable-field-ids'

describe('Adapter :: selectors', () => {
    describe('getEditableFieldIDs возвращает', () => {
        it('массив идентификаторов полей с признаком readonly === false', () => {
            const fields = [
                {
                    id: 'transfer:fullName:lastName',
                    value: 'Парамонов',
                    type: 'text',
                    readonly: true,
                    referenceId: 'swiftPurposes',
                    title: 'Фамилия',
                    validators: []
                },
                {
                    id: 'transfer:fullName:firstName',
                    value: 'Василий',
                    type: 'text',
                    readonly: false,
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
                'transfer:fullName:firstName',
                'transfer:fullName:middlename'
            ]

            const actual = getEditableFieldIDs.resultFunc(fields)

            expect(actual).toEqual(expected)
        })
    })
})
