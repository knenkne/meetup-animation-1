import React from 'react'
import { shallow } from 'enzyme'

import { Tooltip } from '..'

const tipIsVisible = (wrapper) => wrapper.dive().find(Tooltip.Tip).dive().hasClass(Tooltip.theme.show)

describe('<Tooltip.Hover />', () => {
    it('is available', () => {
        expect(Tooltip.Hover).toBeDefined()
    })

    xit('renders tooltip text after focus and hides it after blur once again', () => {
        const wrapper = shallow(
            <Tooltip.Hover>
                <span>{'слово'}</span>
                <Tooltip.Tip mode="error">
                    {'Тестовый текст'}
                </Tooltip.Tip>
            </Tooltip.Hover>
        )
        expect(tipIsVisible(wrapper)).toBeFalsy()

        wrapper.prop('onFocus')()
        expect(tipIsVisible(wrapper)).toBeTruthy()

        wrapper.prop('onBlur')()
        expect(tipIsVisible(wrapper)).toBeFalsy()

        wrapper.prop('onFocus')()
        expect(tipIsVisible(wrapper)).toBeTruthy()
    })

    it('renders tooltip text always if forceOpened', () => {
        const wrapper = shallow(
            <Tooltip.Hover forceOpened>
                <span>{'слово'}</span>
                <Tooltip.Tip mode="error">
                    {'Тестовый текст'}
                </Tooltip.Tip>
            </Tooltip.Hover>
        )
        expect(tipIsVisible(wrapper)).toBeTruthy()

        wrapper.prop('onFocus')()
        expect(tipIsVisible(wrapper)).toBeTruthy()

        wrapper.prop('onBlur')()
        expect(tipIsVisible(wrapper)).toBeTruthy()
    })

    it('call onShow and onHide handlers', () => {
        const onShowSpy = jest.fn()
        const onHideSpy = jest.fn()

        const wrapper = shallow(
            <Tooltip.Hover
                onOpen={onShowSpy}
                onClose={onHideSpy}
            >
                <span>{'слово'}</span>
                <Tooltip.Tip>
                    <span className="test">
                        {'Тестовый текст'}
                    </span>
                </Tooltip.Tip>
            </Tooltip.Hover>
        )
        expect(onShowSpy).not.toHaveBeenCalled()
        expect(onHideSpy).not.toHaveBeenCalled()

        wrapper.prop('onFocus')()
        expect(onShowSpy).toHaveBeenCalled()

        wrapper.prop('onBlur')()
        expect(onHideSpy).toHaveBeenCalled()
    })
})
