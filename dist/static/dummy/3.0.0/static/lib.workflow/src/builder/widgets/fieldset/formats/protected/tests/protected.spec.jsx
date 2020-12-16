import React from 'react'
import { mount } from 'enzyme'

import { Protected } from '..'

describe('ProtectedFormat component', () => {
    it('Export correct', () => {
        expect(Protected).toBeDefined()
    })

    it('Renders with value', () => {
        const props = {
            value: '12345678',
        }
        const wrapper = mount(
            <Protected {...props} />
        )
        const input = wrapper.find('input')
        expect(input.props().value).toBe('12345678')
    })

    it('Renders without value', () => {
        const props = {
            value: '',
        }
        const wrapper = mount(
            <Protected {...props} />
        )
        const input = wrapper.find('input')
        expect(input.props().value).toBe('')
    })

})
