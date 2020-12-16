import React from 'react'
import { mount } from 'enzyme'

import { Status } from '..'

describe('<Status.Info />', () => {
    it('is available', () => {
        expect(Status.Info).toBeDefined()
    })

    it('renders with value', () => {
        const wrapper = mount(<Status.Info value="123" />)

        expect(wrapper.text()).toContain('123')
        expect(wrapper.text()).toContain('₽')
    })

    it('renders with value, title', () => {
        const wrapper = mount(<Status.Info value="123" title="usd" />)

        expect(wrapper.text()).toContain('123')
        expect(wrapper.text()).toContain('$')
    })

    it('renders with value, title, description', () => {
        const wrapper = mount(
            <Status.Info value="123" title="usd" description="foo bar‌" />
        )

        expect(wrapper.text()).toContain('123')
        expect(wrapper.text()).toContain('$')
        expect(wrapper.text()).toContain('foo bar‌')
    })
})
