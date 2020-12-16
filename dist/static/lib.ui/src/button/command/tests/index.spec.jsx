import React from 'react'
import { shallow } from 'enzyme'

import { Command } from '..'

describe('<Button.Command />', () => {
    it('is available', () => {
        expect(Command).toBeDefined()
    })

    it('renders title', () => {
        const wrapper = shallow(<Command title="title" />)

        expect(wrapper.text('title')).toBeTruthy()
    })
})
