import {
    handlePreventDefault,
    handleStopPropagation,
    handleSelectAll,

    eventCheckedHandler,
    eventValueHandler,
    disableHandler,
    // preventHandler,
    // stopPropagationHandler,
    // selectAllHandler,

    argsResolver
} from '../handlers'

describe('utils/handlers', () => {
    describe('handlers', () => {
        it('eventValueHandler', () => {
            const onChange = jest.fn()
            const decoratedOnChange = eventValueHandler(onChange)
            expect(typeof decoratedOnChange).toBe('function')
            expect(eventValueHandler(onChange)).toBe(decoratedOnChange)

            const event = { target: { value: '1' } }
            decoratedOnChange(event)
            expect(onChange).toHaveBeenCalledWith('1', event)
        })
        it('eventCheckedHandler', () => {
            const onChange = jest.fn()
            const decoratedOnChange = eventCheckedHandler(onChange)
            expect(typeof decoratedOnChange).toBe('function')
            expect(eventCheckedHandler(onChange)).toBe(decoratedOnChange)

            const event = { target: { checked: true } }
            decoratedOnChange(event)
            expect(onChange).toHaveBeenCalledWith(true, event)
        })
        it('disableHandler true', () => {
            const onChange = jest.fn()
            const decoratedOnChange = disableHandler(onChange, true)
            expect(typeof decoratedOnChange).toBe('function')
            expect(disableHandler(onChange, true)).toBe(decoratedOnChange)

            const event = { preventDefault: jest.fn() }
            decoratedOnChange(event)
            expect(onChange).not.toHaveBeenCalled()
            expect(event.preventDefault).toHaveBeenCalled()
        })
        it('disableHandler false', () => {
            const onChange = jest.fn()
            const decoratedOnChange = disableHandler(onChange, false)
            expect(typeof decoratedOnChange).toBe('function')
            expect(disableHandler(onChange, false)).toBe(decoratedOnChange)

            const event = { preventDefault: jest.fn() }
            decoratedOnChange(event)
            expect(onChange).toHaveBeenCalled()
            expect(event.preventDefault).not.toHaveBeenCalled()
        })
    })

    describe('handles', () => {
        it('handlePreventDefault', () => {
            const brokenEvent = {}
            expect(() => handlePreventDefault(brokenEvent)).not.toThrow()
            expect(handlePreventDefault(brokenEvent)).toBe(brokenEvent)

            const event = { preventDefault: jest.fn() }
            expect(handlePreventDefault(event)).toBe(event)
            expect(event.preventDefault).toHaveBeenCalled()
        })

        it('handleStopPropagation', () => {
            const brokenEvent = {}
            expect(() => handleStopPropagation(brokenEvent)).not.toThrow()
            expect(handleStopPropagation(brokenEvent)).toBe(brokenEvent)

            const event = { stopPropagation: jest.fn() }
            expect(handleStopPropagation(event)).toBe(event)
            expect(event.stopPropagation).toHaveBeenCalled()
        })

        it('handleSelectAll', () => {
            const brokenEvent = {}
            expect(() => handleSelectAll(brokenEvent)).not.toThrow()
            expect(handleSelectAll(brokenEvent)).toBe(brokenEvent)

            const event = { target: { value: '123' } }
            const result = handleSelectAll(event)
            expect(event.target.selectionStart).toBe(0)
            expect(event.target.selectionEnd).toBe(3)
            expect(result).toBe(event)
        })
    })

    it('argsResolver', () => {
        const result = argsResolver(1, 2)
        expect(result).toEqual([1, 2])
        expect(argsResolver(1, 2)).toEqual(result)
        const result2 = argsResolver(2, 1)
        expect(result2).toEqual([2, 1])
        expect(argsResolver(2, 1)).not.toEqual(result)
        expect(argsResolver(2, 1)).toEqual(result2)
    })
})
