import React from 'react'
import { shallow } from 'enzyme'

import { ENTER_KEY_CODE, DISPLAY_SUGGESTS_COUNT } from '../../../constants'

import { Quick } from '..'

describe('Протестировать функции компонента:', () => {
    it('handleClick, ENTER_KEY_CODE:', () => {
        const suggests = [{ value: 'suggest 1' }]
        const mockOnClick = jest.fn()
        const mockPreventDefault = jest.fn()
        const wrapper = shallow(
            <Quick
                suggests={suggests}
                history={[]}
                onClick={mockOnClick}
            />
        )

        const li0 = wrapper.find('li').at(0)

        li0.simulate('keydown', { preventDefault: mockPreventDefault, keyCode: ENTER_KEY_CODE })
        expect(mockPreventDefault).toHaveBeenCalledTimes(0)
        expect(mockOnClick).toHaveBeenCalledTimes(1)
        expect(mockOnClick).toHaveBeenCalledWith({ value: 'suggest 1' })
    })

    it('handleClick, любая клавиша кроме enter:', () => {
        const suggests = [{ value: 'suggest 1' }, { value: 'suggest 2' }, { value: 'suggest 3' }]
        const mockOnClick = jest.fn()
        const mockPreventDefault = jest.fn()
        const wrapper = shallow(
            <Quick
                suggests={suggests}
                history={[]}
                onClick={mockOnClick}
            />
        )

        const li0 = wrapper.find('li').at(1)

        li0.simulate('keydown', { preventDefault: mockPreventDefault, keyCode: 1 })
        expect(mockPreventDefault).toHaveBeenCalledTimes(0)
        expect(mockOnClick).toHaveBeenCalledTimes(0)
    })
})
