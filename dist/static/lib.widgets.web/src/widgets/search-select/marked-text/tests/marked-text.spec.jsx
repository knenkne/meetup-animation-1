import React from 'react'
import { shallow } from 'enzyme'

import { MarkedText } from '../'

describe('Component <MarkedText />', () => {
    it('существует', () => {
        expect(MarkedText).toBeDefined()
        expect(MarkedText.theme).toBeDefined()
    })

    it('не рендерится, если нет text', () => {
        const wrapper = shallow(<MarkedText searchString="foo" />)

        expect(wrapper.find('span').length).toBe(0)
    })

    it('просто span, если searchString пуст', () => {
        const wrapper = shallow(<MarkedText text="foobarbaz" searchString="" />)

        expect(wrapper.find('span').first().props().dangerouslySetInnerHTML.__html).toBe('foobarbaz')
    })

    it('применяет dangerouslySetInnerHTML', () => {
        const wrapper = shallow(<MarkedText text="foobarbaz" searchString="bar" />)

        expect(wrapper.find('span').first().props().dangerouslySetInnerHTML.__html)
            .toBe(`foo<span class="${MarkedText.theme.marked}">bar</span>baz`)
    })
})
