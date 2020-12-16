import React from 'react'
import { mount } from 'enzyme'

import { Table } from '..'

describe('<Table.Row />', () => {
    it('is available', () => {
        expect(Table.Row).toBeDefined()
    })

    it('Render name and value', () => {
        const wrapper = mount(<Table.Row>
            <p>{'Имя'}</p>
            <p>{'Максим'}</p>
        </Table.Row>)
        expect(wrapper.text()).toBe('ИмяМаксим')
    })

})
