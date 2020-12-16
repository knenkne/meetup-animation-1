import React from 'react'
import { mount } from 'enzyme'

import { Text } from '../text'

describe('<Input.Text />', () => {
    it('textarea', () => {
        const wrapper = mount(<Text />)

        expect(wrapper.find('textarea').length).toBe(1)
    })
})
