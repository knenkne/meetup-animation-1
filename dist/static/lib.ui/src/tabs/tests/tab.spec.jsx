import React from 'react'
import { shallow } from 'enzyme'

import { Tabs } from '..'

describe('<Tabs.Tab />', () => {
    it('is available', () => {
        expect(Tabs.Tab).toBeDefined()
    })

    it('renders title as label', () => {
        const wrapper = shallow(<Tabs.Tab title="foo" />)
        expect(wrapper.text()).toBe('foo')
    })

    it('can be forceOpened', () => {
        const wrapper = shallow(<Tabs.Tab title="foo" forceOpened />)
        expect(wrapper.find('span').at(0).hasClass(Tabs.theme.selected)).toBeTruthy()
    })

    // it('can be disabled', () => {
    //     const wrapper = shallow(<Tabs.Tab title="foo" disabled />)
    //     expect(wrapper.hasClass(Tabs.theme.disabled)).toBeTruthy()
    // })

    it('onChange', () => {
        const onChange = jest.fn()
        const preventDefault = jest.fn()
        const wrapper = shallow(<Tabs.Tab onChange={onChange} title="foo" />)

        const event = { preventDefault }
        wrapper.find('button').at(0).simulate('click', event)

        expect(onChange).toHaveBeenCalledWith('foo')
        // expect(preventDefault).toHaveBeenCalled()
    })
})
