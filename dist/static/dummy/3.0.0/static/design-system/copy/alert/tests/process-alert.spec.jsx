import React from 'react'
import { shallow } from 'enzyme'

import { Alert } from '..'

describe('<Alert.Process />', () => {
    it('is available', () => {
        expect(Alert.Process).toBeDefined()
    })

    it('renders title', () => {
        const wrapper = shallow(<Alert.Process mode="info" title="Заголовок" a11y={{}}>
            <Alert.Process.Description />
        </Alert.Process>)
        expect(wrapper.find('h3').length).toBe(1)
        expect(wrapper.contains('Заголовок')).toBeTruthy()

        const wrapperNoTitle = shallow(<Alert.Process mode="info" a11y={{}}>
            <Alert.Process.Description />
        </Alert.Process>)
        expect(wrapperNoTitle.find('h3').length).toBe(0)
    })

    it('renders children', () => {
        const wrapper = shallow(
            <Alert.Process
                mode="success"
                title="Заголовок"
                a11y={{}}
            >
                <Alert.Process.Description />
                <span>{'foo bar baz'}</span>
            </Alert.Process>
        )

        expect(wrapper.contains(<span>{'foo bar baz'}</span>)).toBeTruthy()
    })
})
