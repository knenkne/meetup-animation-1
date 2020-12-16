import { calculateMask, recursiveCodeLength } from '../phone-mask'

const phoneCodes = ['3022', '49353', '382542', '8455533']
const masks = {
    3: ['+', '7', ' ', '(', /\d/, /\d/, /\d/, ')', ' ', /\d/, /\d/, /\d/, '-', /\d/, /\d/, '-', /\d/, /\d/],
    4: ['+', '7', ' ', '(', /\d/, /\d/, /\d/, /\d/, ')', ' ', /\d/, /\d/, '-', /\d/, /\d/, '-', /\d/, /\d/],
    5: ['+', '7', ' ', '(', /\d/, /\d/, /\d/, /\d/, /\d/, ')', ' ', /\d/, '-', /\d/, /\d/, '-', /\d/, /\d/],
    6: ['+', '7', ' ', '(', /\d/, /\d/, /\d/, /\d/, /\d/, /\d/, ')', ' ', /\d/, /\d/, '-', /\d/, /\d/],
    7: ['+', '7', ' ', '(', /\d/, /\d/, /\d/, /\d/, /\d/, /\d/, /\d/, ')', ' ', /\d/, '-', /\d/, /\d/],
}
const defaultCodeLength = 3

describe('calculateMask', () => {
    it('с кодом на 3 символа', () => {
        const codeLength = 3
        expect(calculateMask(codeLength)).toEqual(masks[codeLength])
    })
    it('с кодом на 4 символа', () => {
        const codeLength = 4
        expect(calculateMask(codeLength)).toEqual(masks[codeLength])
    })
    it('с кодом на 5 символа', () => {
        const codeLength = 5
        expect(calculateMask(codeLength)).toEqual(masks[codeLength])
    })
    it('с кодом на 6 символа', () => {
        const codeLength = 6
        expect(calculateMask(codeLength)).toEqual(masks[codeLength])
    })
    it('с кодом на 7 символа', () => {
        const codeLength = 7
        expect(calculateMask(codeLength)).toEqual(masks[codeLength])
    })
})

describe('recursiveCodeLength', () => {
    it('с кодом на 3 символа, начало ввода', () => {
        const value = '91'
        expect(recursiveCodeLength(value, phoneCodes, defaultCodeLength)).toBe(3)
    })
    it('с кодом на 3 символа', () => {
        const value = '9162767687'
        expect(recursiveCodeLength(value, phoneCodes, defaultCodeLength)).toBe(3)
    })
    it('с кодом на 4 символа', () => {
        const value = '3022'
        expect(recursiveCodeLength(value, phoneCodes, defaultCodeLength)).toBe(4)
    })
    it('с кодом на 5 символов', () => {
        const value = '49353'
        expect(recursiveCodeLength(value, phoneCodes, defaultCodeLength)).toBe(5)
    })
    it('с кодом на 6 символов', () => {
        const value = '382542'
        expect(recursiveCodeLength(value, phoneCodes, defaultCodeLength)).toBe(6)
    })

    it('с кодом на 7 символов', () => {
        const value = '8455533'
        expect(recursiveCodeLength(value, phoneCodes, defaultCodeLength)).toBe(7)
    })
})
