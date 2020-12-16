import React from 'react'
import { shallow } from 'enzyme'
import thunk from 'redux-thunk'
import configureStore from 'redux-mock-store'
import _ from 'lodash'

import { withDefaultHandlers } from '../with-default-handlers'

describe('Adapter :: utils :: HOC :: withDefaultHandlers', () => {
    describe('Создаёт  компоненту с prop eventActions, состоящим из', () => {
        let store = null

        beforeEach(() => {
            const middlewares = [thunk]
            const mockStore = configureStore(middlewares)
            store = mockStore({})
        })

        it('event, rollback, exit и abort', () => {

            const SomeComponent = () => <div />
            const WithHandlers = withDefaultHandlers(SomeComponent)

            const wrapper = shallow(<WithHandlers store={store} />)

            const componentWrapper = wrapper.find(SomeComponent)

            const actual = _.keys(componentWrapper.props().eventsActions)
            const expected = ['event', 'rollback', 'exit', 'abort']

            expect(actual).toEqual(expected)
        })
    })
})
