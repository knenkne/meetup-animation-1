import React from 'react'
import { shallow } from 'enzyme'

import { Alert } from '..'
import style from '../process-style.css'

describe('<Alert.Process />', () => {
    it('is available', () => {
        expect(Alert.Process).toBeDefined()
    })

    it('has default theme as property', () => {
        expect(Alert.Process.theme).toBeDefined()
        expect(Alert.Process.theme).toBe(style)
    })

    it('has class corresponding to mode prop', () => {
        const wrapperError = shallow(<Alert.Process mode="error" a11y={{}}>
            <Alert.Process.Description />
        </Alert.Process>)
        const wrapperInfo = shallow(<Alert.Process mode="info" a11y={{}}>
            <Alert.Process.Description />
        </Alert.Process>)
        const wrapperSuccess = shallow(<Alert.Process mode="success" a11y={{}}>
            <Alert.Process.Description />
        </Alert.Process>)
        const wrapperDraft = shallow(<Alert.Process mode="draft" a11y={{}}>
            <Alert.Process.Description />
        </Alert.Process>)

        expect(wrapperError.find(`.${style.alert}`).first().hasClass(Alert.Process.theme.error)).toBeTruthy()
        expect(wrapperInfo.find(`.${style.alert}`).first().hasClass(Alert.Process.theme.info)).toBeTruthy()
        expect(wrapperSuccess.find(`.${style.alert}`).first().hasClass(Alert.Process.theme.success)).toBeTruthy()
        expect(wrapperDraft.find(`.${style.alert}`).first().hasClass(Alert.Process.theme.draft)).toBeTruthy()
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
        expect(wrapper.find('h3').hasClass(style.offset)).toBeFalsy()
    })

    it('add offset class if only title', () => {
        const wrapper = shallow(
            <Alert.Process
                mode="success"
                title="Заголовок"
                a11y={{}}
            />
        )

        expect(wrapper.find('h3').hasClass(style.offset)).toBeTruthy()
    })

    it('add offset class to title if empty children', () => {
        const wrapper = shallow(
            <Alert.Process
                mode="success"
                title="Заголовок"
                a11y={{}}
            >
                {''}
                {false}
            </Alert.Process>
        )

        expect(wrapper.find('h3').hasClass(style.offset)).toBeTruthy()
    })
})
