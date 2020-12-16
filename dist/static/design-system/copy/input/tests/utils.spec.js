import _ from 'lodash'
import createNumberMask from 'text-mask-addons/dist/createNumberMask'

import {
    safeClamp,
    unmaskNumberValue,
    prepareToMaskNumberValue,
    maskNumberValue,
    setHeight,
    setWidth,
    getInputDiff
} from '../utils'

describe('<Input /> utils', () => {
    it('safeClamp', () => {
        expect(safeClamp('5000', -1e100, 1e100)).toBe('5000')
        expect(safeClamp('1e101', -1e100, 1e100)).toBe(`1${_.repeat('0', 100)}`)
        expect(safeClamp('5000', 5001, void 0)).toBe('5001')
        expect(safeClamp('5000', void 0, 4999)).toBe('4999')
        expect(safeClamp('-', void 0, 4999)).toBe('-')
        expect(safeClamp('', void 0, 4999)).toBe('')
        expect(safeClamp('5000', void 0, void 0)).toBe('5000')
    })

    it('unmaskNumberValue', () => {
        expect(unmaskNumberValue('foo00010,4bar', { decimalSymbol: ',' })).toBe('00010.4')
        expect(unmaskNumberValue('foo-,', { decimalSymbol: ',' })).toBe('-.')
        expect(unmaskNumberValue('foo0000', { allowEmpty: true, decimalSymbol: ',' })).toBe('0000')
        expect(unmaskNumberValue('-', { blur: true, decimalSymbol: ',' })).toBe('0')
        expect(unmaskNumberValue('0', { blur: true, decimalSymbol: ',' })).toBe('0')
        expect(unmaskNumberValue('0', { allowEmpty: true, decimalSymbol: ',' })).toBe('0')
        expect(unmaskNumberValue('10', { blur: true, allowEmpty: true, decimalSymbol: ',' })).toBe('10')
    })

    it('prepareToMaskNumberValue', () => {
        expect(prepareToMaskNumberValue('5000.55', { allowDecimal: true, decimalSymbol: ',' })).toBe('5000,55')
        expect(prepareToMaskNumberValue('5000.55', {})).toBe('5000')
    })

    describe('maskNumberValue', () => {
        it('have no traps of createNumberMask', () => {
            const mask = createNumberMask({
                prefix: '',
                suffix: '',
                includeThousandsSeparator: true,
                thousandsSeparatorSymbol: '.',
                allowDecimal: true,
                decimalSymbol: ',',
                decimalLimit: 2,
                allowNegative: true,
                allowLeadingZeroes: true
            })

            expect(maskNumberValue('5000.55555', {
                allowDecimal: true,
                decimalSymbol: ',',
                mask
            })).toBe('5.000,55')
        })

        it('conforms random value correctly', () => {
            const mask = createNumberMask({
                prefix: 'pre ',
                suffix: ' suf',
                includeThousandsSeparator: true,
                thousandsSeparatorSymbol: ' ',
                allowDecimal: true,
                decimalSymbol: '.',
                decimalLimit: 2,
                allowNegative: true,
                allowLeadingZeroes: true
            })

            expect(maskNumberValue('1234.56789', {
                mask,
                allowDecimal: true,
                decimalSymbol: '.',
                prefix: 'pre ',
                suffix: ' suf'
            })).toBe('pre 1 234.56 suf')
        })

        it('prefix and suffix is correct for empty value', () => {
            const mask = createNumberMask({
                prefix: 'pre ',
                suffix: ' suf',
                includeThousandsSeparator: true,
                thousandsSeparatorSymbol: ' ',
                allowDecimal: true,
                decimalSymbol: '.',
                decimalLimit: 2,
                allowNegative: true,
                allowLeadingZeroes: true
            })

            expect(maskNumberValue('', {
                mask,
                allowDecimal: true,
                decimalSymbol: '.',
                prefix: 'pre ',
                suffix: ' suf'
            })).toBe('')
        })
    })

    xit('setHeight', () => {
        const test = document.createElement('div')
        test.id = '123'
        document.body.appendChild(test)
        const element = document.createElement('textarea')
        document.getElementById('123').appendChild(element)

        setHeight(element, 36)
        expect(element.style.height).toBe('36px')

        element.value = '1\n1\n1\n1\n1\n1\n1\n1\n1\n1\n1\n1\n1\n1\n1\n'
        setHeight(element, 36)
        expect(parseFloat(element.style.height)).toBeGreaterThan(250)
        expect(parseFloat(element.style.height)).toBeLessThan(325)

        element.value = '1\n1\n1\n1\n1\n1\n1\n'
        setHeight(element, 36)
        expect(parseFloat(element.style.height)).toBeGreaterThan(100)
        expect(parseFloat(element.style.height)).toBeLessThan(150)

        document.body.removeChild(document.getElementById('123'))
    })

    xit('setWidth', () => {
        const test = document.createElement('div')
        test.id = '123'
        document.body.appendChild(test)
        const element = document.createElement('input')
        document.getElementById('123').appendChild(element)

        setWidth(element, 36)
        expect(element.style.width).toBe('36px')

        element.value = '123456789012345678901234567890'
        setWidth(element, 36)
        expect(parseFloat(element.style.width)).toBeGreaterThan(200)
        expect(parseFloat(element.style.width)).toBeLessThan(310)

        element.value = '1234567890'
        setWidth(element, 36)
        expect(parseFloat(element.style.width)).toBeGreaterThan(50)
        expect(parseFloat(element.style.width)).toBeLessThan(150)

        document.body.removeChild(document.getElementById('123'))
    })

    it('getInputDiff', () => {
        expect(getInputDiff('12341', 0, 4)).toBe('1234')
        expect(getInputDiff('12341', 1, 5)).toBe('2341')
        expect(getInputDiff('1234', 0, 4)).toBe('1234')
        expect(getInputDiff('1234', 0, 3)).toBe('123')
        expect(getInputDiff('+7 301 222-••-•8', 8, 9)).toBe('2')
    })
})
