import React from 'react'
import { shallow } from 'enzyme'

import { Password } from '..'

describe('<Password />', () => {
    it('handleOpenEye open', () => {
        const wrapper = shallow(<Password mode="showOnEmpty" />)
        wrapper.find('Eye').props().onOpen()
        expect(wrapper.state().showPassword).toBe(true)
    })

    it('handleCloseEye close', () => {
        const wrapper = shallow(<Password mode="showOnEmpty" />)
        wrapper.find('Eye').props().onClose()
        expect(wrapper.state().showPassword).toBe(false)
    })
})
