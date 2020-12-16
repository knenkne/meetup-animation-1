import React from 'react'
import { shallow } from 'enzyme'
import { Collapse } from 'react-collapse'

import { Item } from '../item'
import style from '../style.css'

describe('<Accordion.Item />', () => {
    it('Может быть раскрыт', () => {
        const wrapper = shallow(<Item title="Заголовок">
            {'foo bar baz'}
        </Item>)

        expect(wrapper.hasClass(style.active)).toBe(false)
        expect(wrapper.find(Collapse).props().isOpened).toBe(false)

        wrapper.setProps({
            forceOpened: true
        })

        expect(wrapper.hasClass(style.active)).toBe(true)
        expect(wrapper.find(Collapse).props().isOpened).toBe(true)
    })
})
