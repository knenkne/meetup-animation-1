import moxios from 'moxios'

import { createStore } from '../../tests/utils'
import { axiosWF, request as requestToWorkflowGate } from '../actions/request'
import { update } from '../actions'
import {
    getScreens,
    getStateFinished,
    getMessages,
    getReferences
} from '../selectors/core'

import RESPONSE from './fixtures/response-without-messages.json'
import RESPONSE_END_OUTPUT from './fixtures/response-with-end-and-output.json'
import RESPONSE_END from './fixtures/response-with-end.json'
import RESPONSE_MESSAGES from './fixtures/response-with-messages.json'
import RESPONSE_OUTPUT_MESSAGES from './fixtures/response-with-messages-and-body.json'

// TODO интеграционный тест, переписать на фреймворке для интеграционных тестов
xdescribe('Adapter :: интеграция', () => {
    const WF_GATE_URL = 'http://custom.url'
    let store

    beforeEach(() => {
        store = createStore()
        moxios.install(axiosWF)
    })
    afterEach(() => moxios.uninstall(axiosWF))

    it('обновляем экраны, справочники, мессаджи', (done) => {
        moxios.wait(() => {
            const request = moxios.requests.mostRecent()

            request
                .respondWith({
                    status: 200,
                    response: RESPONSE
                })
                .then(() => {
                    expect(getScreens(store.getState())).toEqual(
                        RESPONSE.body.output.screens
                    )
                    expect(getReferences(store.getState())).toEqual(
                        RESPONSE.body.output.references
                    )
                    expect(getMessages(store.getState())).toEqual([])
                    done()
                })
        })

        requestToWorkflowGate(WF_GATE_URL)(store.dispatch, store.getState)
    })
    it('обновляем экраны на END', (done) => {
        moxios.wait(() => {
            const request = moxios.requests.mostRecent()

            request
                .respondWith({
                    status: 200,
                    response: RESPONSE_END_OUTPUT
                })
                .then(() => {
                    const expected = RESPONSE_END_OUTPUT.body.output.screens
                    const actual = getScreens(store.getState())
                    expect(actual).toEqual(expected)
                    done()
                })
        })

        requestToWorkflowGate(WF_GATE_URL)(store.dispatch, store.getState)
    })
    it('обнуляем существующие экраны на END', (done) => {
        store.dispatch(update(RESPONSE))
        expect(getScreens(store.getState())).toEqual(
            RESPONSE.body.output.screens
        )
        expect(getStateFinished(store.getState())).toBe(false)

        moxios.wait(() => {
            const request = moxios.requests.mostRecent()

            request
                .respondWith({
                    status: 200,
                    response: RESPONSE_END
                })
                .then(() => {
                    expect(getScreens(store.getState())).toEqual([])
                    expect(getReferences(store.getState())).toEqual({})
                    expect(getStateFinished(store.getState())).toBe(true)
                    done()
                })
        })

        requestToWorkflowGate(WF_GATE_URL)(store.dispatch, store.getState)
    })
    it('обновляем messages', (done) => {
        store.dispatch(update(RESPONSE))

        moxios.wait(() => {
            const request = moxios.requests.mostRecent()

            request
                .respondWith({
                    status: 200,
                    response: RESPONSE_MESSAGES
                })
                .then(() => {
                    expect(getMessages(store.getState())).toEqual(
                        RESPONSE_MESSAGES.messages
                    )
                    done()
                })
        })

        requestToWorkflowGate(WF_GATE_URL)(store.dispatch, store.getState)
    })
    it('обновляем скрины и messages', (done) => {
        moxios.wait(() => {
            const request = moxios.requests.mostRecent()

            request
                .respondWith({
                    status: 200,
                    response: RESPONSE_OUTPUT_MESSAGES
                })
                .then(() => {
                    expect(getScreens(store.getState())).toEqual(
                        RESPONSE.body.output.screens
                    )
                    expect(getMessages(store.getState())).toEqual(
                        RESPONSE_OUTPUT_MESSAGES.messages
                    )
                    done()
                })
        })

        requestToWorkflowGate(WF_GATE_URL)(store.dispatch, store.getState)
    })
})
