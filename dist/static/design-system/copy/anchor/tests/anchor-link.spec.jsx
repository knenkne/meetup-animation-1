import React from 'react'
import { shallow } from 'enzyme'

import { Tabs } from '../../tabs'
import { Anchor } from '..'

describe('<Anchor.Link />', () => {
    it('is available', () => {
        expect(Anchor.Link).toBeDefined()
    })

    it('renders title as label', () => {
        const wrapper = shallow(<Anchor.Link title="foo" />)
        expect(wrapper.text()).toBe('foo')
    })

    it('can be forceOpened', () => {
        const wrapper = shallow(<Anchor.Link title="foo" forceOpened />)
        expect(wrapper.find('span').at(0).hasClass(Tabs.theme.selected)).toBeTruthy()
    })

    it('onChange', () => {
        const onChange = jest.fn()
        const preventDefault = jest.fn()
        const wrapper = shallow(<Anchor.Link onChange={onChange} title="foo" />)
        const event = { preventDefault }
        wrapper.find('button').at(0).simulate('click', event)

        expect(onChange).toHaveBeenCalledWith('foo')
    })
})
