import React from 'react'
import { shallow, mount } from 'enzyme'

import { Input } from '../..'

describe('<Input.Numeric />', () => {
    describe('Redux-form compatibility', () => {
        it('value has to be number only', () => {
            const reduxFormProps = {
                value: 'dfh-dfh=123jkk123d'
            }
            const wrapper = mount(<Input.Numeric {...reduxFormProps} />)
            const input = wrapper.find('input')
            expect(input.props().value).toEqual('123 123')
        })

        it('allowEmpty false', () => {
            const reduxFormProps = {
                value: '0',
                placeholder: 'placeholder',
                allowEmpty: false
            }
            const wrapper = mount(<Input.Numeric {...reduxFormProps} />)
            const input = wrapper.find('input')
            expect(input.props().placeholder).toBe('placeholder')
        })

        it('allowEmpty true', () => {
            const reduxFormProps = {
                value: '0',
                placeholder: 'placeholder',
                allowEmpty: true
            }
            const wrapper = mount(<Input.Numeric {...reduxFormProps} />)
            const input = wrapper.find('input')
            expect(input.props().placeholder).toBe('placeholder')
        })

        it('handleChange', () => {
            const onChange = jest.fn()
            const reduxFormProps = {
                value: '50000',
                onChange
            }
            const wrapper = mount(<Input.Numeric {...reduxFormProps} />)
            const input = wrapper.find('input')
            input.simulate('change', { target: { value: '500 001' } })
            expect(onChange.mock.calls[onChange.mock.calls.length - 1][0]).toBe('500001')
            expect(onChange.mock.calls[onChange.mock.calls.length - 1][1].target).toBeDefined()
        })

        it('handleBlur without min|max', () => {
            const onChange = jest.fn()
            const onBlur = jest.fn()
            const reduxFormProps = {
                value: '50000',
                onChange,
                onBlur
            }
            const wrapper = mount(<Input.Numeric {...reduxFormProps} />)
            const input = wrapper.find('input')
            input.simulate('blur', { target: { value: '500 001.00' } })
            expect(onChange).not.toHaveBeenCalled()
            expect(onBlur).toHaveBeenCalledWith('500001.00')
        })

        it('handleBlur empty value allowEmpty true', () => {
            const onChange = jest.fn()
            const onBlur = jest.fn()
            const reduxFormProps = {
                onChange,
                allowDecimal: true,
                allowEmpty: true,
                decimalLimit: 2,
                onBlur
            }
            const wrapper = mount(<Input.Numeric {...reduxFormProps} />)
            const input = wrapper.find('input')
            input.simulate('blur', { target: { value: '' } })
            expect(onChange).not.toHaveBeenCalled()
            expect(onBlur).toHaveBeenCalledWith('')
        })

        it('handleBlur empty value allowEmpty false', () => {
            const onChange = jest.fn()
            const onBlur = jest.fn()
            const reduxFormProps = {
                onChange,
                allowDecimal: true,
                allowEmpty: false,
                decimalLimit: 2,
                onBlur
            }
            const wrapper = mount(<Input.Numeric {...reduxFormProps} />)
            const input = wrapper.find('input')
            input.simulate('blur', { target: { value: '' } })
            expect(onChange).not.toHaveBeenCalled()
            expect(onBlur).toHaveBeenCalledWith('0.00')
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
            const wrapper = mount(<Input.Numeric {...reduxFormProps} />)
            const input = wrapper.find('input')
            input.simulate('blur', { target: { value: '500 001' } })
            expect(onChange.mock.calls[onChange.mock.calls.length - 1][0]).toBe('500000')
            expect(onChange.mock.calls[onChange.mock.calls.length - 1][1].target).toBeDefined()
            expect(onBlur).toHaveBeenCalledWith('500000')
        })

        it('handleBlur while disabled', () => {
            const onChange = jest.fn()
            const onBlur = jest.fn()
            const reduxFormProps = {
                min: 50000,
                max: 500000,
                value: '500001',
                onChange,
                onBlur,
                disabled: true
            }
            const wrapper = shallow(<Input.Numeric {...reduxFormProps} />)
            const input = wrapper.find(Input.Masked)
            const event = { target: { value: '500 001' } }
            input.simulate('blur', event)
            expect(onChange).not.toHaveBeenCalled()
            expect(onBlur).toHaveBeenCalledWith(event)
        })

        it('handleFocus with changing format of content', () => {
            const reduxFormProps = {
                value: '1234',
                suffix: ' .руб',
            }
            const wrapper = mount(<Input.Numeric {...reduxFormProps} />)
            expect(wrapper.find('input').is('input[value="1 234 .руб"]')).toBeTruthy()
            wrapper.setProps({ active: true })
            expect(wrapper.find('input').is('input[value="1 234 .руб"]')).toBeTruthy()
        })
    })
})
