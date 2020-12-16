import { memoizeFuncWithArgs } from '..'

describe('memoizeFuncWithArgs', () => {
    it('makes valid calls to original function', () => {
        const onClickSpy = jest.fn()
        const data = 1

        const memoized = memoizeFuncWithArgs(onClickSpy, data)

        memoized()
        expect(onClickSpy).toHaveBeenCalled()

        memoized()
        expect(onClickSpy.mock.calls.length).toEqual(2)
    })

    it('creates different functions for different arguments', () => {
        const onClickSpy = jest.fn()
        const data = 1
        const onClickSpy2 = jest.fn()
        const data2 = 2

        const memoized0 = memoizeFuncWithArgs(onClickSpy, data)
        const memoized1 = memoizeFuncWithArgs(onClickSpy2, data)
        const memoized2 = memoizeFuncWithArgs(onClickSpy, data2)
        const memoized3 = memoizeFuncWithArgs(onClickSpy2, data2)

        expect(memoized0).not.toBe(memoized1)
        expect(memoized0).not.toBe(memoized2)
        expect(memoized0).not.toBe(memoized3)
        expect(memoized1).not.toBe(memoized2)
        expect(memoized1).not.toBe(memoized3)
        expect(memoized2).not.toBe(memoized3)
    })

    it('creates same functions for same arguments', () => {
        const onClickSpy = jest.fn()
        const data = 1
        const data1 = 1

        const memoized0 = memoizeFuncWithArgs(onClickSpy, data)
        const memoized1 = memoizeFuncWithArgs(onClickSpy, data)
        const memoized2 = memoizeFuncWithArgs(onClickSpy, data1)

        expect(memoized0).toBe(memoized1)
        expect(memoized0).toBe(memoized2)
        expect(memoized1).toBe(memoized2)
    })

    it('can memoize function with multiple arguments', () => {
        const onClickSpy = jest.fn()

        const memoized0 = memoizeFuncWithArgs(onClickSpy, 0, 1, 2)
        const memoized1 = memoizeFuncWithArgs(onClickSpy, 0, 1, 2)

        expect(memoized0).toBe(memoized1)

        memoized0('event')
        expect(onClickSpy).toHaveBeenCalledWith(0, 1, 2, 'event')

        memoized1()
        expect(onClickSpy.mock.calls.length).toEqual(2)
    })
})
