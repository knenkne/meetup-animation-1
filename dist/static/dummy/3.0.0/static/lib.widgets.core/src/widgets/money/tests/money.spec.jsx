import React from 'react'
import { shallow } from 'enzyme'
import { Field } from '@sbol/lib.app'
import { Input } from '@sbol/lib.ui'

import { Money } from '../money'
import MoneyWidget from '../money'

describe('<Money />', () => {
    it('Export Money is correct', () => {
        expect(Money).toBeDefined()
        expect(MoneyWidget).toBeDefined()
    })

    const defaultProps = {
        title: 'RUB',
        fields: [{
            id: 'currency',
            referenceId: 'currencies',
            title: 'Выбор валюты',
            type: 'text',
            validators: [],
            value: 'RUB'
        },
        {
            id: 'sum',
            referenceId: '',
            title: 'Сумма',
            type: 'text',
            validators: [],
            value: ''
        }],
        properties: {},
        references: {
            currencies: {
                properties: {},
                items: [
                    {
                        value: 'RUB',
                        title: 'rub'
                    },
                    {
                        value: 'USD',
                        title: 'usd'
                    },
                    {
                        value: 'EUR',
                        title: 'eur'
                    },
                    {
                        value: 'BTC',
                        title: ''
                    }
                ]
            }
        }
    }

    it('Renders two fields', () => {
        const wrapper = shallow(<Money {...defaultProps} />)
        expect(wrapper.find(Field).length).toBe(2)
    })

    it('Map all options', () => {
        const wrapper = shallow(<Money {...defaultProps} />)
        expect(wrapper.find(Input.CurrencySelect.Option).length).toBe(4)
    })

    it('Title of select to his tooltip hint', () => {
        const wrapper = shallow(<Money {...defaultProps} />)
        expect(wrapper.find(Field).last().props().translations.hint).toBe(defaultProps.fields[0].title)
    })

})
