import React from 'react'
import { mount } from 'enzyme'

import { Combobox } from '..'

describe('<Combobox />', () => {
    it('renders', () => {
        function getItems () {
            return Promise.resolve([])
        }

        mount(<Combobox onDataRequest={getItems} a11y={{ optionsLabel: 'Открыть' }} />)
    })

    it('fetches item when changing', () => {
        const getItems = jest.fn()
        const keyboardTimeout = 5
        const wrapper = mount(
            <Combobox
                onDataRequest={getItems}
                mode="on"
                keyboardTimeout={keyboardTimeout}
                a11y={{ optionsLabel: 'Открыть' }}
            />
        )
        const input = wrapper.find('input')
        input.simulate('focus')
        wrapper.update()

        expect(getItems).not.toHaveBeenCalled()
        input.simulate('change', { target: { value: 'world' } })
        setTimeout(() => {
            expect(getItems).toHaveBeenCalled()
            expect(getItems.mock.calls[getItems.mock.calls.length - 1][0].query).toBe('world')
        }, keyboardTimeout)
    })
})
