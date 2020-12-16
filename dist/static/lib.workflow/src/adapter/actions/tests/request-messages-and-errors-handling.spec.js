import moxios from 'moxios'
import _ from 'lodash'
import i18next from 'i18next'
import { actionTypes as reduxFormTypes } from 'redux-form'

import locales from '../../../../locales/ru.json'
import { request as requestToWorkflowGate } from '../request'
import { defaultHttpClient } from '../http-client-request'
import * as types from '../../action-types'
import { createMockStore } from '../../../tests/utils'

import RESPONSE_WITH_MESSAGES from './fixtures/response-with-messages.json'
import RESPONSE_WITH_ERROR_MESSAGES_AND_CODE from './fixtures/response-with-error-messages-and-code.json'
import RESPONSE_WITH_VALIDATION_MESSAGES_AND_CODE from './fixtures/response-with-validation-messages-and-code.json'
import RESPONSE_WITH_MESSAGES_AND_BODY from './fixtures/response-with-messages-and-body.json'
import RESPONSE_WITH_REFERENCES from './fixtures/response-with-references.json'
import RESPONSE_WITHOUT_MESSAGE_CODES from './fixtures/response-without-message-codes.json'
import RESPONSE_WITH_ERROR from './fixtures/response-with-error.json'

// TODO все переписать на фреймворке интеграционных тестов, тяжело поддерживать
describe('Adapter :: actions', () => {
    const flow = 'superFlow'
    const WF_GATE_URL = 'http://custom.url'

    let store

    beforeEach(
        () => {
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

            i18next.init({
                lng: 'ru',
                resources: {
                    ru: {
                        translation: locales
                    }
                }
            })

            moxios.install(defaultHttpClient)

        })
    afterEach(
        () => {
            moxios.uninstall(defaultHttpClient)
        }
    )

    describe('request формирует запрос к WF-шлюзу и обрабатывает ответ', () => {
        it('не диспетчеризует события обновления экранов, если их нет', (done) => {

            moxios.wait(() => {
                const request = moxios.requests.mostRecent()

                request.respondWith({
                    status: 200,
                    response: RESPONSE_WITH_MESSAGES
                }).then(() => {
                    const expected = [
                        types.START_REQUEST,
                        types.SUCCESS,
                        types.UPDATE_REFERENCES,
                        types.UPDATE_MESSAGES,
                        reduxFormTypes.STOP_SUBMIT,
                        types.SET_SERVER_VALIDATION_ERROR,
                        types.STOP_REQUEST
                    ]

                    const actual = _.map(store.getActions(), (action) => action.type)
                    expect(actual).toEqual(expected)
                    done()
                })
            })

            requestToWorkflowGate(WF_GATE_URL)(store.dispatch, store.getState)
        })
        it('диспетчеризует событие @@redux-form/STOP_SUBMIT по данным из messageType=error', (done) => {

            moxios.wait(() => {
                const request = moxios.requests.mostRecent()

                request.respondWith({
                    status: 200,
                    response: RESPONSE_WITH_ERROR_MESSAGES_AND_CODE
                }).then(() => {
                    const expected = {
                        type: reduxFormTypes.STOP_SUBMIT,
                        meta: {
                            form: flow
                        },
                        payload: {},
                        error: false
                    }

                    const actual = _.find(store.getActions(), { type: reduxFormTypes.STOP_SUBMIT })
                    expect(actual).toEqual(expected)
                    done()
                })
            })

            requestToWorkflowGate(WF_GATE_URL)(store.dispatch, store.getState)
        })
        it('диспетчеризует событие @@redux-form/STOP_SUBMIT по данным из messageType=validation', (done) => {

            moxios.wait(() => {
                const request = moxios.requests.mostRecent()

                request.respondWith({
                    status: 200,
                    response: RESPONSE_WITH_VALIDATION_MESSAGES_AND_CODE
                }).then(() => {
                    const expected = {
                        type: reduxFormTypes.STOP_SUBMIT,
                        meta: {
                            form: flow
                        },
                        payload: {
                            VALIDATION1: 'title1 text1',
                            VALIDATION2: 'title2 text2'
                        },
                        error: true
                    }
                    const actual = _.find(store.getActions(), { type: reduxFormTypes.STOP_SUBMIT })

                    expect(actual).toEqual(expected)
                    done()
                })
            })

            requestToWorkflowGate(WF_GATE_URL)(store.dispatch, store.getState)
        })
        it('диспетчеризует события обновления экранов, если есть', (done) => {

            moxios.wait(() => {
                const request = moxios.requests.mostRecent()

                request.respondWith({
                    status: 200,
                    response: RESPONSE_WITH_MESSAGES_AND_BODY
                }).then(() => {
                    const expected = [
                        types.START_REQUEST,
                        types.SUCCESS,
                        reduxFormTypes.DESTROY,
                        reduxFormTypes.INITIALIZE,
                        reduxFormTypes.RESET,
                        types.UPDATE,
                        types.UPDATE_MESSAGES,
                        reduxFormTypes.STOP_SUBMIT,
                        types.SET_SERVER_VALIDATION_ERROR,
                        types.STOP_REQUEST
                    ]

                    const actual = _.map(store.getActions(), (action) => action.type)
                    expect(actual).toEqual(expected)
                    done()
                })
            })

            requestToWorkflowGate(WF_GATE_URL)(store.dispatch, store.getState)
        })
        it('диспетчеризует обновления справочников, если не пришли экраны', (done) => {

            moxios.wait(() => {
                const request = moxios.requests.mostRecent()

                request.respondWith({
                    status: 200,
                    response: RESPONSE_WITH_REFERENCES
                }).then(() => {
                    const expected = [
                        types.START_REQUEST,
                        types.SUCCESS,
                        types.UPDATE_REFERENCES,
                        reduxFormTypes.STOP_SUBMIT,
                        types.SET_SERVER_VALIDATION_ERROR,
                        types.STOP_REQUEST
                    ]

                    const actual = _.map(store.getActions(), (action) => action.type)
                    expect(actual).toEqual(expected)
                    done()
                })
            })

            requestToWorkflowGate(WF_GATE_URL)(store.dispatch, store.getState)
        })

        it('диспетчеризует событие @@redux-form/STOP_SUBMIT для типов validation и кодом привязки', (done) => {
            moxios.wait(() => {
                const request = moxios.requests.mostRecent()

                request.respondWith({
                    status: 200,
                    response: RESPONSE_WITH_VALIDATION_MESSAGES_AND_CODE
                }).then(() => {
                    const expected = {
                        type: reduxFormTypes.STOP_SUBMIT,
                        meta: {
                            form: flow
                        },
                        payload: {
                            VALIDATION1: 'title1 text1',
                            VALIDATION2: 'title2 text2'
                        },
                        error: true
                    }

                    const actual = _.find(store.getActions(), { type: reduxFormTypes.STOP_SUBMIT })
                    expect(actual).toEqual(expected)
                    done()
                })
            })

            requestToWorkflowGate(WF_GATE_URL)(store.dispatch, store.getState)
        })
        xit('обрабатывает ошибки ответа success:false + контейнер error', (done) => {

            moxios.wait(() => {
                const request = moxios.requests.mostRecent()

                request.respondWith({
                    status: 200,
                    response: RESPONSE_WITH_ERROR
                }).then(() => {
                    const expected = [
                        { type: types.START_REQUEST },
                        { type: types.REMOVE_SCREENS },
                        {
                            type: types.FAILED,
                            error: {
                                text: 'lib.workflow:try.to.enter.later',
                                title: 'lib.workflow:unexpected.error.happened',
                            }
                        }
                    ]

                    const actual = store.getActions()
                    expect(actual).toEqual(expected)
                    done()
                })
            })

            requestToWorkflowGate(WF_GATE_URL)(store.dispatch, store.getState)
        })
        it('обрабатывает ошибку 503 (запрос не попал на работоспособный сервер)', (done) => {


            moxios.wait(() => {
                const request = moxios.requests.mostRecent()

                request.respondWith({
                    status: 503
                }).then(() => {
                    const expected = [
                        { type: types.START_REQUEST },
                        { type: types.REMOVE_SCREENS },
                        {
                            type: types.FAILED,
                            error: {
                                title: 'lib.workflow:unexpected.error.happened',
                                text: 'lib.workflow:try.to.enter.later',
                            }
                        }
                    ]

                    const actual = store.getActions()
                    expect(actual).toEqual(expected)
                    done()
                })
            })

            requestToWorkflowGate(WF_GATE_URL)(store.dispatch, store.getState)
        })
        it('обрабатывает ошибку 500 (Internal server error)', (done) => {

            moxios.wait(() => {
                const request = moxios.requests.mostRecent()

                request.respondWith({
                    status: 500
                }).then(() => {
                    const expected = [
                        { type: types.START_REQUEST },
                        { type: types.REMOVE_SCREENS },
                        {
                            type: types.FAILED,
                            error: {
                                title: 'lib.workflow:unexpected.error.happened',
                                text: 'lib.workflow:try.to.enter.later',
                            }
                        }
                    ]

                    const actual = store.getActions()
                    expect(actual).toEqual(expected)
                    done()
                })
            })

            requestToWorkflowGate(WF_GATE_URL)(store.dispatch, store.getState)
        })
    })
})
