import React from 'react'
import { shallow, mount } from 'enzyme'

import { DatePicker } from '../date-picker'

describe('CalendarItem #DatePicker - одинарное поле ввода даты и выпадающего календаря', () => {

    it('value попадает в инпут', () => {
        const correctValue = '2017-10-12T00:00:00.000+03:00'
        const expected = '12.10.2017'
        const wrapper = mount(<DatePicker value={correctValue} />)
        expect(wrapper.find('dropdownCombinerHOC').length).toBe(1)
        expect(wrapper.find('input').first().prop('value')).toBe(expected)

    })

    it('При disabled отрисовывается только поле ввода', () => {
        const wrapper = shallow(<DatePicker disabled />)
        expect(wrapper.find('CalendarItem').length).toBe(0)
    })

    it('После выбора даты календарь скрывается', () => {
        const wrapper = mount(<DatePicker />)
        wrapper.find('[data-unit="input:textbox"]').last().simulate('focus')
        expect(wrapper.find('[data-unit="dropdown"]').prop('aria-expanded')).toBeTruthy()
        const submitButton = wrapper.find('button').last()
        submitButton.simulate('mousedown')
        expect(wrapper.find('[data-unit="dropdown"]').prop('aria-expanded')).toBeFalsy()
    })

})
