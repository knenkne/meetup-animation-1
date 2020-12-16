import React from 'react'
import { shallow, mount } from 'enzyme'

import { QuarterPicker } from '../quarter-picker'

describe('<QuarterPicker />', () => {
    it('поле ввода и календарь отренедерелись', () => {
        const wrapper = shallow(<QuarterPicker />)
        expect(wrapper.find('dropdownCombinerHOC').length).toBe(1)
    })

    it('value попадает в инпут', () => {
        const correctValue = '2017-10-12T10:30:00.000+03:00'
        const expected = '4-й квартал 2017'
        const wrapper = mount(<QuarterPicker value={correctValue} />)
        expect(wrapper.find('input').first().prop('value')).toBe(expected)
    })

    it('При disabled отрисовывается только поле ввода', () => {
        const wrapper = shallow(<QuarterPicker disabled />)
        expect(wrapper.find('dropdownCombinerHOC').length).toBe(1)
        expect(wrapper.find('dropdownCombinerHOC').dive().find('CalendarItem').length).toBe(0)
        expect(wrapper.find('dropdownCombinerHOC').dive().find('QuarterInput').length).toBe(1)
    })
})
