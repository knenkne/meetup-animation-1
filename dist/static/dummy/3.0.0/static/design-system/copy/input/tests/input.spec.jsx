import React from 'react'
import { shallow, mount } from 'enzyme'

import { Input } from '../input'
import { Icon } from '../../icon'

describe('<Input />', () => {
    it('renders data-unit attribute with "input:textbox" value', () => {
        const wrapper = shallow(
            <Input />
        )
        expect(wrapper.is('input[data-unit="input:textbox"]')).toBeTruthy()
    })
    it('handles onFocus', () => {
        const changeHandler = jest.fn()
        const focusHandler = jest.fn()

        const props = {
            value: 'Nevermind',
            onChange: changeHandler,
            onFocus: focusHandler
        }
        const wrapper = mount(<Input {...props} />)
        wrapper.find('input').simulate('focus')
        expect(focusHandler.mock.calls[focusHandler.mock.calls.length - 1][0].target.value).toEqual('Nevermind')
    })
    it('handles onBlur', () => {
        const blurHandler = jest.fn()

        const props = {
            value: 'Nevermind',
            onChange: () => {},
            onBlur: blurHandler,
            onFocus: () => {}
        }
        const wrapper = mount(<Input {...props} />)
        wrapper.find('input').simulate('focus')
        wrapper.find('input').simulate('blur')
        expect(blurHandler.mock.calls[blurHandler.mock.calls.length - 1][0].target.value).toEqual('Nevermind')
    })

    it('with icon', () => {
        const wrapper = mount(<Input icon="clock" />)
        expect(wrapper.find(Icon).length).toBe(1)
    })

    it('with clickIcon', () => {
        const handleIconClick = jest.fn()
        const wrapper = mount(<Input icon="clock" onClick={handleIconClick} />)
        wrapper.find(Icon).props().onClick()
        expect(handleIconClick).toHaveBeenCalledTimes(1)
    })

    describe('Redux-form compatibility', () => {
        it('renders value passed with props.input', () => {
            const reduxFormProps = {
                value: '3',
                onChange: () => {}
            }

            const wrapper = mount(
                <Input {...reduxFormProps} />
            )
            const input = wrapper.find('input')
            expect(input.props().value).toEqual('3')
        })
        it('handles onChange', () => {
            const changeHandler = jest.fn()
            const reduxFormProps = {
                value: '3',
                onChange: changeHandler
            }
            const wrapper = mount(<Input {...reduxFormProps} />)
            expect(changeHandler).not.toHaveBeenCalled()
            wrapper.find('input').simulate('change', { target: { value: 'Hi' } })
            expect(changeHandler.mock.calls[changeHandler.mock.calls.length - 1][0].target.value).toEqual('Hi')
        })
        it('handles onFocus', () => {
            const changeHandler = jest.fn()
            const focusHandler = jest.fn()

            const reduxFormProps = {
                value: 'Nevermind',
                onChange: changeHandler,
                onFocus: focusHandler
            }
            const wrapper = mount(<Input {...reduxFormProps} />)
            wrapper.find('input').simulate('focus')
            expect(focusHandler.mock.calls[focusHandler.mock.calls.length - 1][0].target.value).toEqual('Nevermind')
        })
        it('handles onBlur', () => {
            const blurHandler = jest.fn()

            const reduxFormProps = {
                value: 'Nevermind',
                onChange: () => {},
                onBlur: blurHandler,
                onFocus: () => {}
            }
            const wrapper = mount(<Input {...reduxFormProps} />)
            wrapper.find('input').simulate('focus')
            wrapper.find('input').simulate('blur')
            expect(blurHandler.mock.calls[blurHandler.mock.calls.length - 1][0].target.value).toEqual('Nevermind')
        })
        it('does not fire onChange if input is disabled', () => {
            const changeHandler = jest.fn()

            const props = {
                value: 'Nevermind',
                onChange: changeHandler,
                disabled: true
            }
            const wrapper = mount(<Input {...props} />)
            const input = wrapper.find('input')
            input.simulate('change', { target: { value: 'Hi' } })
            expect(changeHandler).not.toHaveBeenCalled()
        })
    })
})
