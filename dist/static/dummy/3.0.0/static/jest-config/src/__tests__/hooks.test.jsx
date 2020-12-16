import React from 'react'
import { mount } from 'enzyme'

import { ComponentWithCallback, ComponentWithHook } from '../component-with-hook'

describe('Hook tests', () => {

    test('Callback', () => {
        const callback = jest.fn()
        const component = mount(
            <ComponentWithCallback callback={callback}/>
        )

        expect(component).toMatchSnapshot()

        expect(callback.mock.calls.length).toEqual(1)
    })

    test('Updated props', () => {
        const component = mount(
            <ComponentWithHook hasUpdated={false} />
        )

        expect(component).toMatchSnapshot()

        component.setProps({ hasUpdated: true })
        component.update()

        expect(component).toMatchSnapshot()
    })

})
