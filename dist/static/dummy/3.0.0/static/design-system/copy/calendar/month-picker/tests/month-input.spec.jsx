import React from 'react'
import _ from 'lodash'
import { mount, shallow } from 'enzyme'

import { MonthInput } from '../month-input'
import { fullISOFormat } from '../../utils'

describe('Calendar #MonthInput - одинарное поле ввода месяца и года', () => {

    it('value попадает в инпут', () => {
        const correctValue = fullISOFormat(new Date(2017, 9, 12))
        const expected = '10.2017'
        const wrapper = shallow(<MonthInput value={correctValue} />)
        expect(wrapper.props().children[0].props.value).toBe(expected)
    })

    it('value не ISO попадает в инпут', () => {
        const correctValue = '10.2017'
        const expected = '10.2017'
        const wrapper = shallow(<MonthInput value={correctValue} />)
        expect(wrapper.props().children[0].props.value).toBe(expected)
    })

    it('handles onChange', () => {
        const changeHandler = jest.fn()
        const initialValue = fullISOFormat(new Date(2017, 9, 12))
        const expectedValue = fullISOFormat(new Date(2017, 7, 12))
        const reduxFormProps = {
            value: initialValue,
            onChange: changeHandler
        }
        const wrapper = mount(<MonthInput {...reduxFormProps} />)
        expect(changeHandler).not.toHaveBeenCalled()
        wrapper.find('input').last().simulate('change', { target: { value: '08.2017' } })
        expect(changeHandler.mock.calls[changeHandler.mock.calls.length - 1][0]).toEqual(expectedValue)
    })

    it('does not fire onChange if input is disabled', () => {
        const changeHandler = jest.fn()

        const props = {
            value: fullISOFormat(new Date(2017, 9, 12)),
            onChange: changeHandler,
            disabled: true
        }
        const newValue = fullISOFormat(new Date(2017, 9, 10))
        const wrapper = mount(<MonthInput {...props} />)
        const input = wrapper.find('input').last()
        input.simulate('change', { target: { value: newValue } })
        expect(changeHandler).not.toHaveBeenCalled()
    })

    it('handles onFocus', () => {
        const changeHandler = jest.fn()
        const focusHandler = jest.fn()

        const props = {
            value: fullISOFormat(new Date(2017, 9, 12)),
            onChange: changeHandler,
            onFocus: focusHandler
        }
        const wrapper = mount(<MonthInput {...props} />)
        wrapper.find('input').last().simulate('focus')
        expect(focusHandler.mock.calls[focusHandler.mock.calls.length - 1][0]).toEqual(props.value)
    })

    it('handles onBlur', () => {
        const blurHandler = jest.fn()

        const props = {
            value: fullISOFormat(new Date(2017, 9, 12)),
            onChange: _.noop,
            onBlur: blurHandler,
            onFocus: _.noop
        }
        const wrapper = mount(<MonthInput {...props} />)
        wrapper.find('input').last().simulate('focus')
        wrapper.find('input').last().simulate('blur')
        expect(blurHandler.mock.calls[blurHandler.mock.calls.length - 1][0]).toEqual(props.value)
    })

    it('стираем часть цифр', () => {
        const changeHandler = jest.fn()
        const props = {
            value: '10.2017',
            onChange: changeHandler
        }
        const expected = '10.2017'
        const expected2 = '09.2017'

        const newValue = {
            value: fullISOFormat(new Date(2017, 8, 12))
        }

        const wrapper = shallow(<MonthInput {...props} />)
        expect(wrapper.props().children[0].props.value).toBe(expected)
        wrapper.setProps(newValue)
        expect(wrapper.props().children[0].props.value).toBe(expected2)
    })

})
