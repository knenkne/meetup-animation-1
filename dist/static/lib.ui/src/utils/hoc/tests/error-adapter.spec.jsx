import React from 'react'
import { shallow } from 'enzyme'

import { errorAdapterFactory, defaultCondition } from '../error-adapter'
import { Input } from '../../..'

describe('errorAdapter HOC - defaultCondition', () => {
    it('touched and active', () => {
        expect(defaultCondition({
            touched: true,
            active: true,
            error: 'error'
        })).toBe('error')
    })
    it('not touched and active', () => {
        expect(defaultCondition({
            touched: false,
            active: true,
            error: 'error'
        })).toBe('')
    })
    it('touched and not active', () => {
        expect(defaultCondition({
            touched: true,
            active: false,
            error: 'error'
        })).toBe('error')
    })
    it('not touched and not active', () => {
        expect(defaultCondition({
            touched: false,
            active: false,
            error: 'error'
        })).toBe('')
    })
})

describe('errorAdapter HOC', () => {
    it('is available', () => {
        expect(errorAdapterFactory).toBeDefined()
    })

    it('dispatch fn why render', () => {
        const spy = jest.fn(() => 'my error')

        const ErrorComponent = errorAdapterFactory(spy)(Input)

        const props = {
            foo: 'bar',
            baz: 'qux',
            error: 'error'
        }

        const wrapper = shallow(<ErrorComponent {...props} />)
        expect(spy).toHaveBeenCalled()
        expect(spy.mock.calls[0]).toEqual([props])
        expect(wrapper.find(Input).props().error).toBe('my error')
    })
})
