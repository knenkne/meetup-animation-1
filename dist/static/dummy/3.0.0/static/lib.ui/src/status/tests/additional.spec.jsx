import React from 'react'
import { mount } from 'enzyme'

import { Status } from '..'

describe('<Status.Additional />', () => {
    it('is available', () => {
        expect(Status.Additional).toBeDefined()
    })

    it('renders empty list of items', () => {
        const wrapper = mount(
            <Status.Additional />
        )

        expect(wrapper.text()).toBe('')
    })

    it('renders non-empty list of items', () => {
        const wrapper = mount(
            <Status.Additional>
                {[
                    '0',
                    '1 2 3'
                ]}
            </Status.Additional>
        )

        expect(wrapper.text()).toBe('01 2 3')
    })

    it('renders non-empty list of functional components', () => {
        const wrapper = mount(
            <Status.Additional>
                <span>{'0'}</span>
                <span>{'1 2 3'}</span>
            </Status.Additional>
        )

        expect(wrapper.text()).toBe('01 2 3')
    })

    it('renders mixed list of functional components and text', () => {
        const wrapper = mount(
            <Status.Additional>
                {'0'}
                <span>{'1 2 3'}</span>
            </Status.Additional>
        )

        expect(wrapper.text()).toBe('01 2 3')
    })
})
