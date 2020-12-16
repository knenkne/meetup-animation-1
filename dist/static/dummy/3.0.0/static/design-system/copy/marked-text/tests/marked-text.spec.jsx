import React from 'react'
import { shallow } from 'enzyme'

import { MarkedText } from '..'

describe('Component <MarkedText />', () => {
    it('существует', () => {
        expect(MarkedText).toBeDefined()
        expect(MarkedText.theme).toBeDefined()
    })

    it('не рендерится, если нет value', () => {
        const wrapper = shallow(<MarkedText value="foo" />)

        expect(wrapper.find('span').length).toBe(0)
    })

    it('просто span, если value пуст', () => {
        const wrapper = shallow(<MarkedText title="foobarbaz" value="" />)

        expect(wrapper.find('span').length).toBe(1)
        expect(wrapper.find('span').first().text()).toBe('foobarbaz')
    })

    it('применяет dangerouslySetInnerHTML', () => {
        const wrapper = shallow(<MarkedText title="foobarbaz" value="bar" />)

        expect(wrapper.find('span').length).toBe(2)
        expect(wrapper.find('span').first().text()).toBe('foobarbaz')
        expect(wrapper.find('span').last().hasClass(MarkedText.theme.marked)).toBe(true)
    })
})
