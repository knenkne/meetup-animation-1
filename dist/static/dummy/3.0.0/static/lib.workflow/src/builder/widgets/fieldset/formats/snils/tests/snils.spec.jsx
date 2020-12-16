import React from 'react'
import { mount } from 'enzyme'

import { Snils } from '..'

describe('Snils component', () => {
    it('Export Snils is correct', () => {
        expect(Snils).toBeDefined()
    })

    it('Rendering value Passed', () => {
        const props = {
            value: '12345678912',
            onChange: () => {
            }
        }
        const wrapper = mount(
            <Snils {...props} />
        )
        const input = wrapper.find('input').last()
        expect(input.props().value).toEqual('123-456-789 12')
    })

    it('handles onChange', () => {
        const changeHandler = jasmine.createSpy('changeSpy')
        const props = {
            value: '12345678912',
            onChange: changeHandler
        }
        const wrapper = mount(<Snils {...props} />)
        const input = wrapper.find('input').last()

        expect(changeHandler).not.toHaveBeenCalled()

        input.simulate('change', { target: { value: '999-999-999 99' } })
        expect(changeHandler.calls.mostRecent().args[0]).toEqual('99999999999')
    })

})
