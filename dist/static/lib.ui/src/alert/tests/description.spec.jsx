import React from 'react'
import { shallow } from 'enzyme'

import { Alert } from '..'

describe('<Alert.Description />', () => {
    it('is available', () => {
        expect(Alert.Description).toBeDefined()
    })

    it('renders children', () => {
        const wrapper = shallow(
            <Alert.Description>
                <span>{'foo bar baz'}</span>
            </Alert.Description>
        )

        expect(wrapper.contains(<span>{'foo bar baz'}</span>)).toBeTruthy()
    })
})
