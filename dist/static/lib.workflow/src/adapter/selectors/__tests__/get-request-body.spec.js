import { getRequestBody } from '../get-request-body'

describe('Adapter :: selectors', () => {
    describe('getRequestBody', () => {
        const flowName = 'TEST'

        it('возвращает пустой объект, если ', () => {

            const values = {}
            const documentProperties = {}

            const expected = null

            const actual = getRequestBody.resultFunc(values, documentProperties)

            expect(actual).toBe(expected)
        })

        it('возвращает объект fields, содержащий идентификаторы и значения полей формы', () => {

            const values = {
                'transfer:fullName:lastName': 'value1',
                'transfer:fullName:noLastName': 'false',
                'transfer:multiselect:options': ['first', 'second']
            }

            const documentProperties = {}

            const expected = {
                fields: {
                    'transfer:fullName:lastName': 'value1',
                    'transfer:fullName:noLastName': 'false',
                    'transfer:multiselect:options': ['first', 'second']
                }
            }

            const actual = getRequestBody.resultFunc(values, documentProperties)

            expect(actual).toEqual(expected)
        })

        it('возвращает объект, содержащий контейнер document со свойствами документа', () => {

            const values = {}

            const documentProperties = {
                flow: flowName,
                state: 'state1',
                templateId: 'idc-sdf-234'
            }

            const expected = {
                document: {
                    flow: 'TEST',
                    state: 'state1',
                    templateId: 'idc-sdf-234'
                }
            }

            const actual = getRequestBody.resultFunc(values, documentProperties)

            expect(actual).toEqual(expected)
        })

        it('возвращает объект, содержащий document и fields', () => {

            const values = {
                'transfer:fullName:noLastName': 'false'
            }

            const documentProperties = {
                templateId: 'idc-sdf-234'
            }

            const expected = {
                fields: {
                    'transfer:fullName:noLastName': 'false'
                },
                document: {
                    templateId: 'idc-sdf-234'
                }
            }

            const actual = getRequestBody.resultFunc(values, documentProperties)

            expect(actual).toEqual(expected)
        })
    })


})
