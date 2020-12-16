import React from 'react'
import _ from 'lodash'
import { mount, shallow } from 'enzyme'
import { addMonths, endOfMonth } from 'date-fns'

import { QuarterInput } from '../quarter-input'
import { fullISOFormat } from '../../utils'

describe('Calendar #QuarterInput - одинарное поле ввода времени', () => {

    it('value попадает в инпут', () => {
        const correctValue = fullISOFormat(new Date(2017, 9, 12))
        const expected = '4-й квартал 2017'
        const wrapper = shallow(<QuarterInput value={correctValue} />)
        expect(wrapper.props().children[0].props.value).toBe(expected)
    })

    it('value не ISO попадает в инпут', () => {
        const correctValue = '4-й квартал 2017'
        const expected = '4-й квартал 2017'
        const wrapper = shallow(<QuarterInput value={correctValue} />)
        expect(wrapper.props().children[0].props.value).toBe(expected)
    })

    it('handles onChange with init value', () => {
        const changeHandler = jest.fn()
        const props = {
            value: fullISOFormat(new Date(2017, 9, 12, 10, 30)),
            onChange: changeHandler
        }

        const newValueNotFull = '2'
        const newValue = '2-й квартал 2017'
        const startDate = fullISOFormat(new Date(2017, 3, 1))
        const endDate = fullISOFormat(endOfMonth(addMonths(startDate, 3)))
        const expected = `${startDate}/${endDate}`
        const wrapper = mount(<QuarterInput {...props} />)
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
        const newValue = '2-й квартал 2017'
        const startDate = fullISOFormat(new Date(2017, 3, 1))
        const endDate = fullISOFormat(endOfMonth(addMonths(startDate, 3)))
        const expected = `${startDate}/${endDate}`
        const wrapper = mount(<QuarterInput {...props} />)
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
        const wrapper = mount(<QuarterInput {...props} />)
        const input = wrapper.find('input').last()
        input.simulate('change', { target: { value: newValue } })
        expect(changeHandler).not.toHaveBeenCalled()
    })

    it('handles onFocus', () => {
        const changeHandler = jest.fn()
        const focusHandler = jest.fn()
        const value = fullISOFormat(new Date(2017, 9, 12, 10, 30))
        const startDate = fullISOFormat(new Date(2017, 9, 1))
        const endDate = fullISOFormat(endOfMonth(addMonths(startDate, 3)))
        const expected = `${startDate}/${endDate}`

        const props = {
            value,
            onChange: changeHandler,
            onFocus: focusHandler
        }
        const wrapper = mount(<QuarterInput {...props} />)
        wrapper.find('input').last().simulate('focus')
        expect(focusHandler.mock.calls[focusHandler.mock.calls.length - 1][0]).toBe(expected)
    })

    it('handles onBlur', () => {
        const blurHandler = jest.fn()
        const value = fullISOFormat(new Date(2017, 9, 12, 10, 30))
        const startDate = fullISOFormat(new Date(2017, 9, 1))
        const endDate = fullISOFormat(endOfMonth(addMonths(startDate, 3)))
        const expected = `${startDate}/${endDate}`

        const props = {
            value,
            onChange: _.noop,
            onBlur: blurHandler,
            onFocus: _.noop
        }
        const wrapper = mount(<QuarterInput {...props} />)
        wrapper.find('input').last().simulate('focus')
        wrapper.find('input').last().simulate('blur')
        expect(blurHandler.mock.calls[blurHandler.mock.calls.length - 1][0]).toBe(expected)
    })

    it('стираем часть цифр', () => {
        const changeHandler = jest.fn()
        const props = {
            value: '2017-10-12T10:30:00.000+03:00',
            onChange: changeHandler
        }
        const expected = '4-й квартал 2017'
        const expected2 = '1-й квартал 2016'

        const newValue = {
            value: '2016-03-12T10:00:00.000+03:00'
        }
        const wrapper = shallow(<QuarterInput {...props} />)
        expect(wrapper.props().children[0].props.value).toBe(expected)
        wrapper.setProps(newValue)
        expect(wrapper.props().children[0].props.value).toBe(expected2)
    })

})
