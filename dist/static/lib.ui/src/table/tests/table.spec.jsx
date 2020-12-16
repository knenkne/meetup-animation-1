import React from 'react'
import { mount } from 'enzyme'

import { Table } from '..'
import { Icon } from '../../icon'

describe('<Table />', () => {
    it('is available', () => {
        expect(Table).toBeDefined()
    })

    it('Renders correct', () => {

        const wrapper = mount(<Table>
            <Table.Header>
                <Table.Title>{'Табличка'}</Table.Title>
            </Table.Header>
            <Table.Block>
                <Table.Row>
                    <p>{'Здесь может быть любой контент'}</p>
                    <p>
                        <Icon
                            name="icon:core/operations/list"
                            size="self"
                        />
                    </p>
                </Table.Row>
                <Table.Row>
                    <p>{'И здесь тоже'}</p>
                    <p>
                        <Icon
                            name="icon:core/products/mp-master-card"
                            size="self"
                        />
                        <span>{' MasterCard Mass'}</span>
                        <span style={{ color: 'rgba(38, 38, 38, 0.7)' }}>{'••• 1234'}</span>
                    </p>
                </Table.Row>
            </Table.Block>
            <Table.Block>
                <Table.Row>
                    <p>{'Компонент сделал...'}</p>
                    <p>{'Гений'}</p>
                </Table.Row>
            </Table.Block>
        </Table>)

        expect(wrapper.find('h4').at(0).text()).toBe('Табличка')

        expect(wrapper.find(Table.Block).at(0).find(Table.Row).at(0)
            .text()).toBe('Здесь может быть любой контент')


        expect(wrapper.find(Table.Block).at(0).find(Table.Row).at(1)
            .text()).toBe('И здесь тоже MasterCard Mass••• 1234')

        expect(wrapper.find(Table.Block).at(1).text()).toBe('Компонент сделал...Гений')
    })
})
