import { smoothScroll } from '../smooth-scroll'


describe('Тестирование функции smooth-scroll', () => {

    beforeEach(() => {
        Object.defineProperty(window, 'pageYOffset', {
            writable: true,
            value: 100
        })

        global.scrollTo = (x, y) => {
            Object.defineProperty(window, 'pageYOffset', {
                writable: true,
                value: y
            })
        }

        jest.useFakeTimers()
    })

    it('Скроллинг вверх к 40px', () => {

        smoothScroll(40)
        jest.runAllTimers()

        expect(window.pageYOffset).toBe(40)
    })

    it('Скроллинг вверх к 43px', () => {

        smoothScroll(43)
        jest.runAllTimers()

        expect(window.pageYOffset).toBe(43)
    })

    it('Скроллинг вниз (не выполняется)', () => {

        smoothScroll(140)
        jest.runAllTimers()

        expect(window.pageYOffset).toBe(100)
    })
})
