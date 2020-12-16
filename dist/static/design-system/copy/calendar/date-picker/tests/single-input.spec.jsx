import React from 'react'
import _ from 'lodash'
import { mount, shallow } from 'enzyme'

import { SingleInput } from '../single-input'
import { fullISOFormat } from '../../utils'

describe('Calendar #SingleInput - одинарное поле ввода даты', () => {

    it('value попадает в инпут', () => {
        const correctValue = fullISOFormat(new Date(2017, 9, 12))
        const expected = '12.10.2017'
        const wrapper = mount(<SingleInput value={correctValue} />)
        expect(wrapper.find('input').at(0).props().value).toBe(expected)
    })

    it('value не ISO попадает в инпут', () => {
        const correctValue = '12.10.2017'
        const expected = '12.10.2017'
        const wrapper = mount(<SingleInput value={correctValue} />)
        expect(wrapper.find('input').at(0).props().value).toBe(expected)
    })

    it('handles onChange', () => {
        const changeHandler = jest.fn()
        const value = fullISOFormat(new Date(2017, 9, 12))

        const reduxFormProps = {
            value,
            onChange: changeHandler
        }
        const newValue = (new Date(2017, 9, 10)).toISOString()
        const wrapper = mount(<SingleInput {...reduxFormProps} />)
        expect(changeHandler).not.toHaveBeenCalled()
        wrapper.find('input').last().simulate('change', { target: { value: newValue } })
        expect(changeHandler.mock.calls[changeHandler.mock.calls.length - 1][0]).toEqual(newValue)
    })

    it('does not fire onChange if input is disabled', () => {
        const changeHandler = jest.fn()
        const value = fullISOFormat(new Date(2017, 9, 12))

        const props = {
            value,
            onChange: changeHandler,
            disabled: true
        }
        const newValue = fullISOFormat(new Date(2017, 9, 10))
        const wrapper = mount(<SingleInput {...props} />)
        const input = wrapper.find('input').last()
        input.simulate('change', { target: { value: newValue } })
        expect(changeHandler).not.toHaveBeenCalled()
    })

    it('handles onFocus', () => {
        const changeHandler = jest.fn()
        const focusHandler = jest.fn()
        const value = fullISOFormat(new Date(2017, 9, 12, 11, 50))

        const props = {
            value,
            onChange: changeHandler,
            onFocus: focusHandler
        }
        const wrapper = mount(<SingleInput {...props} />)
        wrapper.find('input').last().simulate('focus')
        expect(focusHandler.mock.calls[focusHandler.mock.calls.length - 1][0]).toEqual(props.value)
    })

    it('handles onBlur', () => {
        const blurHandler = jest.fn()
        const value = fullISOFormat(new Date(2017, 9, 12, 11, 50))

        const props = {
            value,
            onChange: _.noop,
            onBlur: blurHandler,
            onFocus: _.noop
        }
        const wrapper = mount(<SingleInput {...props} />)
        wrapper.find('input').last().simulate('focus')
        wrapper.find('input').last().simulate('blur')
        expect(blurHandler.mock.calls[blurHandler.mock.calls.length - 1][0]).toEqual(props.value)
    })

    it('стираем часть цифр', () => {
        const changeHandler = jest.fn()
        const value = fullISOFormat(new Date(2017, 9, 12, 10, 30))

        const props = {
            value,
            onChange: changeHandler
        }
        const expected = '12.10.2017'
        const expected2 = '10.10.2017'

        const newValue = {
            value: fullISOFormat(new Date(2017, 9, 10, 10, 0))
        }

        const wrapper = mount(<SingleInput {...props} />)
        expect(wrapper.find('input').at(0).props().value).toBe(expected)
        wrapper.setProps(newValue)
        expect(wrapper.find('input').at(0).props().value).toBe(expected2)
    })

})
