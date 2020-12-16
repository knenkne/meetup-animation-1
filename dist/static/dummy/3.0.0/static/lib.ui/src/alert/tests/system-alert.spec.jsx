import React from 'react'
import { shallow } from 'enzyme'

import { Alert } from '..'
import style from '../style.css'

describe('<Alert.System />', () => {
    it('is available', () => {
        expect(Alert.System).toBeDefined()
    })

    it('has default theme as property', () => {
        expect(Alert.System.theme).toBeDefined()
        expect(Alert.System.theme).toBe(style)
    })

    it('has class corresponding to mode prop', () => {
        const wrapperError = shallow(<Alert.System mode="error" a11y={{}}>
            <Alert.Process.Description />
        </Alert.System>)
        const wrapperInfo = shallow(<Alert.System mode="info" a11y={{}}>
            <Alert.Process.Description />
        </Alert.System>)
        const wrapperSuccess = shallow(<Alert.System mode="success" a11y={{}}>
            <Alert.Process.Description />
        </Alert.System>)

        expect(wrapperError.find(`.${style.alert}`).first().hasClass(Alert.System.theme.error)).toBeTruthy()
        expect(wrapperInfo.find(`.${style.alert}`).first().hasClass(Alert.System.theme.info)).toBeTruthy()
        expect(wrapperSuccess.find(`.${style.alert}`).first().hasClass(Alert.System.theme.success)).toBeTruthy()
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
