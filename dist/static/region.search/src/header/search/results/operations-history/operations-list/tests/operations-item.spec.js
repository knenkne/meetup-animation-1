import React from 'react'
import { shallow } from 'enzyme'

import { OperationsItem } from '../operations-item'

describe('Тестирование методов компонента OperationsItem:', () => {
    const mockClickMetric = jest.fn()
    const mockRepeatClickMetric = jest.fn()
    const mockPreventDefault = jest.fn()
    const mockStopPropagation = jest.fn()
    const mockHandleSearchResultClick = jest.fn()
    const props = {
        operation: {
            id: 1,
            ufsId: '1',
            state: 'state',
            date: {},
            from: 'from',
            to: 'to',
            description: 'description',
            operationAmount: {
                amount: 1,
                currency: {
                    code: 'code',
                    name: 'name'
                }
            },
            isMobilePayment: false,
            copyable: false,
            templatable: false,
            autopayable: false,
            type: 'type',
            invoiceSubscriptionSupported: false,
            invoiceReminderSupported: false,
            form: 'form',
            imageId: {
                staticImage: {
                    url: 'url'
                }
            }
        },
        clickMetric: mockClickMetric,
        repeatClickMetric: mockRepeatClickMetric
    }

    beforeEach(() => {
        mockClickMetric.mockClear()
        mockRepeatClickMetric.mockClear()
        mockPreventDefault.mockClear()
        mockStopPropagation.mockClear()
        mockHandleSearchResultClick.mockClear()
    })

    it('handleOperationClick, title есть', () => {
        const wrapper = shallow(<OperationsItem
            {...props}
        />)
        const instance = wrapper.instance()
        instance.context = mockHandleSearchResultClick

        instance.handleOperationClick({
            preventDefault: mockPreventDefault
        })

        expect(mockClickMetric).toHaveBeenCalledTimes(1)
        expect(mockClickMetric).toHaveBeenCalledWith(props.operation)
        expect(mockHandleSearchResultClick).toHaveBeenCalledTimes(1)
        expect(mockHandleSearchResultClick).toHaveBeenCalledWith('description')
        expect(mockPreventDefault).toHaveBeenCalledTimes(0)
    })

    it('handleOperationClick, title нет', () => {
        const wrapper = shallow(<OperationsItem
            operation={{ ...props.operation, description: null, to: null, from: null }}
            clickMetric={mockClickMetric}
        />)
        const instance = wrapper.instance()
        instance.context = mockHandleSearchResultClick

        instance.handleOperationClick({
            preventDefault: mockPreventDefault
        })

        expect(mockClickMetric).toHaveBeenCalledTimes(1)
        expect(mockClickMetric).toHaveBeenCalledWith({ ...props.operation, description: null, to: null, from: null })
        expect(mockHandleSearchResultClick).toHaveBeenCalledTimes(0)
        expect(mockPreventDefault).toHaveBeenCalledTimes(0)
    })

    it('handleOperationClick, title нет', () => {
        const { description, to, from, ...restProps } = props.operation
        const wrapper = shallow(<OperationsItem
            operation={restProps}
            clickMetric={mockClickMetric}
        />)
        const instance = wrapper.instance()
        instance.context = mockHandleSearchResultClick

        instance.handleOperationClick({
            preventDefault: mockPreventDefault
        })

        expect(mockClickMetric).toHaveBeenCalledTimes(1)
        expect(mockClickMetric).toHaveBeenCalledWith(restProps)
        expect(mockHandleSearchResultClick).toHaveBeenCalledTimes(0)
        expect(mockPreventDefault).toHaveBeenCalledTimes(0)
    })

    it('handleRepeatClick', () => {
        const wrapper = shallow(<OperationsItem
            {...props}
        />)
        const instance = wrapper.instance()

        instance.handleRepeatClick({
            preventDefault: mockPreventDefault,
            stopPropagation: mockStopPropagation
        })

        expect(mockRepeatClickMetric).toHaveBeenCalledTimes(1)
        expect(mockRepeatClickMetric).toHaveBeenCalledWith(props.operation)
        expect(mockStopPropagation).toHaveBeenCalledTimes(1)
        expect(mockPreventDefault).toHaveBeenCalledTimes(0)
    })
})
