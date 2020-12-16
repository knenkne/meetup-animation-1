import React from 'react'
import { Provider } from 'react-redux'
import { mount } from 'enzyme'
import { actionTypes } from 'redux-form'

import RendererWithReduxForm from '../renderer'
import { createMockStore } from '../../tests/utils'

import { response, responseWithInitialValues } from './fixtures'

// TODO заменить юнит-тесты интеграционными https://sbtatlas.sigma.sbrf.ru/jira/browse/DBSBOLUI-3077
test.skip('RendererWithReduxForm: Диспетчеризует события инициализации формы и поля в redux-form', () => {

    const flow = 'test'

    let store

    it('без начальных значений)', () => {
        store = createMockStore({
            process: {
                name: flow,
                state: response.body.state,
            },
            status: {
                isInSubflow: false,
                isLoading: false,
                isFailed: false,
                isFinished: false
            },
            screens: response.body.output.screens,
            messages: [],
            history: []
        })

        mount(
            <Provider store={store}>
                <RendererWithReduxForm name={flow} />
            </Provider>
        )

        const expected = [
            {
                type: actionTypes.INITIALIZE,
                meta: {
                    form: flow,
                    keepDirty: false,
                    keepValues: void 0,
                    updateUnregisteredFields: false,
                },
                payload: {
                    'field:field:one': '',
                    'field:field:two': ''
                }
            },
            {
                type: actionTypes.REGISTER_FIELD,
                meta: {
                    form: flow
                },
                payload: {
                    name: 'field:field:one',
                    type: 'Field'
                }
            },
            {
                type: actionTypes.REGISTER_FIELD,
                meta: {
                    form: flow
                },
                payload: {
                    name: 'field:field:two',
                    type: 'Field'
                }
            }
        ]

        const actual = store.getActions()
        expect(actual).toEqual(expected)
    })
    it('с начальными значениями', () => {

        store = createMockStore({
            process: {
                flow: responseWithInitialValues.body.flow,
                state: responseWithInitialValues.body.state,
            },
            status: {
                isInSubflow: false,
                isLoading: false,
                isFailed: false,
                isFinished: false
            },
            screens: responseWithInitialValues.body.output.screens,
            messages: [],
            history: []
        })

        mount(
            <Provider store={store}>
                <RendererWithReduxForm name={flow} />
            </Provider>
        )

        const expected = [
            {
                type: actionTypes.INITIALIZE,
                meta: {
                    form: flow,
                    keepDirty: false,
                    keepValues: void 0,
                    updateUnregisteredFields: false,
                },
                payload: {
                    'field:field:one': 'initialValue 1',
                    'field:field:two': 'initialValue 2'
                }
            },
            {
                type: actionTypes.REGISTER_FIELD,
                meta: {
                    form: flow
                },
                payload: {
                    name: 'field:field:one',
                    type: 'Field'
                }
            },
            {
                type: actionTypes.REGISTER_FIELD,
                meta: {
                    form: flow
                },
                payload: {
                    name: 'field:field:two',
                    type: 'Field'
                }
            }
        ]

        const actual = store.getActions()
        expect(actual).toEqual(expected)
    })
})

