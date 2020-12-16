import React from 'react'
import { shallow } from 'enzyme'

import { Currency } from '../../../currency'
import { Input } from '../..'

xdescribe('<Input.CurrencySelect.Option />', () => {
    it('icon', () => {
        const wrapper = shallow(<Input.CurrencySelect.Option value="rub" />)

        expect(wrapper.find(Currency).length).toBe(1)
        wrapper.setProps({ value: 'foo' })
        expect(wrapper.find(Currency).length).toBe(0)
    })
})
