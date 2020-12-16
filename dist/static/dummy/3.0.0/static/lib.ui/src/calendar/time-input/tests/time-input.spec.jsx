import React from 'react'
import _ from 'lodash'
import { mount, shallow } from 'enzyme'

import { TimeInput } from '../time-input'
import { fullISOFormat } from '../../utils'

describe('Calendar #TimeInput - одинарное поле ввода времени', () => {

    it('value попадает в инпут', () => {
        const correctValue = fullISOFormat(new Date(2017, 9, 12, 10, 30))
        const expected = '10:30'
        const wrapper = shallow(<TimeInput value={correctValue} />)
        expect(wrapper.props().children[0].props.value).toBe(expected)
    })

    it('value не ISO попадает в инпут', () => {
        const correctValue = '10:30'
        const expected = '10:30'
        const wrapper = shallow(<TimeInput value={correctValue} />)
        expect(wrapper.props().children[0].props.value).toBe(expected)
    })

    it('handles onChange with init value', () => {
        const changeHandler = jest.fn()
        const props = {
            value: fullISOFormat(new Date(2017, 9, 12, 10, 30)),
            onChange: changeHandler
        }

        const newValueNotFull = '11'
        const newValue = '11:45'
        const expected = fullISOFormat(new Date(2017, 9, 12, 11, 45))

        const wrapper = mount(<TimeInput {...props} />)
        expect(changeHandler).not.toHaveBeenCalled()
        wrapper.find('input').last().simulate('change', { target: { value: newValueNotFull } })
        expect(changeHandler.mock.calls[changeHandler.mock.calls.length - 1][0]).toBe(newValueNotFull)
        wrapper.find('input').last().simulate('change', { target: { value: newValue } })
        expect(changeHandler.mock.calls[changeHandler.mock.calls.length - 1][0]).toBe(expected)
    })
    it('handles onChange without init value', () => {
        const changeHandler = jest.fn()
        const props = {
            onChange: changeHandler
        }
        const t = new Date()
        const newValue = '11:45'
        const expected = fullISOFormat(new Date(t.getFullYear(), t.getMonth(), t.getDate(), 11, 45))

        const wrapper = mount(<TimeInput {...props} />)
        expect(changeHandler).not.toHaveBeenCalled()
        wrapper.find('input').last().simulate('change', { target: { value: newValue } })
        expect(changeHandler.mock.calls[changeHandler.mock.calls.length - 1][0]).toBe(expected)
    })

    it('does not fire onChange if input is disabled', () => {
        const changeHandler = jest.fn()

        const props = {
            value: '2017-10-12T10:30:00.000+03:00',
            onChange: changeHandler,
            disabled: true
        }
        const newValue = '2017-10-10T00:00:00.000+03:00'
        const wrapper = mount(<TimeInput {...props} />)
        const input = wrapper.find('input').last()
        input.simulate('change', { target: { value: newValue } })
        expect(changeHandler).not.toHaveBeenCalled()
    })

    it('handles onFocus', () => {
        const changeHandler = jest.fn()
        const focusHandler = jest.fn()
        const value = fullISOFormat(new Date(2017, 9, 12, 10, 30))

        const props = {
            value,
            onChange: changeHandler,
            onFocus: focusHandler
        }
        const wrapper = mount(<TimeInput {...props} />)
        wrapper.find('input').last().simulate('focus')
        expect(focusHandler.mock.calls[focusHandler.mock.calls.length - 1][0]).toEqual(props.value)
    })

    it('handles onBlur', () => {
        const blurHandler = jest.fn()
        const value = fullISOFormat(new Date(2017, 9, 12, 10, 30))

        const props = {
            value,
            onChange: _.noop,
            onBlur: blurHandler,
            onFocus: _.noop
        }
        const wrapper = mount(<TimeInput {...props} />)
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
        const expected = '10:30'
        const expected2 = '10:00'

        const newTimeValue = fullISOFormat(new Date(2017, 9, 12, 10, 0))
        const newValue = {
            value: newTimeValue
        }
        const wrapper = shallow(<TimeInput {...props} />)
        expect(wrapper.props().children[0].props.value).toBe(expected)
        wrapper.setProps(newValue)
        expect(wrapper.props().children[0].props.value).toBe(expected2)
    })

})
