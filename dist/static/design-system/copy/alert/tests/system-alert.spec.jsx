import React from 'react'
import { shallow } from 'enzyme'

import { Alert } from '..'

describe('<Alert.System />', () => {
    it('is available', () => {
        expect(Alert.System).toBeDefined()
    })

    it('renders title', () => {
        const wrapper = shallow(<Alert.System mode="info" title="Заголовок" a11y={{}}>
            <Alert.System.Description />
        </Alert.System>)
        expect(wrapper.find('h3').length).toBe(1)
        expect(wrapper.contains('Заголовок')).toBeTruthy()

        const wrapperNoTitle = shallow(<Alert.System mode="info" a11y={{}}>
            <Alert.System.Description />
        </Alert.System>)
        expect(wrapperNoTitle.find('h3').length).toBe(0)
    })

    it('renders children', () => {
        const wrapper = shallow(
            <Alert.System
                mode="success"
                title="Заголовок"
                a11y={{}}
            >
                <Alert.System.Description />
                <span>{'foo bar baz'}</span>
            </Alert.System>
        )

        expect(wrapper.contains(<span>{'foo bar baz'}</span>)).toBeTruthy()
    })
})
