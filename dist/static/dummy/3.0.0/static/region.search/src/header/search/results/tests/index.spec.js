import Pages from '../pages'
import { Products } from '../products'
import { OperationsHistory } from '../operations-history'
import Providers from '../providers/providers'

import { store, isBottomHidden, changeBottomHidden } from '..'

describe('Тестирование модуля показа результатов поиска, когда результаты найдены:', () => {
    describe('store:', () => {
        it('Содержимое словаря store:', () => {
            expect(store['Pages']).toEqual(Pages)
            expect(store['Products']).toEqual(Products)
            expect(store['OperationsHistory']).toEqual(OperationsHistory)
            expect(store['Providers']).toEqual(Providers)
            expect(Object.keys(store).length).toBe(4)
        })
    })

    describe('Тестирование функции isBottomHidden:', () => {
        beforeEach(() => {
            Object.defineProperty(window, 'innerHeight', {
                writable: true,
                value: 100
            })
        })

        it('Не видно значичельную исть попапа:', () => {
            const bottom = 125
            const target = {
                current: {
                    getBoundingClientRect: () => ({ bottom }),
                }
            }
            const result = isBottomHidden(target)

            expect(result).toBe(false)
        })

        it('Не видно незначичельную исть попапа:', () => {
            const bottom = 105
            const target = {
                current: {
                    getBoundingClientRect: () => ({ bottom }),
                }
            }
            const result = isBottomHidden(target)

            expect(result).toBe(true)
        })

        it('Весь попап виден, но он очень близок к нижней части viewport-а:', () => {
            const bottom = 99
            const target = {
                current: {
                    getBoundingClientRect: () => ({ bottom }),
                }
            }
            const result = isBottomHidden(target)

            expect(result).toBe(true)
        })

        it('Весь попап виден, нижняя часть viewport-а далеко:', () => {
            const bottom = 50
            const target = {
                current: {
                    getBoundingClientRect: () => ({ bottom }),
                }
            }
            const result = isBottomHidden(target)

            expect(result).toBe(false)
        })

        it('попап скрыт:', () => {
            const target = null
            const result = isBottomHidden(target)

            expect(result).toBe(null)
        })
    })

    describe('Тестирование функции changeBottomHidden:', () => {
        beforeEach(() => {
            Object.defineProperty(window, 'innerHeight', {
                writable: true,
                value: 100
            })
        })

        it('Значение изменилось:', () => {
            const bottom = 99
            const target = {
                current: {
                    getBoundingClientRect: () => ({ bottom }),
                }
            }
            const mockSetBottomHidden = jest.fn()

            changeBottomHidden(target, false, mockSetBottomHidden)

            expect(mockSetBottomHidden).toHaveBeenCalledTimes(1)
            expect(mockSetBottomHidden).toHaveBeenCalledWith(true)
        })

        it('Значение не изменилось:', () => {
            const bottom = 140
            const target = {
                current: {
                    getBoundingClientRect: () => ({ bottom }),
                }
            }
            const mockSetBottomHidden = jest.fn()

            changeBottomHidden(target, false, mockSetBottomHidden)

            expect(mockSetBottomHidden).toHaveBeenCalledTimes(0)
        })

        it('Значение изменилось, но компонент отмонтирован:', () => {
            const target = {}
            const mockSetBottomHidden = jest.fn()

            changeBottomHidden(target, false, mockSetBottomHidden)

            expect(mockSetBottomHidden).toHaveBeenCalledTimes(0)
        })
    })
})
