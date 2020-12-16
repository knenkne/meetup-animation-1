import React from 'react'
import { shallow } from 'enzyme'
import { Link } from '@sbol/lib.ui'

import { ProductComponent } from '../product'

describe('Тесты для HOOKS Product', () => {

    it('handleProductComponentClick - product', () => {

        const mockClickMetric = jest.fn()
        const mockClickFromPageMetric = jest.fn()
        const mockHandleProductClick = jest.fn()

        const props = {
            product: { title: '1', type: 'card', id: 1, icon: '' },
            productsFromPage: false,
            clickMetric: mockClickMetric,
            clickFromPageMetric: mockClickFromPageMetric,
            handleProductClick: mockHandleProductClick
        }

        const wrapper = shallow(<ProductComponent {...props} />)
        const link = wrapper.find(Link)

        link.simulate('click')

        expect(mockHandleProductClick).toHaveBeenCalledTimes(1)
        expect(mockClickMetric).toHaveBeenCalledTimes(1)
        expect(mockClickFromPageMetric).toHaveBeenCalledTimes(0)

    })

    it('handleProductComponentClick - productFromPage', () => {

        const mockClickMetric = jest.fn()
        const mockClickFromPageMetric = jest.fn()
        const mockHandleProductClick = jest.fn()

        const props = {
            product: { title: '1', type: 'card', id: 1, icon: '' },
            productsFromPage: true,
            clickMetric: mockClickMetric,
            clickFromPageMetric: mockClickFromPageMetric,
            handleProductClick: mockHandleProductClick
        }

        const wrapper = shallow(<ProductComponent {...props} />)
        const link = wrapper.find(Link)

        link.simulate('click')

        expect(mockHandleProductClick).toHaveBeenCalledTimes(1)
        expect(mockClickMetric).toHaveBeenCalledTimes(0)
        expect(mockClickFromPageMetric).toHaveBeenCalledTimes(1)
    })
})
