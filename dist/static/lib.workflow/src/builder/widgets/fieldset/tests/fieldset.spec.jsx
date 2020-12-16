import React from 'react'
import { mount } from 'enzyme'
import { Provider } from 'react-redux'
import thunk from 'redux-thunk'
import configureStore from 'redux-mock-store'
import { reduxForm } from 'redux-form'

import Fieldset from '..'

const subFlow = {
    status: '',
    startData: {
        regionName: '',
        url: '',
        pid: ''
    },
    onReturnUrl: ''
}

const mockState = {
    references: {},
    document: {},
    screens: [],
    progress: {},
    history: [],
    error: {},
    messages: [],
    process: {
        pid: null,
        url: null,
        flow: null,
        state: null,
        name: null,
        mainProcessId: null
    },
    status: {
        isInSubflow: false,
        isLoading: true,
        isFailed: false,
        isFinished: false,
    },
    subFlow
}

function getWrapper (advancedProps) {
    const fullProps = {
        fields: [
            {
                id: 'flow:id:text',
                value: '12345667890',
                type: 'text',
                referenceId: '',
                title: 'Text',
                description: '## Headline\n---\nLorem ipsum dolor sit amet',
                validators: []
            },
            {
                id: 'flow:id:two:decimal',
                value: '2,2',
                type: 'text',
                format: 'decimal',
                formatConfig: '2',
                title: 'decimal',
                description: 'Lorem ipsum dolor sit amet',
                validators: []
            },
            {
                id: 'flow:id:two:mask',
                value: '79132222220',
                type: 'text',
                format: 'formatted',
                formatConfig: '+[9]([000]) [000]-[00]-<2><0>',
                referenceId: '',
                title: 'mask',
                description: 'Lorem ipsum dolor sit amet',
            },
            {
                id: 'flow:id:two:checkbox',
                value: 'true',
                type: 'checkbox',
                referenceId: '',
                title: 'checkbox',
                description: 'Lorem ipsum dolor sit amet',
            },
            {
                id: 'flow:id:two:quantity',
                value: '10',
                type: 'select',
                format: 'quantity',
                formatConfig: '1',
                referenceId: '',
                title: 'Quantity',
                description: 'Lorem ipsum dolor sit amet',
            }
        ],
        properties: {},
        references: {},
        ...advancedProps
    }
    const middlewares = [thunk]
    const mockStore = configureStore(middlewares)

    const state = {
        form: {
            workflow: {
                values: {},
                formName: 'workflow'
            }
        }
    }
    const store = mockStore({ ...state, workflow: mockState })

    const TestForm = reduxForm({ form: 'workflow' })(Fieldset)

    return mount(
        <Provider store={store}>
            <TestForm {...fullProps} />
        </Provider>
    )
}

// TODO заменить юнит-тесты интеграционными https://sbtatlas.sigma.sbrf.ru/jira/browse/DBSBOLUI-3077
describe.skip('<Fieldset />', () => {

    it('Export Fieldset is correct', () => {
        expect(Fieldset).toBeDefined()
    })

    it('Initial state is correct', () => {
        const wrapper = getWrapper()
        expect(wrapper.find('[name="flow:id:text"]').first().props().value).toBe('12345667890')
        expect(wrapper.find('[name="flow:id:two:decimal"]').first().props().value).toBe('2,2')
        expect(wrapper.find('[name="flow:id:two:mask"]').first().props().value).toBe('79132222220')
        expect(wrapper.find('[name="flow:id:two:checkbox"]').first().props().value).toBe('true')
        expect(wrapper.find('[name="flow:id:two:quantity"]').first().props().value).toBe('10')
    })

})
