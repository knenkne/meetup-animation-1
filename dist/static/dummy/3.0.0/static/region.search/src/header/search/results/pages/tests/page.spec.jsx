import React from 'react'
import { shallow } from 'enzyme'
import { Link } from '@sbol/lib.ui'

import { PageComponent } from '../page'

describe('Тесты для HOOKS PageComponent:', () => {
    const props = {
        action: 'some name',
        id: 1,
        link: '/PhizIC/private/payments/payment.do?form=InternalPayment',
        type: 'someType',
        category: 'someCategory',
        keyWords: 'key1, key2'
    }
    const mockHandleSetProductsToShow = jest.fn()
    const mockHandleSearchQueryChange = jest.fn()
    const mockHandleSearchResultClick = jest.fn()
    const mockHandleCloseSearchResult = jest.fn()
    const mockPreventDefault = jest.fn()
    const mockClickMetric = jest.fn()

    beforeEach(() => {
        mockHandleSetProductsToShow.mockClear()
        mockHandleSearchQueryChange.mockClear()
        mockHandleSearchResultClick.mockClear()
        mockHandleCloseSearchResult.mockClear()
        mockPreventDefault.mockClear()
        mockClickMetric.mockClear()
    })

    it('Клик по функции, prodListType = false', () => {
        const wrapper = shallow(
            <PageComponent
                item={props}
                handleSetProductsToShow={mockHandleSetProductsToShow}
                handleSearchQueryChange={mockHandleSearchQueryChange}
                handleSearchResultClick={mockHandleSearchResultClick}
                handleCloseSearchResult={mockHandleCloseSearchResult}
                clickMetric={mockClickMetric}
            />
        )

        wrapper.simulate('click', { preventDefault: mockPreventDefault })
        expect(mockHandleSetProductsToShow).toHaveBeenCalledTimes(0)
        expect(mockHandleSearchQueryChange).toHaveBeenCalledTimes(0)
        expect(mockHandleSearchResultClick).toHaveBeenCalledTimes(1)
        expect(mockHandleCloseSearchResult).toHaveBeenCalledTimes(1)
        expect(mockPreventDefault).toHaveBeenCalledTimes(0)
        expect(mockClickMetric).toHaveBeenCalledTimes(1)
    })

    it('Клик по функции, prodListType = true', () => {
        const wrapper = shallow(
            <PageComponent
                item={{
                    ...props,
                    prodListType: true
                }}
                handleSetProductsToShow={mockHandleSetProductsToShow}
                handleSearchQueryChange={mockHandleSearchQueryChange}
                handleSearchResultClick={mockHandleSearchResultClick}
                handleCloseSearchResult={mockHandleCloseSearchResult}
                clickMetric={mockClickMetric}
            />
        )

        wrapper.simulate('click', { preventDefault: mockPreventDefault })
        expect(mockHandleSetProductsToShow).toHaveBeenCalledTimes(1)
        expect(mockHandleSearchQueryChange).toHaveBeenCalledTimes(1)
        expect(mockHandleSearchResultClick).toHaveBeenCalledTimes(1)
        expect(mockHandleCloseSearchResult).toHaveBeenCalledTimes(1)
        expect(mockPreventDefault).toHaveBeenCalledTimes(1)
        expect(mockClickMetric).toHaveBeenCalledTimes(1)
    })

    it('Проверить формирование ссылки (внутренней), начинающейся с PhizIC', () => {
        const wrapper = shallow(
            <PageComponent
                item={{
                    ...props,
                    prodListType: true
                }}
                handleSetProductsToShow={mockHandleSetProductsToShow}
                handleSearchQueryChange={mockHandleSearchQueryChange}
                handleSearchResultClick={mockHandleSearchResultClick}
                handleCloseSearchResult={mockHandleCloseSearchResult}
                clickMetric={mockClickMetric}
            />
        )

        const link = wrapper.find(Link).filterWhere((item) => {
            return item.prop('href')
        })


        expect(link.prop('href')).toBe('/PhizIC/private/payments/payment.do?form=InternalPayment')
    })

    it('Проверить формирование ссылки внутренней', () => {
        const wrapper = shallow(
            <PageComponent
                item={{
                    ...props,
                    prodListType: true
                }}
                handleSetProductsToShow={mockHandleSetProductsToShow}
                handleSearchQueryChange={mockHandleSearchQueryChange}
                handleSearchResultClick={mockHandleSearchResultClick}
                handleCloseSearchResult={mockHandleCloseSearchResult}
                clickMetric={mockClickMetric}
            />
        )

        const link = wrapper.find(Link).filterWhere((item) => {
            return item.prop('href')
        })


        expect(link.prop('href')).toBe('/PhizIC/private/payments/payment.do?form=InternalPayment')
    })

    it('Проверить формирование ссылки внешней', () => {
        const wrapper = shallow(
            <PageComponent
                item={{
                    ...props,
                    link: 'http://some/url',
                    prodListType: true
                }}
                handleSetProductsToShow={mockHandleSetProductsToShow}
                handleSearchQueryChange={mockHandleSearchQueryChange}
                handleSearchResultClick={mockHandleSearchResultClick}
                handleCloseSearchResult={mockHandleCloseSearchResult}
                clickMetric={mockClickMetric}
            />
        )

        const link = wrapper.find(Link).filterWhere((item) => {
            return item.prop('href')
        })


        expect(link.prop('href')).toBe('http://some/url')
    })
})
