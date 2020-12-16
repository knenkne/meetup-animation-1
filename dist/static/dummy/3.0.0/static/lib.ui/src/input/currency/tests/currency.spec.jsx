import React from 'react'
import { mount } from 'enzyme'

import { Input } from '../..'

describe('<Input.Numeric.Currency />', () => {
    describe('Redux-form compatibility', () => {
        it('value has to be number only', () => {
            const reduxFormProps = {
                value: 'dfh-dfh=123jkk123d'
            }
            const wrapper = mount(<Input.Numeric.Currency {...reduxFormProps} />)
            const input = wrapper.find('input')
            expect(input.props().value).toEqual('123 123')
        })

        it('allowEmpty false', () => {
            const reduxFormProps = {
                value: '0',
                placeholder: 'placeholder',
                allowEmpty: false
            }
            const wrapper = mount(<Input.Numeric.Currency {...reduxFormProps} />)
            const input = wrapper.find('input')
            expect(input.props().placeholder).toBe('placeholder')
        })

        it('allowEmpty true', () => {
            const reduxFormProps = {
                value: '0',
                placeholder: 'placeholder',
                allowEmpty: true
            }
            const wrapper = mount(<Input.Numeric.Currency {...reduxFormProps} />)
            const input = wrapper.find('input')
            expect(input.props().placeholder).toBe('placeholder')
        })

        it('handleChange', () => {
            const onChange = jest.fn()
            const reduxFormProps = {
                value: '50000',
                onChange
            }
            const wrapper = mount(<Input.Numeric.Currency {...reduxFormProps} />)
            const input = wrapper.find('input')
            input.simulate('change', { target: { value: '500 001' } })
            expect(onChange.mock.calls[onChange.mock.calls.length - 1][0]).toBe('500001')
        })

        it('handleBlur without min|max', () => {
            const onChange = jest.fn()
            const onBlur = jest.fn()
            const reduxFormProps = {
                value: '50000',
                onChange,
                onBlur
            }
            const wrapper = mount(<Input.Numeric.Currency {...reduxFormProps} />)
            const input = wrapper.find('input')
            input.simulate('blur', { target: { value: '500 001.00' } })
            expect(onChange).not.toHaveBeenCalled()
            expect(onBlur).toHaveBeenCalledWith('50000100')
        })

        it('handleBlur with min|max', () => {
            const onChange = jest.fn()
            const onBlur = jest.fn()
            const reduxFormProps = {
                min: 50000,
                max: 500000,
                value: '50000',
                onChange,
                onBlur
            }
            const wrapper = mount(<Input.Numeric.Currency {...reduxFormProps} />)
            const input = wrapper.find('input')
            input.simulate('blur', { target: { value: '500 001' } })
            expect(onChange.mock.calls[onChange.mock.calls.length - 1][0]).toBe('500000')
            expect(onBlur).toHaveBeenCalledWith('500000')
        })
    })
})
