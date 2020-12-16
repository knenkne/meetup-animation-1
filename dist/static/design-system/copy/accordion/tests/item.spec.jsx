import React from 'react'
import { shallow } from 'enzyme'
import { Collapse } from 'react-collapse'

import { Item } from '../item'

describe('<Accordion.Item />', () => {
    it('Может быть раскрыт', () => {
        const wrapper = shallow(<Item title="Заголовок">
            {'foo bar baz'}
        </Item>)

        expect(wrapper.find(Collapse).props().isOpened).toBe(false)

        wrapper.setProps({
            forceOpened: true
        })

        expect(wrapper.find(Collapse).props().isOpened).toBe(true)
    })
})
