import React from 'react'
import { shallow } from 'enzyme'

import { Dropdown } from '..'

describe('<Dropdown.Group />', () => {
    it('is available', () => {
        expect(Dropdown.Group).toBeDefined()
    })

    it('no title', () => {
        const wrapper = shallow(<Dropdown.Group />)
        expect(wrapper.find('p').length).toBe(0)
    })

    it('title', () => {
        const wrapper = shallow(<Dropdown.Group title="foo" />)
        expect(wrapper.find('p').length).toBe(1)
        expect(wrapper.html().indexOf('foo')).toBeGreaterThan(-1)
    })

    it('children', () => {
        const wrapper = shallow(<Dropdown.Group title="foo"><span>{'foo bar baz'}</span></Dropdown.Group>)
        expect(wrapper.contains(<span>{'foo bar baz'}</span>)).toBeTruthy()
    })
})
