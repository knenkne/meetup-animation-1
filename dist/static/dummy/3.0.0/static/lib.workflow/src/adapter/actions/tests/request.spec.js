import _ from 'lodash'
import moxios from 'moxios'
import { actionTypes as reduxFormTypes } from 'redux-form'

import { request as requestToWorkflowGate } from '../request'
import { defaultHttpClient } from '../http-client-request'
import * as types from '../../action-types'
import { createMockStore } from '../../../tests/utils'

import END_WITH_OUTPUT from './fixtures/response-with-end-and-output.json'
import END_WITH_OUTPUT_EMPTY_SCREENS from './fixtures/response-with-end-and-output-empty-screens.json'
import EXTERNAL_ENTER from './fixtures/response-external-enter.json'
import EXTERNAL_RETURN from './fixtures/response-external-return.json'
import RESPONSE_WITHOUT_MESSAGES from './fixtures/response-without-messages.json'
import RESPONSE_WITH_ERROR from './fixtures/response-with-error.json'
import RESPONSE_WITH_FIELDS from './fixtures/response-with-fields.json'

describe('Adapter :: actions :: utils', () => {
    const flow = 'test'
    const WF_GATE_URL = 'http://custom.url'
    let store

    const reduxInitializedAction = {
        type: reduxFormTypes.INITIALIZE,
        meta: {
            form: 'test',
            keepDirty: false
        },
        payload: {
            'insurance:tripDetails:date:from': '',
            'insurance:tripDetails:date:till': '',
            'insurance:tripDetails:duration': '',
            'insurance:tripDetails:region': ''
        },
    }

    beforeEach(() => {
        const workflowSlice = {
            process: {
                pid: '123456',
                url: '/test',
                flow,
                name: flow,
                state: 'step2'
            },
            status: {
                isInSubflow: false,
                isLoading: true,
                isFailed: false,
                isFinished: false
            },
            document: {},
            events: [],
            screens: [],
            progress: {},
            references: {},
            history: [],
            error: {},
            messages: [],
            options: {}
        }

        const formSlice = {
            [flow]: {}
        }

        store = createMockStore(workflowSlice, formSlice)

        moxios.install(defaultHttpClient)
    })
    afterEach(() => {
        moxios.uninstall(defaultHttpClient)
    })

    describe('request обращается к WF шлюзу и диспетчеризует', () => {
        // TODO: восстановить
        xit('WORKFLOW/REQUEST, WORKFLOW/SUCCESS, WORKFLOW/UPDATE. Вызывает переданные коллбэки start, stop', (done) => {
            const startHandler = jasmine.createSpy('start')
            const stopHandler = jasmine.createSpy('stop')
            const errorHandler = jasmine.createSpy('error')

            moxios.wait(() => {
                const request = moxios.requests.mostRecent()

                request
                    .respondWith({
                        status: 200,
                        response: RESPONSE_WITHOUT_MESSAGES
                    })
                    .then(() => {
                        const expected = [
                            { type: types.START_REQUEST },
                            {
                                type: types.SUCCESS,
                                pid: 'de9d9380-8f1a-11e7-861c-97ee935a8de4'
                            },
                            reduxInitializedAction,
                            {
                                type: types.UPDATE,
                                pid: RESPONSE_WITHOUT_MESSAGES.body.pid,
                                flow: RESPONSE_WITHOUT_MESSAGES.body.flow,
                                state: RESPONSE_WITHOUT_MESSAGES.body.state,
                                document:
                                    RESPONSE_WITHOUT_MESSAGES.body.output
                                        .document,
                                screens:
                                    RESPONSE_WITHOUT_MESSAGES.body.output
                                        .screens,
                                events:
                                    RESPONSE_WITHOUT_MESSAGES.body.output
                                        .events,
                                references:
                                    RESPONSE_WITHOUT_MESSAGES.body.output
                                        .references,
                                history: RESPONSE_WITHOUT_MESSAGES.body.history,
                                progress:
                                    RESPONSE_WITHOUT_MESSAGES.body.output
                                        .progress
                            },
                            {
                                type: reduxFormTypes.STOP_SUBMIT,
                                meta: { form: flow },
                                payload: {},
                                error: false
                            },
                            {
                                type: types.SET_SERVER_VALIDATION_ERROR,
                                fieldId: void 0
                            },
                            { type: types.STOP_REQUEST }
                        ]
                        const actual = store.getActions()
                        expect(actual).toEqual(expected)
                        expect(startHandler).toHaveBeenCalled()
                        expect(stopHandler).toHaveBeenCalled()
                        expect(errorHandler).not.toHaveBeenCalled()

                        done()
                    })
            })

            requestToWorkflowGate(
                WF_GATE_URL,
                {},
                {},
                {
                    onStart: startHandler,
                    onSuccess: stopHandler,
                    onFail: errorHandler
                }
            )(store.dispatch, store.getState)
        })

        // TODO: восстановить
        xit('WORKFLOW/REQUEST, WORKFLOW/SUCCESS и WORKFLOW/FINISH, WORKFLOW/UPDATE при ответе, содержащем признак завершения процесса и output с экранами', (done) => {
            moxios.wait(() => {
                const request = moxios.requests.mostRecent()

                request
                    .respondWith({
                        status: 200,
                        response: END_WITH_OUTPUT
                    })
                    .then(() => {
                        const expected = [
                            { type: types.START_REQUEST },
                            { type: types.SUCCESS, pid: null },
                            { type: types.FINISH },
                            {
                                type: reduxInitializedAction.type,
                                meta: reduxInitializedAction.meta,
                                payload: {}
                            },
                            {
                                type: types.UPDATE,
                                pid: END_WITH_OUTPUT.body.pid,
                                flow: END_WITH_OUTPUT.body.flow,
                                state: END_WITH_OUTPUT.body.state,
                                document: END_WITH_OUTPUT.body.output.document,
                                screens: END_WITH_OUTPUT.body.output.screens,
                                events: [],
                                references: {},
                                history: [],
                                progress: {}
                            },
                            {
                                type: reduxFormTypes.STOP_SUBMIT,
                                meta: { form: flow },
                                payload: {},
                                error: false
                            },
                            {
                                type: types.SET_SERVER_VALIDATION_ERROR,
                                fieldId: void 0
                            },
                            {
                                type: types.STOP_REQUEST
                            }
                        ]
                        const actual = store.getActions()
                        expect(actual).toEqual(expected)

                        done()
                    })
            })

            requestToWorkflowGate(WF_GATE_URL)(store.dispatch, store.getState)
        })
        it(`
            WORKFLOW/START_REQUEST,
            WORKFLOW/SUCCESS,
            WORKFLOW/FINISH,
            WORKFLOW/UPDATE
            при ответе, содержащем признак завершения процесса и output без экранов`, (done) => {
            moxios.wait(() => {
                const request = moxios.requests.mostRecent()

                request
                    .respondWith({
                        status: 200,
                        response: END_WITH_OUTPUT_EMPTY_SCREENS
                    })
                    .then(() => {
                        const expected = [
                            { type: types.START_REQUEST },
                            { type: types.SUCCESS, pid: void 0 },
                            { type: types.FINISH },
                            {
                                type: types.UPDATE,
                                pid: END_WITH_OUTPUT.body.pid,
                                flow: END_WITH_OUTPUT.body.flow,
                                state: END_WITH_OUTPUT.body.state,
                                document: END_WITH_OUTPUT.body.output.document,
                                screens: [],
                                events: [],
                                references: {},
                                history: [],
                                progress: {}
                            },
                            {
                                type: reduxFormTypes.STOP_SUBMIT,
                                meta: { form: flow },
                                payload: {},
                                error: false
                            },
                            {
                                type: types.SET_SERVER_VALIDATION_ERROR,
                                fieldId: void 0
                            },
                            { type: types.STOP_REQUEST }
                        ]
                        const actual = store.getActions()
                        expect(actual).toEqual(expected)

                        done()
                    })
            })

            requestToWorkflowGate(WF_GATE_URL)(store.dispatch, store.getState)
        })

        it('@@redux-form/INITIALIZE, если получен output.fields', (done) => {
            moxios.wait(() => {
                const request = moxios.requests.mostRecent()

                request
                    .respondWith({
                        status: 200,
                        response: RESPONSE_WITH_FIELDS
                    })
                    .then(() => {
                        const initializeAction = _.find(store.getActions(), {
                            type: reduxFormTypes.INITIALIZE
                        })
                        expect(initializeAction).toEqual({
                            type: reduxFormTypes.INITIALIZE,
                            meta: {
                                form: 'test',
                                keepDirty: false
                            },
                            payload: {
                                'some:field': 'some:value'
                            }
                        })
                        done()
                    })
            })

            requestToWorkflowGate(WF_GATE_URL)(store.dispatch, store.getState)
        })

        // TODO: восстановить
        xit('Последовательность экшенов при ответе, содержащем признак необходимости перехода в subflow', (done) => {
            const expected = [
                { type: types.START_REQUEST },
                { type: types.SUCCESS, pid: '12345678987654321' },
                { type: types.START_REQUEST },
                {
                    type: types.SUCCESS,
                    pid: 'de9d9380-8f1a-11e7-861c-97ee935a8de4'
                },
                reduxInitializedAction,
                {
                    type: types.UPDATE,
                    pid: RESPONSE_WITHOUT_MESSAGES.body.pid,
                    flow: RESPONSE_WITHOUT_MESSAGES.body.flow,
                    state: RESPONSE_WITHOUT_MESSAGES.body.state,
                    document: RESPONSE_WITHOUT_MESSAGES.body.output.document,
                    screens: RESPONSE_WITHOUT_MESSAGES.body.output.screens,
                    events: RESPONSE_WITHOUT_MESSAGES.body.output.events,
                    references:
                        RESPONSE_WITHOUT_MESSAGES.body.output.references,
                    progress: RESPONSE_WITHOUT_MESSAGES.body.output.progress,
                    history: RESPONSE_WITHOUT_MESSAGES.body.history
                },
                {
                    type: reduxFormTypes.STOP_SUBMIT,
                    meta: { form: flow },
                    payload: {},
                    error: false
                },
                {
                    type: types.SET_SERVER_VALIDATION_ERROR,
                    fieldId: void 0
                },
                { type: types.ENTERING_SUBFLOW, url: EXTERNAL_ENTER.body.url },
                { type: types.STOP_REQUEST }
            ]

            moxios.wait(() => {
                moxios.requests
                    .mostRecent()
                    .respondWith({ status: 200, response: EXTERNAL_ENTER })
                    .then(() =>
                        moxios.requests.mostRecent().respondWith({
                            status: 200,
                            response: RESPONSE_WITHOUT_MESSAGES
                        })
                    )
                    .then(() => {
                        const actual = store.getActions()

                        expect(actual).toEqual(expected)
                        done()
                    })
            })

            store.dispatch(requestToWorkflowGate(WF_GATE_URL))
        })
        xit('Последовательность экшенов при неуспешной попытке входа в подпроцесс', (done) => {
            const expected = [
                { type: types.START_REQUEST },
                { type: types.SUCCESS, pid: '12345678987654321' },
                { type: types.START_REQUEST },
                { type: types.REMOVE_SCREENS },
                {
                    type: types.FAILED,
                    error: {
                        text: 'lib.workflow:try.to.enter.later',
                        title: 'lib.workflow:unexpected.error.happened'
                    }
                }
            ]

            moxios.wait(() => {
                moxios.requests
                    .mostRecent()
                    .respondWith({ status: 200, response: EXTERNAL_ENTER })
                    .then(() =>
                        moxios.requests.mostRecent().respondWith({
                            status: 200,
                            response: RESPONSE_WITH_ERROR
                        })
                    )
                    .then(() => {
                        const actual = store.getActions()
                        expect(actual).toEqual(expected)
                        done()
                    })
            })

            store.dispatch(requestToWorkflowGate(WF_GATE_URL))
        })

        // TODO: восстановить
        xit('Последовательность экшенов при ответе, содержащем признак необходимости выхода из subflow', (done) => {
            const expected = [
                { type: types.START_REQUEST },
                { type: types.SUCCESS, pid: '12345678987654321' },
                { type: types.START_REQUEST },
                {
                    type: types.SUCCESS,
                    pid: 'de9d9380-8f1a-11e7-861c-97ee935a8de4'
                },
                reduxInitializedAction,
                {
                    type: types.UPDATE,
                    pid: RESPONSE_WITHOUT_MESSAGES.body.pid,
                    flow: RESPONSE_WITHOUT_MESSAGES.body.flow,
                    state: RESPONSE_WITHOUT_MESSAGES.body.state,
                    document: RESPONSE_WITHOUT_MESSAGES.body.output.document,
                    screens: RESPONSE_WITHOUT_MESSAGES.body.output.screens,
                    events: RESPONSE_WITHOUT_MESSAGES.body.output.events,
                    references:
                        RESPONSE_WITHOUT_MESSAGES.body.output.references,
                    progress: RESPONSE_WITHOUT_MESSAGES.body.output.progress,
                    history: RESPONSE_WITHOUT_MESSAGES.body.history
                },
                {
                    type: reduxFormTypes.STOP_SUBMIT,
                    meta: { form: flow },
                    payload: {},
                    error: false
                },
                {
                    type: types.SET_SERVER_VALIDATION_ERROR,
                    fieldId: void 0
                },
                {
                    type: types.RETURNING_FROM_SUBFLOW,
                    url: EXTERNAL_RETURN.body.url
                },
                { type: types.STOP_REQUEST }
            ]

            moxios.wait(() => {
                moxios.requests
                    .mostRecent()
                    .respondWith({ status: 200, response: EXTERNAL_RETURN })
                    .then(() =>
                        moxios.requests.mostRecent().respondWith({
                            status: 200,
                            response: RESPONSE_WITHOUT_MESSAGES
                        })
                    )
                    .then(() => {
                        const actual = store.getActions()
                        expect(actual).toEqual(expected)
                        done()
                    })
            })

            store.dispatch(requestToWorkflowGate(WF_GATE_URL))
        })
        xit('Последовательность экшенов при неуспешной попытке выхода из подпроцесса', (done) => {
            const expected = [
                { type: types.START_REQUEST },
                { type: types.SUCCESS, pid: '12345678987654321' },
                { type: types.START_REQUEST },
                { type: types.REMOVE_SCREENS },
                {
                    type: types.FAILED,
                    error: {
                        text: 'lib.workflow:try.to.enter.later',
                        title: 'lib.workflow:unexpected.error.happened'
                    }
                }
            ]

            moxios.wait(() => {
                moxios.requests
                    .mostRecent()
                    .respondWith({ status: 200, response: EXTERNAL_RETURN })
                    .then(() =>
                        moxios.requests.mostRecent().respondWith({
                            status: 200,
                            response: RESPONSE_WITH_ERROR
                        })
                    )
                    .then(() => {
                        const actual = store.getActions()
                        expect(actual).toEqual(expected)
                        done()
                    })
            })

            store.dispatch(requestToWorkflowGate(WF_GATE_URL))
        })
    })
})
