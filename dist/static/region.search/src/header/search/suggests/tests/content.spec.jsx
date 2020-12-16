import React from 'react'
import { shallow } from 'enzyme'

import { Content } from '../content'

describe('Протестировать функции компонента:', () => {
    it('handleClick', () => {
        const mockOnClick = jest.fn()
        const mockPreventDefault = jest.fn()
        const wrapper = shallow(
            <Content
                suggest={{ value: 'suggest' }}
                onClick={mockOnClick}
            />
        )

        wrapper.simulate('click', { preventDefault: mockPreventDefault })
        expect(mockPreventDefault).toHaveBeenCalledTimes(1)
        expect(mockOnClick).toHaveBeenCalledTimes(1)
        expect(mockOnClick).toHaveBeenCalledWith({ value: 'suggest' })
    })
})
