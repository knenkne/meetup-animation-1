import { bottomLine, topLine } from '../title'

describe('Тестирование функций разделения заголовка на 2 подстроки', () => {

    it('Заголовок < 15 символов. Верхняя строка. Ширина экран < 1056px', () => {
        Object.defineProperty(window.screen, 'availWidth', {
            writable: true,
            value: 300
        })

        const result = topLine('Ростелеком')
        expect(result).toEqual('Ростелеком')
    })

    it('Заголовок < 15 символов. Нижняя строка. Ширина экран < 1056px', () => {
        Object.defineProperty(window.screen, 'availWidth', {
            writable: true,
            value: 300
        })

        const result = bottomLine('Ростелеком')
        expect(result).toEqual('')
    })

    it('Заголовок = 15 символов. Верхняя строка. Ширина экран < 1056px', () => {
        Object.defineProperty(window.screen, 'availWidth', {
            writable: true,
            value: 300
        })

        const result = topLine('Южная телекомму')
        expect(result).toEqual('Южная телекомму')
    })

    it('Заголовок = 15 символов. Нижняя строка. Ширина экран < 1056px', () => {
        Object.defineProperty(window.screen, 'availWidth', {
            writable: true,
            value: 300
        })

        const result = bottomLine('Южная телекомму')
        expect(result).toEqual('')
    })

    it('Заголовок = 16 символов. Верхняя строка. Ширина экран < 1056px', () => {
        Object.defineProperty(window.screen, 'availWidth', {
            writable: true,
            value: 300
        })

        const result = topLine('Южная телекоммун')
        expect(result).toEqual('Южная')
    })

    it('Заголовок = 16 символов. Нижняя строка. Ширина экран < 1056px', () => {
        Object.defineProperty(window.screen, 'availWidth', {
            writable: true,
            value: 300
        })

        const result = bottomLine('Южная телекоммун')
        expect(result).toEqual('телекоммун')
    })

    it('Заголовок > 16 символов. Верхняя строка. Ширина экран < 1056px', () => {
        Object.defineProperty(window.screen, 'availWidth', {
            writable: true,
            value: 300
        })

        const result = topLine('Южная телекоммуникационная')
        expect(result).toEqual('Южная')
    })

    it('Заголовок > 16 символов. Нижняя строка. Ширина экран < 1056px', () => {
        Object.defineProperty(window.screen, 'availWidth', {
            writable: true,
            value: 300
        })

        const result = bottomLine('Южная телекоммуникационная')
        expect(result).toEqual('телекоммуникационная')
    })

    it('Заголовок > 16 символов без пробелов. Верхняя строка. Ширина экран < 1056px', () => {
        Object.defineProperty(window.screen, 'availWidth', {
            writable: true,
            value: 300
        })

        const result = topLine('Консультационно-диагностический')
        expect(result).toEqual('Консультационно-диагностический')
    })

    it('Заголовок > 16 символов без пробелом. Нижняя строка. Ширина экран < 1056px', () => {
        Object.defineProperty(window.screen, 'availWidth', {
            writable: true,
            value: 300
        })

        const result = bottomLine('Консультационно-диагностический')
        expect(result).toEqual('')
    })

    it('Заголовок < 30 символов. Верхняя строка. Ширина экран > 1056px', () => {
        Object.defineProperty(window.screen, 'availWidth', {
            writable: true,
            value: 1300
        })

        const result = topLine('Ростелеком')
        expect(result).toEqual('Ростелеком')
    })

    it('Заголовок < 30 символов. Нижняя строка. Ширина экрана > 1056px', () => {
        Object.defineProperty(window.screen, 'availWidth', {
            writable: true,
            value: 1300
        })

        const result = bottomLine('Ростелеком')
        expect(result).toEqual('')
    })

    it('Заголовок = 30 символов. Верхняя строка. Ширина экрана > 1056px', () => {
        Object.defineProperty(window.screen, 'availWidth', {
            writable: true,
            value: 1300
        })

        const result = topLine('Южная телекоммуникационная ком')
        expect(result).toEqual('Южная телекоммуникационная ком')
    })

    it('Заголовок = 30 символов. Нижняя строка. Ширина экрана > 1056px', () => {
        Object.defineProperty(window.screen, 'availWidth', {
            writable: true,
            value: 1300
        })
        const result = bottomLine('Южная телекоммуникационная ком')
        expect(result).toEqual('')
    })

    it('Заголовок = 31 символов. Верхняя строка. Ширина экрана > 1056px', () => {
        Object.defineProperty(window.screen, 'availWidth', {
            writable: true,
            value: 1300
        })
        const result = topLine('Южная телекоммуникационная комп')
        expect(result).toEqual('Южная телекоммуникационная')
    })

    it('Заголовок = 31 символов. Нижняя строка. Ширина экрана > 1056px', () => {
        Object.defineProperty(window.screen, 'availWidth', {
            writable: true,
            value: 1300
        })
        const result = bottomLine('Южная телекоммуникационная комп')
        expect(result).toEqual('комп')
    })

    it('Заголовок > 31 символов. Верхняя строка. Ширина экрана > 1056px', () => {
        Object.defineProperty(window.screen, 'availWidth', {
            writable: true,
            value: 1300
        })
        const result = topLine('Южная телекоммуникационная компания')
        expect(result).toEqual('Южная телекоммуникационная')
    })

    it('Заголовок > 31 символов. Нижняя строка. Ширина экрана > 1056px', () => {
        Object.defineProperty(window.screen, 'availWidth', {
            writable: true,
            value: 1300
        })
        const result = bottomLine('Южная телекоммуникационная компания')
        expect(result).toEqual('компания')
    })

    it('Заголовок > 30 символов без пробелов. Верхняя строка. Ширина экрана > 1056px', () => {
        Object.defineProperty(window.screen, 'availWidth', {
            writable: true,
            value: 1300
        })
        const result = topLine('Консультационно-диагностический')
        expect(result).toEqual('Консультационно-диагностический')
    })

})

