import _ from 'lodash'
import { Currency } from '@sbol/lib.ui'

import {
    checkIsCurrency,
    formatNumber
} from '../amount'

const currencies = {
    rub: '₽',
    uSd: '$',
    gbp: '£',
    eur: '€',
    Rur: '₽',
    cad: '$',
    cny: '¥',
    hkd: '$',
    sgD: '$'
}

describe('Тестирование функций компонента Amount:', () => {
    it('Проверить длину имеющегося списка влют', () => {
        expect(Object.keys(Currency.options.symbols).length).toBe(Object.keys(currencies).length)
    })

    it('checkIsCurrency - проверить все имеющиеся валюты, ключи передавать не только с маленькими буквам, но и с заглавными', () => {
        _.forEach(currencies, (value, key) => {
            expect(true).toBe(checkIsCurrency(key))
            expect(value).toBe(Currency.options.symbols[key.toLowerCase()])
        })
    })

    it('formatNumber', () => {
        const zero = 0

        const number1 = 100
        const number2 = 1001
        const number3 = 10012
        const number4 = 100.2
        const number5 = 2002.55

        const commission1 = 0.1
        const commission2 = 0.01
        const commission3 = 20.01
        const commission4 = 20.1
        const commission5 = 20

        expect(formatNumber(number1, zero)).toBe('100')
        expect(formatNumber(number2, zero)).toBe('1 001')
        expect(formatNumber(number3, zero)).toBe('10 012')
        expect(formatNumber(number4, zero)).toBe('100.20')
        expect(formatNumber(number5, zero)).toBe('2 002.55')

        expect(formatNumber(number1, commission1)).toBe('100.10')
        expect(formatNumber(number2, commission2)).toBe('1 001.01')
        expect(formatNumber(number3, commission3)).toBe('10 032.01')
        expect(formatNumber(number4, commission4)).toBe('120.30')
        expect(formatNumber(number5, commission5)).toBe('2 022.55')

        expect(formatNumber(-number1, zero)).toBe('100')
        expect(formatNumber(-number2, zero)).toBe('1 001')
        expect(formatNumber(-number3, zero)).toBe('10 012')
        expect(formatNumber(-number4, zero)).toBe('100.20')
        expect(formatNumber(-number5, zero)).toBe('2 002.55')

        expect(formatNumber(-number1, commission1)).toBe('100.10')
        expect(formatNumber(-number2, commission2)).toBe('1 001.01')
        expect(formatNumber(-number3, commission3)).toBe('10 032.01')
        expect(formatNumber(-number4, commission4)).toBe('120.30')
        expect(formatNumber(-number5, commission5)).toBe('2 022.55')

        expect(formatNumber(-number1, -commission1)).toBe('100.10')
        expect(formatNumber(-number2, -commission2)).toBe('1 001.01')
        expect(formatNumber(-number3, -commission3)).toBe('10 032.01')
        expect(formatNumber(-number4, -commission4)).toBe('120.30')
        expect(formatNumber(-number5, -commission5)).toBe('2 022.55')

        expect(formatNumber(number1, -commission1)).toBe('100.10')
        expect(formatNumber(number2, -commission2)).toBe('1 001.01')
        expect(formatNumber(number3, -commission3)).toBe('10 032.01')
        expect(formatNumber(number4, -commission4)).toBe('120.30')
        expect(formatNumber(number5, -commission5)).toBe('2 022.55')
    })
})
