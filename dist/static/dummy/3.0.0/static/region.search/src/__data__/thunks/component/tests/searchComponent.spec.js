import {
    addEvents,
    removeEvents,
    updateScreenInfo,
    sortBlocks
} from '../searchComponent'

describe('searchComponent:', () => {
    it('addEvents:', () => {
        const mockDispatch = jest.fn()
        const mockGetState = jest.fn()
        const mockAddEventListenerWindow = jest.fn()
        const mockAddEventListenerBody = jest.fn()

        Object.defineProperty(window, 'addEventListener', {
            writable: true,
            value: mockAddEventListenerWindow
        })

        Object.defineProperty(document.body, 'addEventListener', {
            writable: true,
            value: mockAddEventListenerBody
        })

        addEvents(mockDispatch, mockGetState)

        expect(mockDispatch).toHaveBeenCalledTimes(0)
        expect(mockGetState).toHaveBeenCalledTimes(0)
        expect(mockAddEventListenerWindow).toHaveBeenCalledTimes(3)
        expect(mockAddEventListenerWindow).toHaveBeenNthCalledWith(1, 'load', updateScreenInfo)
        expect(mockAddEventListenerWindow).toHaveBeenNthCalledWith(2, 'popstate', updateScreenInfo)
        expect(mockAddEventListenerWindow).toHaveBeenNthCalledWith(3, 'keyup', updateScreenInfo)
        expect(mockAddEventListenerBody).toHaveBeenCalledTimes(1)
        expect(mockAddEventListenerBody).toHaveBeenCalledWith('click', updateScreenInfo)

        expect(updateScreenInfo.dispatch).toEqual(mockDispatch)
        expect(updateScreenInfo.getState).toEqual(mockGetState)
    })

    it('removeEvents:', () => {
        const mockRemoveEventListenerWindow = jest.fn()
        const mockRemoveEventListenerBody = jest.fn()

        Object.defineProperty(window, 'removeEventListener', {
            writable: true,
            value: mockRemoveEventListenerWindow
        })

        Object.defineProperty(document.body, 'removeEventListener', {
            writable: true,
            value: mockRemoveEventListenerBody
        })

        removeEvents()

        expect(mockRemoveEventListenerWindow).toHaveBeenCalledTimes(3)
        expect(mockRemoveEventListenerWindow).toHaveBeenNthCalledWith(1, 'load', updateScreenInfo)
        expect(mockRemoveEventListenerWindow).toHaveBeenNthCalledWith(2, 'popstate', updateScreenInfo)
        expect(mockRemoveEventListenerWindow).toHaveBeenNthCalledWith(3, 'keyup', updateScreenInfo)
        expect(mockRemoveEventListenerBody).toHaveBeenCalledTimes(1)
        expect(mockRemoveEventListenerBody).toHaveBeenCalledWith('click', updateScreenInfo)
    })

    describe('sortBlocks:', () => {
        it('находимся на экране платежей:', () => {
            const screenUrl = 'payments/main'

            expect(sortBlocks(screenUrl)).toEqual(['OperationsHistory', 'Providers', 'Pages', 'Products'])
        })

        it('находимся на экране истории операций:', () => {
            const screenUrl = 'operations'

            expect(sortBlocks(screenUrl)).toEqual(['OperationsHistory', 'Providers', 'Pages', 'Products'])
        })

        it('находимся на экране главном:', () => {
            const screenUrl = 'main'

            expect(sortBlocks(screenUrl)).toEqual(['Pages', 'OperationsHistory', 'Providers', 'Products'])
        })

        it('находимся на экране каталог:', () => {
            const screenUrl = 'catalog'

            expect(sortBlocks(screenUrl)).toEqual(['Pages', 'OperationsHistory', 'Providers', 'Products'])
        })

        it('находимся на экране неизвестном:', () => {
            const screenUrl = 'region.search'

            expect(sortBlocks(screenUrl)).toEqual(['Pages', 'OperationsHistory', 'Providers', 'Products'])
        })
    })
})
