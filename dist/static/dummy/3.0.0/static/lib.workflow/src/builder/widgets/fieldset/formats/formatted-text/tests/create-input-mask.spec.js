import { createInputMask } from '../create-input-mask'

describe('Formatted createInputMask', () => {

    const caseList = [{
        name: 'Not isFormattedNumber. Check bad mask:',
        val: '+7([000]) [SSs]-[099]-<ВEH> [ [ЫЫ] ] <<А-Я><',
        isFormattedNumber: false,
        result: '+7(/\\d//\\d//\\d/) /[A-Za-z]//[A-Za-z]//[A-Za-z]/-/\\d//\\d//\\d/-/[ВEH]/ [ /[А-Яа-яЁё]//[А-Яа-яЁё]/ ] </[А-Я]/<'
    }, {
        name: 'Not isFormattedNumber. Check good number mask:',
        val: '+7([000]) [999]-[99]-[99]',
        isFormattedNumber: false,
        result: '+7(/\\d//\\d//\\d/) /\\d//\\d//\\d/-/\\d//\\d/-/\\d//\\d/'
    }, {
        name: 'Not isFormattedNumber. Check good mask:',
        val: '+7([000]) [999]-[Ss]-[Ыы]',
        isFormattedNumber: false,
        result: '+7(/\\d//\\d//\\d/) /\\d//\\d//\\d/-/[A-Za-z]//[A-Za-z]/-/[А-Яа-яЁё]//[А-Яа-яЁё]/'
    }, {
        name: 'isFormattedNumber. Check good number mask:',
        val: '+7([000]) [999]-[99]-[99]',
        isFormattedNumber: true,
        result: '+7(/\\d//\\d//\\d/) /\\d//\\d//\\d/-/\\d//\\d/-/\\d//\\d/'
    }, {
        name: 'isFormattedNumber. Check mask with letters:',
        val: '+7([000]) [999]-[Ss]-[Ыы]',
        isFormattedNumber: true,
        result: '+7(/\\d//\\d//\\d/) /\\d//\\d//\\d/--'
    }]

    caseList.forEach((item) => {
        it(item.name, () => {
            expect(createInputMask(item.val, item.isFormattedNumber).join('')).toBe(item.result)
        })
    })
})
