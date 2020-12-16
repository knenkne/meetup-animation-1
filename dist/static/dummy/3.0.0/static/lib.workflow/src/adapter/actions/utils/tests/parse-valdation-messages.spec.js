import { parseValidationMessages } from '../parse-validation-messages'

describe('Adapter :: parsers :: parseValidationMessages возвращает объект ошибок c типом validation', () => {
    it('для единичного message', () => {
        const messages = [
            {
                uuid: '123456',
                type: 'validation',
                code: 'fullName:firstName',
                title: 'error1',
                text: 'text1'
            }
        ]

        const expected = {
            'fullName:firstName': 'error1 text1'
        }
        const actual = parseValidationMessages(messages)
        expect(actual).toEqual(expected)
    })
    it('для нескольких message одного типа', () => {
        const messages = [
            {
                uuid: '222',
                type: 'validation',
                code: 'fullName:firstName',
                title: 'error1',
                text: 'text1'
            },
            {
                uuid: '4567',
                type: 'validation',
                code: 'fullName:lastName',
                title: 'error2',
                text: 'text2'
            }
        ]

        const expected = {
            'fullName:firstName': 'error1 text1',
            'fullName:lastName': 'error2 text2',
        }

        const actual = parseValidationMessages(messages)
        expect(actual).toEqual(expected)
    })
    it('для нескольких message разного типа', () => {
        const messages = [
            {
                uuid: '222',
                type: 'validation',
                code: 'fullName:firstName',
                title: 'errorTitle',
                text: 'errorText'
            },
            {
                uuid: '222',
                type: 'warning',
                code: 'fullName:lastName',
                title: 'warningTitle',
                text: 'warningText'
            },
            {
                uuid: '333',
                type: 'validation',
                code: 'amount:amount:currency',
                title: 'infoTitle',
                text: 'infoText'
            }
        ]

        const expected = {
            'fullName:firstName': 'errorTitle errorText',
            'amount:amount:currency': 'infoTitle infoText'
        }

        const actual = parseValidationMessages(messages)
        expect(actual).toEqual(expected)
    })
    it('Exception, если отсутствует код элемента данных для привязки', () => {
        const messages = [
            {
                type: 'validation',
                title: 'errorTitle',
                text: 'errorText'
            }
        ]

        expect(() => parseValidationMessages(messages))
            .toThrow(new Error('Отсутствует обязательный атрибут code для message с типом \'validation\''))
    })
    it('для единичного message', () => {
        const messages = [
            {
                uuid: '123456',
                type: 'validation',
                code: 'fullName:firstName',
                title: 'error1',
                text: 'text1'
            }
        ]

        const expected = {
            'fullName:firstName': 'error1 text1'
        }
        const actual = parseValidationMessages(messages)
        expect(actual).toEqual(expected)
    })
    it('для нескольких message одного типа', () => {
        const messages = [
            {
                uuid: '222',
                type: 'validation',
                code: 'fullName:firstName',
                title: 'error1',
                text: 'text1'
            },
            {
                uuid: '4567',
                type: 'validation',
                code: 'fullName:lastName',
                title: 'error2',
                text: 'text2'
            }
        ]

        const expected = {
            'fullName:firstName': 'error1 text1',
            'fullName:lastName': 'error2 text2'
        }

        const actual = parseValidationMessages(messages)
        expect(actual).toEqual(expected)
    })
    it('игнорирует messages разного с типами, отличными от error', () => {
        const messages = [
            {
                uuid: '222',
                type: 'validation',
                code: 'fullName:firstName',
                title: 'errorTitle',
                text: 'errorText'
            },
            {
                uuid: '222',
                type: 'warning',
                code: 'fullName:lastName',
                title: 'warningTitle',
                text: 'warningText'
            },
            {
                uuid: '333',
                type: 'info',
                code: 'amount:amount:currency',
                title: 'infoTitle',
                text: 'infoText'
            }
        ]

        const expected = {
            'fullName:firstName': 'errorTitle errorText',
        }

        const actual = parseValidationMessages(messages)
        expect(actual).toEqual(expected)
    })
    it('игнорирует messages, где отсутствует код элемента данных для привязки', () => {
        const messages = [
            {
                type: 'validation',
                title: 'errorTitle',
                text: 'errorText'
            }
        ]

        expect(() => {
            parseValidationMessages(messages)
        }).toThrowError('Отсутствует обязательный атрибут code для message с типом \'validation\'')
    })
})
