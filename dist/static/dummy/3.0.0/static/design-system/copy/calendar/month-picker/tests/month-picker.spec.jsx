import React from 'react'
import { shallow, mount } from 'enzyme'

import { MonthPicker } from '../month-picker'

describe('CalendarItem #MonthPicker - одинарное поле ввода месяца/года и выпадающего календаря', () => {

    it('поле ввода и календарь отренедерелись', () => {
        const wrapper = shallow(<MonthPicker />)
        expect(wrapper.find('dropdownCombinerHOC').length).toBe(1)
    })

    it('value попадает в инпут', () => {
        const correctValue = '2017-10-12T00:00:00.000+03:00'
        const expected = '10.2017'
        const wrapper = mount(<MonthPicker value={correctValue} />)
        const input = wrapper.find('input').at(0)
        const inputValue = input.prop('value')
        expect(inputValue).toBe(expected)
    })

    it('При disabled отрисовывается только поле ввода', () => {
        const wrapper = shallow(<MonthPicker disabled />)
        expect(wrapper.find('CalendarItem').length).toBe(0)
    })

    it('После выбора даты календарь скрывается', () => {
        const wrapper = mount(<MonthPicker />)
        wrapper.find('[data-unit="input:textbox"]').last().simulate('focus')
        expect(wrapper.find('[data-unit="dropdown"]').prop('aria-expanded')).toBeTruthy()
        wrapper.find('[data-unit="calendar:months:month"]').at(8).simulate('click')
        wrapper.find('button').last().simulate('mousedown')
        expect(wrapper.find('[data-unit="dropdown"]').prop('aria-expanded')).toBeFalsy()
    })

})
