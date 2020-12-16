import React from 'react'
import { shallow } from 'enzyme'

import { Alert } from '..'

describe('<Alert.System.Actions />', () => {
    it('is available', () => {
        expect(Alert.Actions).toBeDefined()
    })

    it('renders children', () => {
        const wrapper = shallow(
            <Alert.Actions>
                <span>{'foo bar baz'}</span>
            </Alert.Actions>
        )

        expect(wrapper.contains(<span>{'foo bar baz'}</span>)).toBeTruthy()
    })
})
