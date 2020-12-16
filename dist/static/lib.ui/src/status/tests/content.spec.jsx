import React from 'react'
import { shallow } from 'enzyme'

import { Status } from '..'

describe('<Status.Content />', () => {
    it('is available', () => {
        expect(Status.Content).toBeDefined()
    })

    it('renders children', () => {
        const wrapper = shallow(
            <Status.Content>
                <span>{'foo bar baz'}</span>
            </Status.Content>
        )

        expect(wrapper.contains(<span>{'foo bar baz'}</span>)).toBeTruthy()
    })
})
