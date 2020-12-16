import React from 'react'
import { mount, shallow } from 'enzyme'

import { Table } from '..'

describe('<Table.Block />', () => {
    it('is available', () => {
        expect(Table.Block).toBeDefined()
    })

    it('Renders correct', () => {
        const wrapper = mount(<Table.Block>
            <Table.Row>
                <p>{'Компонент сделал...'}</p>
                <p>{'Я'}</p>
            </Table.Row>
        </Table.Block>)

        expect(wrapper.text()).toBe('Компонент сделал...Я')
    })

    it('Renders nothing', () => {
        const wrapper = shallow(<Table.Block />)

        expect(wrapper.type()).toEqual(null)
    })
})
