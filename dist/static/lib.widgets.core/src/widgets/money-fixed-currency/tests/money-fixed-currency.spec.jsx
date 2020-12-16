import React from 'react'
import { shallow, mount } from 'enzyme'
import { Field } from '@sbol/lib.app'
import { Input, Currency } from '@sbol/lib.ui'

import { MoneyFixedCurrency } from '../'
import { MoneyFixedCurrency as MoneyComponent } from '../money-fixed-currency'

describe('<CoreMoneyFixedCurrency />', () => {
    it('CoreMoneyFixedCurrency экспортируется', () => {
        expect(CoreMoneyFixedCurrency).toBeDefined()
    })

    it('Инстанцирует компоненту Field с идентификатором первого поля', () => {
        const props = {
            fields: [
                {
                    id: 'sum:id',
                    title: 'Сумма',
                    type: 'text',
                    value: '',
                    validators: [
                        {
                            type: "minValue",
                            value: "5000",
                            message: "Минимальное значение 5000 руб."
                        },
                        {
                            type: "maxValue",
                            value: "4000000",
                            message: "Максимальное значение 4 000 000 руб."
                        }
                    ]
                }
            ],
            properties: {
                currencyIsoCode: "RUB"
            },
            references: {}
        }

        const wrapper = shallow(<MoneyComponent {...props} />)
        expect(wrapper.find(Field).prop('id')).toBe('sum:id')
    })

    it('Режим ввода целочисленных значений', () => {
        const props = {
            fields: [
                {
                    id: 'sum',
                    title: 'Сумма',
                    type: 'text',
                    value: '',
                    validators: []
                }
            ],
            properties: {
                currencyIsoCode: "RUB",
                formatWithDecimals: false
            },
            references: {}
        }

        const wrapper = shallow(<MoneyComponent {...props} />)
        expect(wrapper.find(Field).prop('allowDecimal')).toBe(false)
        expect(wrapper.find(Field).prop('decimalSymbol')).toBe(',')
    })
    it('Режим ввода дробных значений через разделитель ","', () => {
        const props = {
            fields: [
                {
                    id: 'sum',
                    title: 'Сумма',
                    type: 'text',
                    value: '',
                    validators: []
                }
            ],
            properties: {
                currencyIsoCode: "RUB",
                formatWithDecimals: true
            },
            references: {}
        }

        const wrapper = shallow(<MoneyComponent {...props} />)
        expect(wrapper.find(Field).prop('allowDecimal')).toBe(true)
        expect(wrapper.find(Field).prop('decimalSymbol')).toBe(',')
    })
})
