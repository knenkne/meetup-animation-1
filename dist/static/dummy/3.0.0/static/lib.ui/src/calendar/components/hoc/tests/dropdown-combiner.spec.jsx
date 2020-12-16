import React from 'react'
import { shallow } from 'enzyme'

import { dropdownCombiner } from '../dropdown-combiner'

describe('#dropdownCombiner - хок для дропдауна', () => {
    const HOCed = dropdownCombiner()
    it('рендер по дефолту', () => {
        const wrapper = shallow(<HOCed />)
        expect(wrapper.find('Dropdown').length).toBe(1)
        expect(wrapper.find('Dropdown').dive().find('SingleInput').length).toBe(1)
        expect(wrapper.find('Dropdown').dive().find('CalendarItem').length).toBe(1)
    })


})
