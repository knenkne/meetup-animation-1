import React from 'react'
import { shallow } from 'enzyme'
import { Link } from '@sbol/lib.app'

import { ConnectedLink } from '../connected-link'

describe('Тестирование HOOKS компонента ConnectedLink:', () => {
    it('handleClick', () => {
        const mockHandleMetric = jest.fn()
        const mockHandleClose = jest.fn()
        const mockPreventDefault = jest.fn()
        const wrapper = shallow(
            <ConnectedLink
                href="/some/fake/url"
                handleMetric={mockHandleMetric}
                handleClose={mockHandleClose}
            />
        )
        const link = wrapper.find(Link)

        link.simulate('click', { preventDefault: mockPreventDefault })
        expect(mockPreventDefault).toHaveBeenCalledTimes(1)
        expect(mockHandleMetric).toHaveBeenCalledTimes(1)
        expect(mockHandleClose).toHaveBeenCalledTimes(1)
    })
})
