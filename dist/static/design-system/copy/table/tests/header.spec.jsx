import React from 'react'
import { mount, shallow } from 'enzyme'
import renderer from 'react-test-renderer'

import { Table } from '..'
import { Icon } from '../../icon'

describe('<Table.Header />', () => {
    it('is available', () => {
        expect(Table.Block).toBeDefined()
    })

    it('Renders correct', () => {
        const wrapper = mount(<Table>
            <Table.Header>
                <Table.Title>{'Табличка'}</Table.Title>
            </Table.Header>
        </Table>)

        expect(wrapper.find(Icon.theme.self)).toBeTruthy()
        expect(wrapper.text()).toBe('Табличка')
    })

    it('renders correctly', () => {
        const tree = renderer
            .create(
                <Table>
                    <Table.Header>
                        <Table.Title>{'Табличка'}</Table.Title>
                        <Icon
                            name="icon:core/common/print"
                            size="self"
                        />
                    </Table.Header>
                </Table>
            )
            .toJSON()

        expect(tree).toMatchSnapshot()
    })

    it('Renders nothing', () => {
        const wrapper = shallow(<Table.Header />)

        expect(wrapper.type()).toEqual(null)
    })
})
