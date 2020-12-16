import React from 'react'
import { shallow } from 'enzyme'
import { Currency } from '@sbol/lib.ui/core/currency'

import { FormattedMoneyValue } from '../formatted-money-value'
import { CurrencyValue } from '../currency-value'

describe('<FormattedMoneyValue/>', () => {
    it('renders name', () => {
        const wrapper = shallow(
            <FormattedMoneyValue amount="100000.6" />
        )
        expect(wrapper.text()).toBe('100 000,6')
    })
})

describe('<CurrencyValue/>', () => {
    it('renders name', () => {
        const wrapper = shallow(
            <CurrencyValue sum={{ amount: '100000.6', currency: 'RUB' }} />
        )
        expect(wrapper.find(FormattedMoneyValue).dive().text()).toBe('100 000,6')
        expect(wrapper.find(Currency).dive().text()).toBe('₽')
    })

    it('Скрывает копейки', () => {
        const wrapper = shallow(
            <CurrencyValue sum={{ amount: '100000.00', currency: 'RUB' }} />
        )
        expect(wrapper.find(FormattedMoneyValue).dive().text()).toBe('100 000')
        expect(wrapper.find(Currency).dive().text()).toBe('₽')
    })
})
