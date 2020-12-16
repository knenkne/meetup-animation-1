import React from 'react'
import { shallow } from 'enzyme'

import { Slider, AdaptiveNumeric } from '../slider'
import { BaseSlider } from '../base-slider'

xdescribe('<Slider />', () => {
    it('is available', () => {
        expect(Slider).toBeDefined()
    })

    it('tab-index for active', () => {
        const wrapper = shallow(<Slider value="1" title="test" tabIndex={0} />)

        expect(wrapper.children().first().prop('tabIndex')).toBeUndefined()
        expect(wrapper.find(AdaptiveNumeric).first().prop('tabIndex')).toBe(0)
        expect(wrapper.find(BaseSlider).first().prop('tabIndex')).toBe(0)
    })

    it('transition дает определенные стили на плавный переход', () => {
        const wrapper = shallow(<Slider value="1" title="test" tabIndex={0} transitionDuration={0.5} />)
        expect(wrapper.find(AdaptiveNumeric).first().prop('style').transition.indexOf('left 0.5s linear')).toBeGreaterThan(-1)
    })

    describe('mode', () => {
        it('basic', () => {
            const wrapper = shallow(<Slider disabled value="1" title="test" mode="basic" />)

            expect(wrapper.find('[data-unit="slider:min"]').length).toBe(1)
            expect(wrapper.find('[data-unit="slider:max"]').length).toBe(1)
            expect(wrapper.hasClass(Slider.theme.basic)).toBeTruthy()
            expect(wrapper.hasClass(Slider.theme.input)).toBeFalsy()
            expect(wrapper.find(BaseSlider).props().mode).toBeUndefined()
        })
        it('input', () => {
            const wrapper = shallow(<Slider disabled value="1" title="test" mode="input" />)

            expect(wrapper.find('[data-unit="slider:min"]').length).toBe(0)
            expect(wrapper.find('[data-unit="slider:max"]').length).toBe(0)
            expect(wrapper.hasClass(Slider.theme.basic)).toBeFalsy()
            expect(wrapper.hasClass(Slider.theme.input)).toBeTruthy()
            expect(wrapper.find(BaseSlider).props().mode).toBeUndefined()
        })
        it('basic:segmented', () => {
            const wrapper = shallow(<Slider disabled value="1" title="test" mode="basic:segmented" />)

            expect(wrapper.find('[data-unit="slider:min"]').length).toBe(1)
            expect(wrapper.find('[data-unit="slider:max"]').length).toBe(1)
            expect(wrapper.hasClass(Slider.theme.basic)).toBeTruthy()
            expect(wrapper.hasClass(Slider.theme.input)).toBeFalsy()
            expect(wrapper.find(BaseSlider).props().mode).toBe('segmented')
        })
        it('input:segmented', () => {
            const wrapper = shallow(<Slider disabled value="1" title="test" mode="input:segmented" />)

            expect(wrapper.find('[data-unit="slider:min"]').length).toBe(0)
            expect(wrapper.find('[data-unit="slider:max"]').length).toBe(0)
            expect(wrapper.hasClass(Slider.theme.basic)).toBeFalsy()
            expect(wrapper.hasClass(Slider.theme.input)).toBeTruthy()
            expect(wrapper.find(BaseSlider).props().mode).toBe('segmented')
        })
    })
})
