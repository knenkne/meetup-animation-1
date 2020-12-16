import React from 'react'
import { shallow, mount } from 'enzyme'

import { Status } from '..'
import style from '../style.css'

describe('<Status />', () => {
    it('is available', () => {
        expect(Status).toBeDefined()
    })

    it('has default theme as property', () => {
        expect(Status.theme).toBeDefined()
        expect(Status.theme).toBe(style)
    })

    it('renders status description', () => {
        const wrapper = shallow(
            <Status
                mode="draft"
                description="Черновик"
                title=""
            />
        )

        expect(wrapper.contains('Черновик')).toBeTruthy()
    })

    it('renders title', () => {
        const wrapper = shallow(
            <Status
                mode="draft"
                description=""
                title="Заголовок"
            />
        )

        expect(wrapper.contains('Заголовок')).toBeTruthy()
    })

    it('renders 1 child', () => {
        const wrapper = mount(
            <Status
                mode="draft"
                description="Черновик"
                title="Заголовок"
            >
                <span>{'foo bar'}</span>
            </Status>
        )

        expect(wrapper.contains(<span>{'foo bar'}</span>)).toBeTruthy()
    })

    it('renders children', () => {
        const wrapper = mount(
            <Status
                mode="draft"
                description="Черновик"
                title="Заголовок"
            >
                <span className="foo">{'foo bar'}</span>
                <span className="foo">{'foo bar'}</span>
            </Status>
        )

        expect(wrapper.find('.foo').length).toBe(2)
    })

    it('always renders main, does not render Info by default', () => {
        const wrapper = mount(
            <Status
                mode="draft"
                description="Черновик"
                title="Заголовок"
            />
        )

        const body = wrapper.find('[data-unit="status:body"]')
        const main = wrapper.find('[data-unit="status:main"]')
        const info = wrapper.find('[data-unit="status:info"]')

        expect(body.childAt(0).instance()).toBe(main.instance())
        expect(info.length).toBe(0)
    })

    it('renders Info next to the main', () => {
        const wrapper = mount(
            <Status
                mode="draft"
                description="Черновик"
                title="Заголовок"
            >
                <Status.Info
                    value="12345678,90"
                    description="bar"
                />
            </Status>
        )

        const body = wrapper.find('[data-unit="status:body"]')
        const main = wrapper.find('[data-unit="status:main"]')
        const info = wrapper.find('[data-unit="status:info"]')

        expect(body.childAt(0).instance()).toBe(main.instance())
        expect(info.length).toBe(1)
        expect(body.childAt(1).is(Status.Info)).toBeTruthy()
    })
})
