import React from 'react'
import { mount } from 'enzyme'
import i18next from 'i18next'

import locales from '../../../locales/ru.json'
import { Name } from '../name'
import { Value } from '../value'

describe('<Name/>', () => {
    it('renders name', () => {
        const wrapper = mount(
            <Name content="Текст" />
        )
        expect(wrapper.text()).toBe('Текст')
    })
    it('renders name without special symbols', () => {
        const wrapper = mount(
            <Name content="Visa Gold &#034;Золотой&#034;" />
        )
        expect(wrapper.text()).toBe('Visa Gold "Золотой"')
    })
    it('ignores html tags', () => {
        const wrapper = mount(
            <Name content="<h1>Card</h1>" />
        )
        expect(wrapper.text()).toBe('<h1>Card</h1>')
    })
    it('renders name with child', () => {
        const wrapper = mount(
            <Name><span>{'Текст'}</span></Name>
        )
        expect(wrapper.find('span > span').html()).toBe('<span>Текст</span>')
    })
    it('locale', () => {
        i18next.init({
            lng: 'ru',
            keySeparator: '/',
            resources: {
                ru: {
                    translation: locales
                }
            }
        })
        const wrapper = mount(
            <Name content="card.arrested" isStaticName />
        )
        expect(wrapper.text()).toBe('Средства на счёте арестованы')
    })
})

describe('<Value/>', () => {
    it('renders name', () => {
        const wrapper = mount(
            <Value content="Текст" />
        )
        expect(wrapper.text()).toBe('Текст')
    })
    it('renders name without special symbols', () => {
        const wrapper = mount(
            <Value content="Visa Gold &#034;Золотой&#034;" />
        )
        expect(wrapper.text()).toBe('Visa Gold "Золотой"')
    })
    it('renders name with child', () => {
        const wrapper = mount(
            <Value><span>{'Текст'}</span></Value>
        )
        expect(wrapper.find('span > span').html()).toBe('<span>Текст</span>')
    })
    it('locale', () => {
        i18next.init({
            lng: 'ru',
            keySeparator: '/',
            resources: {
                ru: {
                    translation: locales
                }
            }
        })
        const wrapper = mount(
            <Value content="card.arrested" isStaticName />
        )
        expect(wrapper.text()).toBe('Средства на счёте арестованы')
    })
})
