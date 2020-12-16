import React from 'react'
import { mount } from 'enzyme'

import { Vat } from '..'

import { SHORT_VAT, LONG_VAT } from '../vat-validator'

describe('vat.Vat component', () => {
    it('Export Vat is correct', () => {
        expect(Vat).toBeDefined()
    })

    it('Rendering with Empty value', () => {
        const props = {
            value: '',
            formatConfig: LONG_VAT,
            onChange: () => {}
        }
        const wrapper = mount(
            <Vat {...props} />
        )
        const input = wrapper.find('input').last()
        expect(input.props().value).toBe('')
    })
    it('Rendering Short with Empty value', () => {
        const props = {
            value: '',
            formatConfig: SHORT_VAT,
            onChange: () => {
            }
        }
        const wrapper = mount(
            <Vat {...props} />
        )
        const input = wrapper.find('input').last()
        expect(input.props().value).toBe('')
    })
    it('Rendering value Passed', () => {
        const props = {
            value: '123456789123',
            formatConfig: LONG_VAT,
            onChange: () => {
            }
        }
        const wrapper = mount(
            <Vat {...props} />
        )
        const input = wrapper.find('input').last()
        expect(input.props().value).toBe('123456789123')
    })

    it('handles onChange', () => {
        const changeHandler = jasmine.createSpy('changeSpy')
        const props = {
            value: '123456789123',
            formatConfig: LONG_VAT,
            onChange: changeHandler
        }
        const wrapper = mount(<Vat {...props} />)
        const input = wrapper.find('input').last()

        expect(changeHandler).not.toHaveBeenCalled()

        input.simulate('change', { target: { value: '999999999999' } })
        expect(changeHandler.calls.mostRecent().args[0]).toBe('999999999999')
    })

    it('handles onBlur', () => {
        const changeHandler = jasmine.createSpy('changeSpy')
        const props = {
            value: '123456789123',
            formatConfig: LONG_VAT,
            onBlur: changeHandler
        }
        const wrapper = mount(<Vat {...props} />)
        const input = wrapper.find('input').last()

        expect(changeHandler).not.toHaveBeenCalled()

        input.simulate('blur', { target: { value: '' } })
        expect(changeHandler.calls.mostRecent().args[0]).toBe('')
    })

})
