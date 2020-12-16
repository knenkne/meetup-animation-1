import React from 'react'
import { shallow, mount } from 'enzyme'

import { YearPicker } from '../year-picker'

describe('CalendarItem #YearPicker - одинарное поле ввода даты и выпадающего календаря', () => {

    it('поле ввода и календарь отренедерелись', () => {
        const wrapper = shallow(<YearPicker />)
        expect(wrapper.find('dropdownCombinerHOC').length).toBe(1)
    })

    it('value попадает в инпут', () => {
        const correctValue = '2017-10-12T00:00:00.000+03:00'
        const expected = '2017'
        const wrapper = mount(<YearPicker value={correctValue} />)
        expect(wrapper.find('input').first().prop('value')).toBe(expected)
    })

    it('При disabled отрисовывается только поле ввода', () => {
        const wrapper = shallow(<YearPicker disabled />)
        expect(wrapper.find('CalendarItem').length).toBe(0)
    })

    it('После выбора даты календарь скрывается', () => {
        const wrapper = mount(<YearPicker />)
        wrapper.find('[data-unit="input:textbox"]').last().simulate('focus')
        expect(wrapper.find('[data-unit="dropdown"]').prop('aria-expanded')).toBeTruthy()
        const submitButton = wrapper.find('button').last()
        submitButton.simulate('mousedown')
        expect(wrapper.find('[data-unit="dropdown"]').prop('aria-expanded')).toBeFalsy()
    })

    it('Когда не заполнен - показываем initialViewDate, иначе - значение', () => {
        const value = new Date(2010, 1, 1).toISOString()
        const initialViewDate = new Date(2002, 1, 1).toISOString()
        const wrapper1 = shallow(<YearPicker initialViewDate={initialViewDate} />)
        const wrapper2 = shallow(<YearPicker initialViewDate={initialViewDate} value={value} />)
        expect(wrapper1.prop('showDate')).toEqual(initialViewDate)
        expect(wrapper2.prop('showDate')).toEqual(value)
    })
})
