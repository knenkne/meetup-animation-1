import React from 'react'
import { shallow } from 'enzyme'

import { Status } from '..'

describe('<Status.Actions />', () => {
    it('is available', () => {
        expect(Status.Actions).toBeDefined()
    })

    it('renders children', () => {
        const wrapper = shallow(
            <Status.Actions>
                <span>{'foo bar baz'}</span>
            </Status.Actions>
        )

        expect(wrapper.contains(<span>{'foo bar baz'}</span>)).toBeTruthy()
    })
})
