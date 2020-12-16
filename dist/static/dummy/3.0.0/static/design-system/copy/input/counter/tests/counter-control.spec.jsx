import React from 'react'
import { shallow } from 'enzyme'

import { CounterControl } from '../counter-control'
import { Input } from '../..'
// import { Icon } from '../../icon'

xdescribe('<CounterControl />', () => {
    it('exists', () => {
        expect(CounterControl).toBeDefined()
    })

    describe('renders correct button', () => {
        it('decrease', () => {
            const wrapper = shallow(<CounterControl mode="decrease" />)
            expect(wrapper.hasClass(Input.Counter.theme.counterLeft)).toBeTruthy()
            // expect(wrapper.find(Icon).props().name).toBe('minus')
            expect(wrapper.find('[data-unit="input:counter:control:decrease"]').length).toBe(1)
        })
        it('increase', () => {
            const wrapper = shallow(<CounterControl mode="increase" />)
            expect(wrapper.hasClass(Input.Counter.theme.counterRight)).toBeTruthy()
            // expect(wrapper.find(Icon).props().name).toBe('plus')
            expect(wrapper.find('[data-unit="input:counter:control:increase"]').length).toBe(1)
        })
    })
})
