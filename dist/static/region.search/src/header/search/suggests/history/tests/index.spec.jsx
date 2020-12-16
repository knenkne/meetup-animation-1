import React from 'react'
import { shallow } from 'enzyme'

import { ENTER_KEY_CODE } from '../../../constants'

import { History } from '..'

describe('Протестировать функции компонента:', () => {
    it('handleClick, ENTER_KEY_CODE:', () => {
        const suggests = [{ value: 'history 1' }, { value: 'history 2' }, { value: 'history 3' }]
        const mockOnClick = jest.fn()
        const mockPreventDefault = jest.fn()
        const wrapper = shallow(
            <History
                history={suggests}
                onClick={mockOnClick}
            />
        )

        const li0 = wrapper.find('li').at(0)

        li0.simulate('keydown', { preventDefault: mockPreventDefault, keyCode: ENTER_KEY_CODE })
        expect(mockPreventDefault).toHaveBeenCalledTimes(0)
        expect(mockOnClick).toHaveBeenCalledTimes(1)
        expect(mockOnClick).toHaveBeenCalledWith({ value: 'history 1' })
    })

    it('handleClick, любая клавиша кроме enter:', () => {
        const suggests = [{ value: 'history 1' }, { value: 'history 2' }, { value: 'history 3' }]
        const mockOnClick = jest.fn()
        const mockPreventDefault = jest.fn()
        const wrapper = shallow(
            <History
                history={suggests}
                onClick={mockOnClick}
            />
        )

        const li1 = wrapper.find('li').at(1)

        li1.simulate('keydown', { preventDefault: mockPreventDefault, keyCode: 1 })
        expect(mockPreventDefault).toHaveBeenCalledTimes(0)
        expect(mockOnClick).toHaveBeenCalledTimes(0)
    })
})
