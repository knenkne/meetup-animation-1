import React from 'react'
import { mount } from 'enzyme'
import { Provider } from 'react-redux'
import thunk from 'redux-thunk'
import configureStore from 'redux-mock-store'
import { reduxForm } from 'redux-form'
import { Input, Selection } from '@sbol/lib.ui'

import MappedWebFullName, { WebFullName } from '../full-name'

describe('<WebFullName />', () => {
    it('Export WebFullName is correct', () => {
        expect(WebFullName).toBeDefined()
    })

    const props = {
        fields: [
            {
                id: 'person:lastName',
                referenceId: '',
                title: 'Фамилия',
                type: 'text',
                validators: [],
                value: ''
            },
            {
                id: 'person:firstName',
                referenceId: '',
                title: 'Имя',
                type: 'text',
                validators: [],
                value: ''
            },
            {
                id: 'person:middleName',
                referenceId: '',
                title: 'Отчество',
                type: 'text',
                validators: [],
                value: ''
            },
            {
                id: 'person:noMiddleName',
                referenceId: '',
                title: 'У меня нет отчества',
                type: 'checkbox',
                validators: [],
                value: ''
            }
        ],
        properties: {},
        references: {}
    }
    const readOnlyProps = {
        fields: [
            {
                id: 'person:lastName',
                referenceId: '',
                title: 'Фамилия',
                type: 'text',
                readonly: true,
                validators: [],
                value: 'Иванов'
            },
            {
                id: 'person:firstName',
                referenceId: '',
                title: 'Имя',
                type: 'text',
                readonly: true,
                validators: [],
                value: 'Иван'
            },
            {
                id: 'person:middleName',
                referenceId: '',
                title: 'Отчество',
                type: 'text',
                readonly: true,
                validators: [],
                value: 'Иванович'
            },
            {
                id: 'person:noMiddleName',
                referenceId: '',
                title: 'У меня нет отчества',
                type: 'checkbox',
                readonly: true,
                validators: [],
                value: ''
            }
        ],
        properties: {},
        references: {}
    }

    const middlewares = [thunk]
    const mockStore = configureStore(middlewares)
    const state = {
        form: {
            workflow: {
                values: {},
                formName: 'workflow'
            }
        },
        workflow: {
            references: {},
            document: {},
            screens: [],
            progress: {},
            history: [],
            error: {},
            messages: [],
            process: {},
            status: {},
        }
    }
    
    const store = mockStore(state)
    const TestForm = reduxForm({ form: 'workflow' })(MappedWebFullName)

    it('Initial state is correct', () => {
        const wrapper = mount(
            <Provider store={store}>
                <TestForm {...props} />
            </Provider>
        )

        expect(wrapper.find(Input).length).toEqual(3)
        expect(wrapper.find(Selection.Checkbox).length).toEqual(1)

        expect(wrapper.find(Input).at(0).props().value).toBe('')
        expect(wrapper.find(Input).at(1).props().value).toBe('')
        expect(wrapper.find(Input).at(2).props().value).toBe('')
        expect(wrapper.find(Selection.Checkbox).props().value).toBe(false)
    })

    it('Read only state is correct', () => {
        const wrapper = mount(
            <Provider store={store}>
                <TestForm {...readOnlyProps} />
            </Provider>
        )

        expect(wrapper.find(Input).length).toEqual(3)

        expect(wrapper.find(Input).at(0).props().value).toBe('Иванов')
        expect(wrapper.find(Input).at(1).props().value).toBe('Иван')
        expect(wrapper.find(Input).at(2).props().value).toBe('Иванович')
    })
})
