import React from 'react'
import { shallow } from 'enzyme'

import { ChatComponent } from '../chat'

describe('Тесты для HOOKS ChatComponent:', () => {
    it('Клик по чату', () => {
        const mockHandleOpenChat = jest.fn()
        const mockCloseSearchResult = jest.fn()
        const mockPreventDefault = jest.fn()
        const mockClickMetric = jest.fn()
        const wrapper = shallow(
            <ChatComponent
                item={{ action: 'some name', id: 'not real' }}
                handleOpenChat={mockHandleOpenChat}
                handleCloseSearchResult={mockCloseSearchResult}
                clickMetric={mockClickMetric}
            />
        )

        wrapper.simulate('click', { preventDefault: mockPreventDefault })
        expect(mockPreventDefault).toHaveBeenCalledTimes(1)
        expect(mockHandleOpenChat).toHaveBeenCalledTimes(1)
        expect(mockCloseSearchResult).toHaveBeenCalledTimes(1)
        expect(mockClickMetric).toHaveBeenCalledTimes(1)
    })
})
