import React from 'react'
import { mount } from 'enzyme'

import { Tabs } from '..'

describe('<Tabs />', () => {
    it('is available', () => {
        expect(Tabs).toBeDefined()
    })

    it('changes tab', () => {
        const onChange = jest.fn()

        const wrapper = mount(<Tabs initialValue="1" onChange={onChange}>
            <Tabs.Tab title="1">{'foo'}</Tabs.Tab>
            <Tabs.Tab title="2" disabled>{'bar'}</Tabs.Tab>
            <Tabs.Tab title="3">{'baz'}</Tabs.Tab>
        </Tabs>)

        wrapper.find(Tabs.Tab).at(2).find('button').first()
            .simulate('click')
        expect(wrapper.find(Tabs.Tab).at(2).props().forceOpened).toBeTruthy()
        expect(wrapper.find('[role="tabpanel"]').at(0).text()).toBe('baz')
        // TODO: Доработать тесты под FC
        // expect(onChange).toHaveBeenCalledWith('3')
        // expect(onChange.calls.count()).toBe(1)
    })

    it('doesn\'t change on click on current tab', () => {
        const onChange = jest.fn()

        const wrapper = mount(<Tabs initialValue="1" onChange={onChange}>
            <Tabs.Tab title="1">{'foo'}</Tabs.Tab>
            <Tabs.Tab title="2" disabled>{'bar'}</Tabs.Tab>
            <Tabs.Tab title="3">{'baz'}</Tabs.Tab>
        </Tabs>)

        wrapper.find(Tabs.Tab).at(0).find('button').first()
            .simulate('click')
        expect(wrapper.find(Tabs.Tab).at(0).props().forceOpened).toBeTruthy()
        expect(wrapper.find('[role="tabpanel"]').at(0).text()).toBe('foo')
        expect(onChange.mock.calls.length).toBe(0)
    })

    it('throws color to tab', () => {
        const wrapper = mount(<Tabs defaultValue="1" colorScheme="black">
            <Tabs.Tab title="1">{'foo'}</Tabs.Tab>
            <Tabs.Tab title="2" mode="success">{'bar'}</Tabs.Tab>
        </Tabs>)

        expect(wrapper.find(Tabs.Tab).at(0).prop('colorScheme')).toBe('black')
        expect(wrapper.find(Tabs.Tab).at(1).prop('colorScheme')).toBe('black')


        const wrapper2 = mount(<Tabs defaultValue="1" colorScheme="gold">
            <Tabs.Tab title="1">{'foo'}</Tabs.Tab>
            <Tabs.Tab title="2" mode="success">{'bar'}</Tabs.Tab>
        </Tabs>)

        expect(wrapper2.find(Tabs.Tab).at(0).prop('colorScheme')).toBe('gold')
        expect(wrapper2.find(Tabs.Tab).at(1).prop('colorScheme')).toBe('gold')
    })
})
