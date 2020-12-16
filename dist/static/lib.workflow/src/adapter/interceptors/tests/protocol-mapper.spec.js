import moxios from 'moxios'

import { createStore } from '../../../tests/utils'
import {
    request as requestToWorkflowGate
} from '../../actions/request'
import { getScreens } from '../../selectors'
import { defaultHttpClient } from '../../actions/http-client-request'

import RESPONSEv1 from './fixtures/response-with-events.json'
import RESPONSEv2 from './fixtures/response-with-footer.json'

// TODO тест работоспособен, функционал утерян, видимо давно
xdescribe('protocolMapper :', () => {
    const WF_GATE_URL = 'http://custom.url'
    let store

    const state = {
        form: {
            workflow: {
                values: {
                    'flow:id:text': '12345667890',
                    'flow:id:two:decimal': '2,2',
                    'flow:id:two:mask': '+7(913) 222-22-20',
                    'flow:id:two:checkbox': true,
                    'flow:id:two:quantity': '10'
                },
            }
        },
        workflow: {
            process: {
                name: 'superFlow',
                state: 'superFlow'
            }
        }
    }

    beforeEach(() => {
        store = createStore(state)
        moxios.install(defaultHttpClient)
    })
    afterEach(() => moxios.uninstall(defaultHttpClient))

    it('переносит контейнер events в виджет', (done) => {
        moxios.wait(() => {
            const request = moxios.requests.mostRecent()

            request
                .respondWith({
                    status: 200,
                    response: RESPONSEv1
                })
                .then(() => {
                    const actual = getScreens(store.getState())
                    expect(actual).toEqual(RESPONSEv2.body.output.screens)

                    done()
                })
        })

        requestToWorkflowGate(WF_GATE_URL)(store.dispatch, store.getState)
    })
})
