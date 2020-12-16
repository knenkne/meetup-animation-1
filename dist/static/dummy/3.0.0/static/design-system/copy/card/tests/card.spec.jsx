import React from 'react'
import { shallow, mount } from 'enzyme'

import { Card } from '../card'
import style from '../style.css'

describe('<Card />', () => {
    it('is available', () => {
        expect(Card).toBeDefined()
    })

    it('has default theme as property', () => {
        expect(Card.theme).toBeDefined()
        expect(Card.theme).toBe(style)
    })

    it('renders title', () => {
        const wrapper = mount(<Card title="Заголовок">
            <span>{'foo bar baz'}</span>
        </Card>)

        expect(wrapper.find('h4').length).toBe(1)
        expect(wrapper.contains('Заголовок')).toBeTruthy()
    })

    it('renders children', () => {
        const wrapper = shallow(
            <Card title="Заголовок">
                <span>{'foo bar baz'}</span>
            </Card>
        )

        expect(wrapper.contains(<span>{'foo bar baz'}</span>)).toBeTruthy()
    })
})
