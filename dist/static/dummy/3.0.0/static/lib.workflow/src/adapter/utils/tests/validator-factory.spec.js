import { validatorFactory, validatorFunctionFactory } from '../validator-factory'

describe('validatorFunctionFactory', () => {

    it('True condition', () => {

        expect(validatorFunctionFactory(() => true === false, 'hello')()).toBe('hello')
    })

    it('False condition', () => {
        expect(validatorFunctionFactory(() => true, 'hello')()).toBe(void 0)
    })
})

describe('validatorFactory', () => {

    const field = {
        id: 'text',
        type: 'text',
        value: ''
    }

    it('regexp validator with correct value', () => {
        const validator = {
            type: 'regexp',
            value: 'test',
            message: 'testMessage'
        }

        expect(validatorFactory(validator, field)('test')).toBe(void 0)
    })

    it('regexp validator with incorrect value', () => {
        const validator = {
            type: 'regexp',
            value: 'test',
            message: 'testMessage'
        }

        expect(validatorFactory(validator, field)('hello world')).toBe('testMessage')
    })

    test('regexp validator with empty value', () => {
        const validator = {
            type: 'regexp',
            value: '^[а-яА-ЯёЁ0-9 \\.\\-\\)\\(\\s]',
            message: 'error message'
        }

        expect(validatorFactory(validator, field)('')).toBeUndefined()
    })

    it('minLength validator with correct value', () => {
        const validator = {
            type: 'minLength',
            value: '10',
            message: 'too short'
        }

        expect(validatorFactory(validator, field)('shorttext')).toBe('too short')
    })

    it('minLength validator with incorrect value', () => {

        const validator = {
            type: 'minLength',
            value: '10',
            message: 'too short'
        }

        expect(validatorFactory(validator, field)('long long text')).toBe(void 0)
    })

    it('maxLength validator with  correct value', () => {
        const validator = {
            type: 'maxLength',
            value: '10',
            message: 'too long'
        }

        expect(validatorFactory(validator, field)('shorttext')).toBe(void 0)
    })

    it('maxLength validator with  incorrect value', () => {
        const validator = {
            type: 'maxLength',
            value: '10',
            message: 'too long'
        }

        expect(validatorFactory(validator, field)('long long text')).toBe('too long')
    })

    describe('required validations for any types of field', () => {

        it('checkbox with correct value', () => {
            const validator = {
                type: 'required',
                value: '',
                message: 'please check it'
            }

            expect(validatorFactory(validator, field)(true)).toBe(void 0)
        })

        it('checkbox with incorrect value', () => {
            const validator = {
                type: 'required',
                value: '',
                message: 'please check it'
            }

            expect(validatorFactory(validator, field)(false)).toBe('please check it')
        })

        it('text, decimal, integer and other field type with correct', () => {
            const validator = {
                type: 'required',
                value: '',
                message: 'please check it'
            }

            expect(validatorFactory(validator, field)('Some not null text')).toBe(void 0)
        })

        it('text, decimal, integer and other field type with incorrect', () => {
            const validator = {
                type: 'required',
                value: '',
                message: 'please check it'
            }

            expect(validatorFactory(validator, field)('')).toBe('please check it')
        })

        it('date format with correct', () => {
            const validator = {
                type: 'minValue',
                value: '2018-08-08T00:00:00.000+03:00',
                message: 'Дата позже 08.08.2018'
            }

            const dateField = {
                type: 'text',
                format: 'date'
            }

            expect(validatorFactory(validator, dateField)('2018-08-10T00:00:00.000+03:00')).toBe(void 0)
        })

        it('date format with incorrect', () => {
            const validator = {
                type: 'minValue',
                value: '2018-08-08T00:00:00.000+03:00',
                message: 'Дата позже 08.08.2018'
            }

            const dateField = {
                type: 'text',
                format: 'date'
            }

            expect(validatorFactory(validator, dateField)('2018-08-07T00:00:00.000+03:00')).toBe('Дата позже 08.08.2018')
        })

        it('multiselect with an empty value', () => {
            const validator = {
                type: 'required',
                value: '',
                message: 'please choose at least one option'
            }

            const multiSelect = {
                id: 'multiselect',
                type: 'multiselect',
                title: 'multiselect',
                description: 'multiselect',
            }

            expect(validatorFactory(validator, multiSelect)([])).toBe('please choose at least one option')
        })
        it('multiselect with some value', () => {
            const validator = {
                type: 'required',
                value: '',
                message: 'please choose at least one option'
            }

            const multiSelect = {
                id: 'multiselect',
                type: 'multiselect',
                title: 'multiselect',
                description: 'multiselect',
            }

            expect(validatorFactory(validator, multiSelect)(['someOption'])).toBe(void 0)
        })
    })

})
