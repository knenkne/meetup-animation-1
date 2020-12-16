import React from 'react'
import { mount, shallow } from 'enzyme'

import { Table } from '..'

describe('<Table.Title />', () => {
    it('is available', () => {
        expect(Table.Title).toBeDefined()
    })

    it('Renders correct', () => {
        const wrapper = mount(<Table.Title>{'Табличка'}</Table.Title>)

        expect(wrapper.text()).toBe('Табличка')
    })

    it('Renders nothing', () => {
        const wrapper = shallow(<Table.Header />)

        expect(wrapper.type()).toEqual(null)
    })
})
