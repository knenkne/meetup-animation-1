import React from 'react'
import axios from 'axios'
import { mount } from 'enzyme'
import MockAdapter from 'axios-mock-adapter'

import {
    AsyncComponentWithOneRequest,
    AsyncComponentWithTwoRequests
} from '../async-component'
import { multipleRequest } from '../../utils/async-mock'

const fetchData = (cb) => Promise.resolve('Success').then(cb) // асинхронный вызов в вашем компоненте

describe('Тест асинхронности', () => {

    let mock

    beforeEach(() => {
        mock = new MockAdapter(axios)
    })

    test('Получил в ответ "Success"', (done) => { // Внимание на принимаемый callback - done!
        function callback(data) {
            expect(data).toBe('Success')
            done()
        }

        fetchData(callback)
    })

    test('<AsyncComponentWithOneRequest />', async () => {
        const component = mount(
            <AsyncComponentWithOneRequest />
        )

        expect(component).toMatchSnapshot()

        const button = component.find('#getNewName')
        button.simulate('click')

        const responseShow = [
            ['GET', '/getFirstName', {}, 200, { newName: 'John' }]
        ]

        await multipleRequest(mock, responseShow)

        component.update()
        expect(component).toMatchSnapshot()
    })

    test('<AsyncComponentWithTwoRequests />', async () => {

        const component = mount(
            <AsyncComponentWithTwoRequests />
        )

        expect(component).toMatchSnapshot()

        const button = component.find('#getNewPerson')
        button.simulate('click')

        const responseShow = [
            ['GET', '/getFirstName', {}, 200, { firstName: 'John' }],
            ['GET', '/getSecondName', {}, 200, { secondName: 'Konstantin' }]
        ]

        await multipleRequest(mock, responseShow)

        component.update()
        expect(component).toMatchSnapshot()
    })

})
