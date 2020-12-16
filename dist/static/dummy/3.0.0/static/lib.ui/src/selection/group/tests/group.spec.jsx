import React from 'react'
import { shallow } from 'enzyme'

import { Selection } from '../..'

describe('<Selection.Group />', () => {
    it('renders children', () => {
        const wrapper = shallow(
            <Selection.Group title="awesomeName">
                <input type="checkbox" />
                <input type="checkbox" />
                <input type="checkbox" />
            </Selection.Group>
        )

        expect(wrapper.find('input').length).toBe(3)
    })
    it('renders legend with title', () => {
        const wrapper = shallow(
            <Selection.Group title="dummyGroup">
                <input type="radio" />
                <input type="radio" />
            </Selection.Group>
        )
        expect(wrapper.find('legend').length).toBe(1)
        expect(wrapper.find('legend').text()).toBe('dummyGroup')
    })
})
