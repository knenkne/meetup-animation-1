import React from 'react'
import _ from 'lodash'
import { mount, shallow } from 'enzyme'
import isSameYear from 'date-fns/isSameYear'

import { YearInput } from '../year-input'
import { fullISOFormat } from '../../utils'

describe('Calendar #YearInput - одинарное поле ввода года', () => {

    it('value попадает в инпут', () => {
        const correctValue = fullISOFormat(new Date(2017, 9, 12))

        const expected = '2017'
        const wrapper = shallow(<YearInput value={correctValue} />)
        expect(wrapper.props().children[0].props.value).toBe(expected)
    })

    it('value не ISO попадает в инпут', () => {
        const correctValue = '2016'
        const expected = '2016'
        const wrapper = shallow(<YearInput value={correctValue} />)
        expect(wrapper.props().children[0].props.value).toBe(expected)
    })

    it('handles onChange with init value', () => {
        const changeHandler = jest.fn()
        const props = {
            value: '2017-10-12T10:30:00.000+03:00',
            onChange: changeHandler
        }

        const newValueNotFull = '20'
        const newValue = '2015'
        const wrapper = mount(<YearInput {...props} />)
        expect(changeHandler).not.toHaveBeenCalled()
        wrapper.find('input').last().simulate('change', { target: { value: newValueNotFull } })
        expect(changeHandler.mock.calls[changeHandler.mock.calls.length - 1][0]).toBe(newValueNotFull)
        wrapper.find('input').last().simulate('change', { target: { value: newValue } })
        expect(isSameYear(changeHandler.mock.calls[changeHandler.mock.calls.length - 1][0], newValue)).toBeTruthy()
    })
    it('handles onChange without init value', () => {
        const changeHandler = jest.fn()
        const props = {
            onChange: changeHandler
        }
        const newValue = '2016'
        const wrapper = mount(<YearInput {...props} />)
        expect(changeHandler).not.toHaveBeenCalled()
        wrapper.find('input').last().simulate('change', { target: { value: newValue } })
        expect(isSameYear(changeHandler.mock.calls[changeHandler.mock.calls.length - 1][0], newValue)).toBeTruthy()
    })

    it('does not fire onChange if input is disabled', () => {
        const changeHandler = jest.fn()
        const value = fullISOFormat(new Date(2017, 9, 12, 10, 30))

        const props = {
            value,
            onChange: changeHandler,
            disabled: true
        }
        const newValue = fullISOFormat(new Date(2017, 9, 10))
        const wrapper = mount(<YearInput {...props} />)
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
        const wrapper = mount(<YearInput {...props} />)
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
        const wrapper = mount(<YearInput {...props} />)
        wrapper.find('input').last().simulate('focus')
        wrapper.find('input').last().simulate('blur')
        expect(blurHandler.mock.calls[blurHandler.mock.calls.length - 1][0]).toEqual(props.value)
    })

    it('стираем часть цифр', () => {
        const changeHandler = jest.fn()
        const props = {
            value: '2017-10-12T10:30:00.000+03:00',
            onChange: changeHandler
        }
        const expected = '2017'
        const expected2 = '2016'

        const newValue = {
            value: '2016-10-12T10:00:00.000+03:00'
        }
        const wrapper = shallow(<YearInput {...props} />)
        expect(wrapper.props().children[0].props.value).toBe(expected)
        wrapper.setProps(newValue)
        expect(wrapper.props().children[0].props.value).toBe(expected2)
    })

})
