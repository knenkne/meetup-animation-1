import React from 'react'
import { mount } from 'enzyme'

import { Card } from '..'

describe('Card component: ', () => {
    it('Export Card is correct', () => {
        expect(Card).toBeDefined()
    })

    it('Handles onChange', () => {
        const changeHandler = jest.fn()
        const props = {
            value: '123456789123',
            onChange: changeHandler
        }
        const wrapper = mount(<Card {...props} />)
        const input = wrapper.find('input').last()

        expect(changeHandler).not.toHaveBeenCalled()

        input.simulate('change', { target: { value: '999999999999' } })
        expect(changeHandler.mock.calls[0][0]).toBe('999999999999')
    })

    it('Handles onBlur', () => {
        const changeHandler = jest.fn()
        const props = {
            value: '123456789123',
            onBlur: changeHandler
        }
        const wrapper = mount(<Card {...props} />)
        const input = wrapper.find('input').last()

        expect(changeHandler).not.toHaveBeenCalled()

        input.simulate('blur', { target: { value: '' } })
        expect(changeHandler.mock.calls[0][0]).toBe('')
    })

})
