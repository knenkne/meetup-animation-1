import { getMaskedPristineFieldIDs } from '../get-masked-pristine-field-ids'

describe('Adapter :: selectors', () => {
    describe('getMaskedPristineFieldIDs возвращает', () => {
        it('массив идентификаторов не изменившимся полей с признаком masked', () => {

            const reduxFormValues = {
                'transfer:fullName:lastName': 'Spektor***',
                'transfer:fullName:firstName': 'Galina',
                'amount:amount:total': '200',
                'amount:amount:currency': 'rub',
                'confirmation:accept': 'false'

            }

            const reduxFormInitialValues = {
                'transfer:fullName:lastName': 'Popova',
                'transfer:fullName:firstName': 'Galina',
                'amount:amount:total': '200',
                'amount:amount:currency': 'rub',
                'confirmation:accept': 'false'
            }


            const maskedFields = [
                'transfer:fullName:lastName'
            ]

            const expected = []

            const actual = getMaskedPristineFieldIDs.resultFunc(reduxFormValues, reduxFormInitialValues, maskedFields)

            expect(actual).toEqual(expected)
        })
        it('пустой массив, если поля с признаком masked не менялись', () => {

            const reduxFormValues = {
                'transfer:fullName:lastName': 'Spektor***',
                'transfer:fullName:firstName': 'Galina',
                'amount:amount:total': '200',
                'amount:amount:currency': 'rub',
                'confirmation:accept': 'false'

            }

            const reduxFormInitialValues = {
                'transfer:fullName:lastName': 'Spektor***',
                'transfer:fullName:firstName': 'Galina',
                'amount:amount:total': '200',
                'amount:amount:currency': 'rub',
                'confirmation:accept': 'false'
            }


            const maskedFields = [
                'transfer:fullName:lastName'
            ]

            const expected = ['transfer:fullName:lastName']
            const actual = getMaskedPristineFieldIDs.resultFunc(reduxFormValues, reduxFormInitialValues, maskedFields)

            expect(actual).toEqual(expected)
        })
    })
})
