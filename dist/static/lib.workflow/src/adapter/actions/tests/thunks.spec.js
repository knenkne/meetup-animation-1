import _ from 'lodash'
import moxios from 'moxios'

import { onEnterEvent, onReturnEvent, rollbackHistory, start, event } from '../thunks'
import { defaultHttpClient } from '../http-client-request'
import { createMockStore } from '../../../tests/utils'
import * as types from '../../action-types'


describe('Adapter :: thunks', () => {
    let store
    const WF_GATE_URL = 'http://custom.url'

    beforeEach(() => {
        const workflowSlice = {
            process: {
                pid: '123456',
                url: '/test',
                flow: 'superFlow',
                state: 'step1'
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
        store = createMockStore(workflowSlice)

        moxios.install(defaultHttpClient)
    })
    afterEach(() => {
        moxios.uninstall(defaultHttpClient)
    })

    describe('onEnterEvent', () => {
        xit('создает обращение к шлюзу с query: cmd=EVENT, name=on-enter, pid = ... и телом запроса в виде пустого объекта', (done) => {
            moxios.wait(() => {
                const request = moxios.requests.mostRecent()

                request
                    .respondWith({
                        status: 200,
                        response: {
                            success: true,
                            body: {}
                        }
                    })
                    .then(() => {
                        expect(request.config.params).toEqual({
                            cmd: 'EVENT',
                            name: 'on-enter',
                            pid: 'pid'
                        })
                        expect(JSON.parse(request.config.data)).toEqual({})
                        done()
                    })
            })

            onEnterEvent(WF_GATE_URL, 'pid')(store.dispatch, store.getState)
        })
    })
    describe('onReturnEvent', () => {
        // jasmine
        xit('создает обращение к шлюзу с query: cmd=EVENT, name=on-return, pid = ... и телом запроса в виде пустого объекта', (done) => {
            moxios.wait(() => {
                const request = moxios.requests.mostRecent()

                request
                    .respondWith({
                        status: 200,
                        response: {
                            success: true,
                            body: {}
                        }
                    })
                    .then(() => {
                        expect(request.config.params).toEqual({
                            cmd: 'EVENT',
                            name: 'on-return',
                            pid: 'pid'
                        })
                        expect(JSON.parse(request.config.data)).toEqual({})
                        done()
                    })
            })

            onReturnEvent(WF_GATE_URL, 'pid')(store.dispatch, store.getState)
        })
    })
    describe('rollbackHistory', () => {
        xit('создает обращение к шлюзу с query: cmd=ROLLBACK, name=id хлебной крошки, pid = ... и телом запроса в виде пустого объекта', (done) => {
            moxios.wait(() => {
                const request = moxios.requests.mostRecent()

                request
                    .respondWith({
                        status: 200,
                        response: {
                            success: true,
                            body: {}
                        }
                    })
                    .then(() => {
                        expect(request.config.params).toEqual({
                            cmd: 'ROLLBACK',
                            name: 'stepId',
                            pid: '123456'
                        })
                        expect(JSON.parse(request.config.data)).toEqual({})
                        done()
                    })
            })

            rollbackHistory('stepId')(store.dispatch, store.getState)
        })
    })
    describe('start', () => {
        it('диспетчеризует событие WORKFLOW/START_REQUEST, если передан параметр documentId в query', () => {
            const { dispatch, getState, getActions } = store

            const query = {
                documentId: '3424jkj23l4'
            }

            const expected = { type: types.RESUMING_PROCESS, ...query }

            start('SomeFlow', query)(dispatch, getState)

            const actual = _.head(getActions())
            expect(actual).toEqual(expected)
        })

        it('выполняет вызов к API с query и дополнительными параметрами', (done) => {
            const { dispatch, getState } = store

            moxios.withMock(() => {
                const query = {
                    badParameter: 'dawd',
                    srcTemplateId: 'srcTemplateId',
                    templateId: 'templateId',
                    pid: 'abd-asd-asd'
                }

                const additionalParams = {
                    someParam: 'someParam'
                }

                const expected = {
                    document: {
                        someParam: 'someParam'
                    }
                }

                start('SomeFlow', query, additionalParams, {})(
                    dispatch,
                    getState
                )

                moxios.wait(() => {
                    const request = moxios.requests.mostRecent()
                    expect(JSON.parse(request.config.data)).toEqual(expected)
                    done()
                })
            })
        })
    })


    describe('event', () => {
        it('Отправляет событие event с предварительным сабмитом при name=next', () => {
            const { dispatch, getState, getActions } = store
            const expected = ['@@redux-form/START_SUBMIT', '@@redux-form/SUBMIT', types.START_REQUEST]

            event('next')(dispatch, getState)

            const actual = _.map(getActions(), 'type')
            expect(actual).toEqual(expected)
        })

        it('Отправляет событие event без сабмита при name из числа исключений', () => {
            const { dispatch, getState, getActions, clearActions } = store
            const expected = [types.START_REQUEST]

            _.each(['rollback', 'skip', 'exit', 'abort'], (commandName) => {
                event(commandName)(dispatch, getState)
                const actual = _.map(getActions(), 'type')
                expect(actual).toEqual(expected)
                clearActions()
            })
        })
    })

})
