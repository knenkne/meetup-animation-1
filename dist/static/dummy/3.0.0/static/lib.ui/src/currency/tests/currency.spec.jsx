import React from 'react'
import { shallow } from 'enzyme'

import { Currency } from '..'

describe('<Currency />', () => {
    describe('без подстановки локалей', () => {
        xit('Print symbol', () => {
            const wrapper = shallow(<Currency title="rub" />)
            expect(wrapper.text()).toBe('₽')
            expect(wrapper.hasClass(Currency.theme.symbol)).toBe(true)
        })
    })

    describe('с подстановками локалей', () => {
        beforeEach(() => {
            Currency.setCurrencyDisplayName('rub', ['рублей', 'рубль', 'рубля'])
        })

        afterEach(() => {
            Currency.setCurrencyDisplayName('rub', void 0)
        })

        it('Print symbol hardly', () => {
            const wrapper = shallow(<Currency title="rub" mode="symbol" />)
            expect(wrapper.text()).toBe('₽')
            expect(wrapper.hasClass(Currency.theme.symbol)).toBe(true)
        })

        it('Print code hardly', () => {
            const wrapper = shallow(<Currency title="rub" mode="code" />)
            expect(wrapper.text()).toBe('rub')
            expect(wrapper.hasClass(Currency.theme.symbol)).toBe(false)
        })

        it('Print word hardly', () => {
            const wrapper = shallow(<Currency title="rub" mode="word" value="1" />)
            expect(wrapper.text()).toBe('рубль')
            expect(wrapper.hasClass(Currency.theme.symbol)).toBe(false)
        })

        it('Currency.setCurrencyDisplayName', () => {
            const wrapper = shallow(<Currency title="rub" value="1" />)
            expect(wrapper.text()).toBe('рубль')
            expect(wrapper.hasClass(Currency.theme.symbol)).toBe(false)

            const wrapper2 = shallow(<Currency title="rub" value="2" />)
            expect(wrapper2.text()).toBe('рубля')
            expect(wrapper.hasClass(Currency.theme.symbol)).toBe(false)
        })

        it('setCurrencyDisplayName only 1', () => {
            Currency.setCurrencyDisplayName('rub', 'руб.')

            const wrapper = shallow(<Currency title="rub" value="2" />)
            expect(wrapper.text()).toBe('руб.')
            expect(wrapper.hasClass(Currency.theme.symbol)).toBe(false)
        })

        it('no symbol', () => {
            const wrapper = shallow(<Currency title="foo" />)
            expect(wrapper.text()).toBe('foo')
            expect(wrapper.hasClass(Currency.theme.symbol)).toBe(false)
        })
    })
})
