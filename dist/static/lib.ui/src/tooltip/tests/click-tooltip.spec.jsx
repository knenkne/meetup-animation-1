import React from 'react'
import { mount } from 'enzyme'

import { Tooltip } from '..'
import { Perimeter } from '../../perimeter'

describe('<Tooltip.Click />', () => {
    it('is available', () => {
        expect(Tooltip.Click).toBeDefined()
    })

    xit('renders tooltip text after click and hides it after clicking once again', () => {
        const wrapper = mount(
            <Tooltip.Click>
                <span>{'слово'}</span>
                <Tooltip.Tip mode="error">
                    {'Тестовый текст'}
                </Tooltip.Tip>
            </Tooltip.Click>
        )

        expect(wrapper.find('[data-unit="tooltip:bubble:error"]').hasClass(Tooltip.theme.show)).toBeFalsy()

        wrapper.find('[data-unit="tooltip:title"]').children().simulate('click')
        expect(wrapper.find('[data-unit="tooltip:bubble:error"]').hasClass(Tooltip.theme.show)).toBeTruthy()

        wrapper.find('[data-unit="tooltip:title"]').children().simulate('click')
        expect(wrapper.find('[data-unit="tooltip:bubble:error"]').hasClass(Tooltip.theme.show)).toBeFalsy()

        wrapper.find('[data-unit="tooltip:title"]').children().simulate('click')
        expect(wrapper.find('[data-unit="tooltip:bubble:error"]').hasClass(Tooltip.theme.show)).toBeTruthy()

        wrapper.find(Perimeter).props().onClickOutside('event')
        // Вызов пропов отвязывает события энзима от событий компонента (в 3 энзиме стало важным соблюдать контекст)
        wrapper.setState({ isOpened: wrapper.state('isOpened') })
        expect(wrapper.find('[data-unit="tooltip:bubble:error"]').hasClass(Tooltip.theme.show)).toBeFalsy()
    })

    it('call onShow and onHide handlers', () => {
        const onShowSpy = jest.fn()
        const onHideSpy = jest.fn()

        const wrapper = mount(
            <div>
                <span>{'В начале было '}</span>
                <Tooltip.Click
                    onOpen={onShowSpy}
                    onClose={onHideSpy}
                >
                    <span>{'слово'}</span>
                    <Tooltip.Tip>
                        <span className="test">
                            {'Тестовый текст'}
                        </span>
                    </Tooltip.Tip>
                </Tooltip.Click>
                <span>{' Тест'}</span>
            </div>
        )
        expect(onShowSpy).not.toHaveBeenCalled()
        expect(onHideSpy).not.toHaveBeenCalled()

        wrapper.find('[data-unit="tooltip:title"]').children().simulate('click')
        expect(onShowSpy).toHaveBeenCalled()

        wrapper.find('[data-unit="tooltip:title"]').children().simulate('click')
        expect(onHideSpy).toHaveBeenCalled()

        wrapper.find('[data-unit="tooltip:title"]').children().simulate('click')

        wrapper.find(Perimeter).props().onClickOutside('event')
        expect(onHideSpy.mock.calls.length).toBe(2)
        expect(onHideSpy.mock.calls[1][0]).toBe('event')
    })
})
