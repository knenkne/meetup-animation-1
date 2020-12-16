import React from 'react'
import { mount } from 'enzyme'

import { Input } from '../..'

describe('<Input.Masked />', () => {
    it('renders a text-box component with html input element', () => {
        const wrapper = mount(
            <Input.Masked mask={[]} />
        )
        expect(wrapper.find('input[data-unit="input:textbox"]').length).toBe(1)
    })
    describe('Redux-form compatibility', () => {
        it('renders value passed with props.input', () => {
            const reduxFormProps = {
                value: '1111111111',
                onChange: () => {
                },
                mask: []
            }

            const wrapper = mount(
                <Input.Masked {...reduxFormProps} />
            )
            const input = wrapper.find('input')

            expect(input.props().value).toBe('1111111111')
        })
        it('handles onChange', () => {
            const changeHandler = jest.fn()
            const reduxFormProps = {
                value: '3',
                onChange: changeHandler,
                mask: []
            }
            const wrapper = mount(<Input.Masked {...reduxFormProps} />)
            expect(changeHandler).not.toHaveBeenCalled()
            wrapper.find('input').simulate('change', { target: { value: 'Hi' } })
            expect(changeHandler.mock.calls[changeHandler.mock.calls.length - 1][0].target.value).toBe('Hi')
        })
        it('handles onFocus', () => {
            const changeHandler = jest.fn()
            const focusHandler = jest.fn()
            const reduxFormProps = {
                value: 'Nevermind',
                onChange: changeHandler,
                onFocus: focusHandler,
                mask: []
            }
            const wrapper = mount(<Input.Masked {...reduxFormProps} />)
            wrapper.find('input').simulate('focus')
            expect(focusHandler.mock.calls[focusHandler.mock.calls.length - 1][0].target.defaultValue).toBe('Nevermind')
        })
        it('handles onBlur', () => {
            const blurHandler = jest.fn()

            const reduxFormProps = {
                value: 'Nevermind',
                onChange: () => {},
                onBlur: blurHandler,
                onFocus: () => {},
                mask: []
            }
            const wrapper = mount(<Input.Masked {...reduxFormProps} />)
            wrapper.find('input').simulate('focus')
            wrapper.find('input').simulate('blur')
            expect(blurHandler.mock.calls[blurHandler.mock.calls.length - 1][0].target.defaultValue).toBe('Nevermind')
        })
        it('does not fire onChange if input is disabled', () => {
            const changeHandler = jest.fn()

            const props = {
                value: 'Nevermind',
                onChange: changeHandler,
                disabled: true,
                mask: []
            }
            const wrapper = mount(<Input.Masked {...props} />)
            const input = wrapper.find('input')
            input.simulate('change', { target: { value: 'Hi' } })
            expect(changeHandler).not.toHaveBeenCalled()
        })
        it('renders the value according the mask', () => {
            const reduxFormProps = {
                value: '1111111111',
                mask: [/\d/, /\d/, /\d/]
            }

            const wrapper = mount(
                <Input.Masked {...reduxFormProps} />
            )
            expect(wrapper.find('input').getDOMNode().value).toBe('111')
        })
        it('can get new props', () => {
            const reduxFormProps = {
                value: '1111111111',
                mask: []
            }

            const wrapper = mount(
                <Input.Masked {...reduxFormProps} />
            )
            expect(wrapper.find('input').props().value).toBe('1111111111')
            wrapper.setProps({
                value: '2222'
            }, () => {
                expect(wrapper.find('input').props().value).toBe('2222')
            })
        })
        it('handles onInput', () => {
            const changeHandler = jest.fn()
            const reduxFormProps = {
                value: '3',
                onInput: changeHandler,
                mask: []
            }
            const wrapper = mount(<Input.Masked {...reduxFormProps} />)
            expect(changeHandler).not.toHaveBeenCalled()
            wrapper.find('input').simulate('input', { target: { value: '1' } })
            expect(changeHandler.mock.calls[changeHandler.mock.calls.length - 1][0].target.value).toBe('1')
        })
    })
})
