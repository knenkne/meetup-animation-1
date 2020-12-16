/* eslint-disable no-global-assign, comment: эмулируем управление view */
import React from 'react'
import { shallow, mount } from 'enzyme'

import { BaseSlider } from '../base-slider'
import { Slider } from '../slider'
import { Segments } from '../segments'

xdescribe('<Slider /> -> <BaseSlider />', () => {
    it('is available', () => {
        expect(BaseSlider).toBeDefined()
    })

    it('render Segments', () => {
        const wrapper = shallow(<BaseSlider value="0" mode="segmented" />)
        expect(wrapper.find(Segments).length).toBe(1)

        wrapper.setProps({ mode: void 0 })
        expect(wrapper.find(Segments).length).toBe(0)
    })

    it('transition дает определенные стили на плавный переход', () => {
        const wrapper = shallow(<BaseSlider value="1" transitionDuration={0.5} />)
        expect(wrapper.find(`.${Slider.theme.sliderBaseProgress}`).first().prop('style').transition.indexOf('width 0.5s linear')).toBeGreaterThan(-1)
        expect(wrapper.find(`.${Slider.theme.sliderBaseThumb}`).first().prop('style').transition.indexOf('left 0.5s linear')).toBeGreaterThan(-1)
    })

    describe('onMouseDown', () => {
        it('normal', () => {
            const addSliderHandlers = jest.fn()
            const onChange = jest.fn()

            const wrapper = mount(<BaseSlider value="100" onChange={onChange} addSliderHandlers={addSliderHandlers} />)

            // set DOM values to track
            wrapper.instance().track = { clientLeft: 50, getBoundingClientRect: () => ({ left: 50 }), clientWidth: 200 }
            // set pageXOffset
            pageXOffset = 0

            wrapper.find('[data-unit="slider:track"]').simulate('mousedown', { pageX: 0 })

            const handleMouseMoveMethod = wrapper.instance().handleMouseMove
            const handleMouseUpMethod = wrapper.instance().handleMouseUp

            expect(addSliderHandlers).toHaveBeenCalledWith(document, handleMouseMoveMethod, handleMouseUpMethod)
            expect(onChange.mock.calls[onChange.mock.calls.length - 1][0]).toBe('0')
            expect(onChange.mock.calls[onChange.mock.calls.length - 1][1].target).toBeDefined()
            wrapper.setProps({ value: '0' })

            wrapper.find('[data-unit="slider:track"]').simulate('mousedown', { pageX: 0 })
            expect(onChange.mock.calls.length).toBe(1)
        })

        it('disabled', () => {
            const addSliderHandlers = jest.fn()
            const onChange = jest.fn()

            const wrapper = mount(<BaseSlider disabled value="100" onChange={onChange} addSliderHandlers={addSliderHandlers} />)
            wrapper.find('[data-unit="slider:track"]').simulate('mousedown', { pageX: 0 })

            expect(addSliderHandlers).not.toHaveBeenCalled()
            expect(onChange).not.toHaveBeenCalled()
        })
    })

    it('onMouseMove', () => {
        const onChange = jest.fn()
        const preventDefault = jest.fn()
        const wrapper = shallow(<BaseSlider value="100" onChange={onChange} />)


        // set DOM values to track
        wrapper.instance().track = { clientLeft: 50, getBoundingClientRect: () => ({ left: 50 }), clientWidth: 200 }
        // set pageXOffset
        pageXOffset = 0

        wrapper.instance().handleMouseMove({ preventDefault, pageX: 0, target: 'someTarget' })

        expect(onChange.mock.calls[onChange.mock.calls.length - 1][0]).toBe('0')
        expect(onChange.mock.calls[onChange.mock.calls.length - 1][1].target).toBeDefined()
        expect(preventDefault).toHaveBeenCalled()
    })

    it('onMouseUp', () => {
        const onChange = jest.fn()
        const removeSliderHandlers = jest.fn()
        const wrapper = shallow(<BaseSlider value="100" onChange={onChange} removeSliderHandlers={removeSliderHandlers} />)

        const instance = wrapper.instance()

        // set DOM values to track
        instance.track = { clientLeft: 50, getBoundingClientRect: () => ({ left: 50 }), clientWidth: 200 }
        // set pageXOffset
        pageXOffset = 0

        instance.handleMouseUp({ pageX: 0, target: 'someTarget' })

        const handleMouseMoveMethod = instance.handleMouseMove
        const handleMouseUpMethod = instance.handleMouseUp

        expect(onChange.mock.calls[onChange.mock.calls.length - 1][0]).toBe('0')
        expect(onChange.mock.calls[onChange.mock.calls.length - 1][1].target).toBeDefined()
        expect(removeSliderHandlers).toHaveBeenCalledWith(document, handleMouseMoveMethod, handleMouseUpMethod)
    })

    it('normal mouse flow', () => {
        const onChange = jest.fn()
        const preventDefault = jest.fn()
        const wrapper = mount(<BaseSlider value="50" step={1} min={0} max={100} onChange={onChange} />)

        // set DOM values to track
        wrapper.instance().track = { clientLeft: 50, getBoundingClientRect: () => ({ left: 50 }), clientWidth: 200 }
        // set pageXOffset
        pageXOffset = 0

        wrapper.find('[data-unit="slider:track"]').simulate('mousedown', { pageX: 0 })
        wrapper.instance().handleMouseMove({ preventDefault, pageX: 100 })
        // cause out of range (values: 0, 100, 100)
        wrapper.instance().handleMouseUp({ pageX: 200 })

        expect(onChange.mock.calls.length).toBe(2)
    })

    describe('onKeyDown', () => {
        it('normal', () => {
            const onChange = jest.fn()
            const preventDefault = jest.fn()
            const wrapper = shallow(<BaseSlider value="50" step={1} min={0} max={100} onChange={onChange} />)
            wrapper.find('[data-unit="slider:track"]').simulate('keydown', { preventDefault, keyCode: 39, target: 'someTarget' /* -> */ })
            expect(onChange.mock.calls[onChange.mock.calls.length - 1][0]).toBe('51')
            expect(onChange.mock.calls[onChange.mock.calls.length - 1][1].target).toBeDefined()
            expect(preventDefault).toHaveBeenCalled()
        })
        it('no changes', () => {
            const onChange = jest.fn()
            const preventDefault = jest.fn()
            const wrapper = shallow(<BaseSlider value="100" step={1} min={0} max={100} onChange={onChange} />)
            wrapper.find('[data-unit="slider:track"]').simulate('keydown', { preventDefault, keyCode: 39 /* -> */ })
            expect(onChange).not.toHaveBeenCalled()
            expect(preventDefault).toHaveBeenCalled()
        })
        it('disabled', () => {
            const onChange = jest.fn()
            const wrapper = shallow(<BaseSlider disabled value="50" step={1} min={0} max={100} onChange={onChange} />)
            wrapper.find('[data-unit="slider:track"]').simulate('keydown', { keyCode: 39 /* -> */ })
            expect(onChange).not.toHaveBeenCalled()
        })
    })

    it('error', () => {
        const error = shallow(<BaseSlider value="50" error="error" />)
        expect(error.hasClass(Slider.theme.error)).toBeTruthy()
        const noError = shallow(<BaseSlider value="50" />)
        expect(noError.hasClass(Slider.theme.error)).toBeFalsy()
    })

    it('unmount', () => {
        const removeSliderHandlers = jest.fn()
        const wrapper = shallow(<BaseSlider value="100" removeSliderHandlers={removeSliderHandlers} />)

        const handleMouseMoveMethod = wrapper.instance().handleMouseMove
        const handleMouseUpMethod = wrapper.instance().handleMouseUp

        wrapper.unmount()

        expect(removeSliderHandlers).toHaveBeenCalledWith(document, handleMouseMoveMethod, handleMouseUpMethod)
    })
})
