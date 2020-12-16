import React from 'react'
import { shallow } from 'enzyme'

import { Tooltip } from '..'

describe('<Tooltip.Tip />', () => {
    it('is available', () => {
        expect(Tooltip.Tip).toBeDefined()
    })

    it('renders children', () => {
        const wrapper = shallow(<Tooltip.Tip>{'Тестовый текст'}</Tooltip.Tip>)
        expect(wrapper.text()).toBe('Тестовый текст')
    })

    describe('renders different directions', () => {
        it('renders topLeft direction', () => {
            const wrapper = shallow(<Tooltip.Tip direction="topLeft">{'Тестовый текст'}</Tooltip.Tip>)
            expect(wrapper.hasClass(Tooltip.theme.top)).toBeTruthy()
            expect(wrapper.hasClass(Tooltip.theme.left)).toBeTruthy()
        })
        it('renders topCenter direction', () => {
            const wrapper = shallow(<Tooltip.Tip direction="topCenter">{'Тестовый текст'}</Tooltip.Tip>)
            expect(wrapper.hasClass(Tooltip.theme.top)).toBeTruthy()
            expect(wrapper.hasClass(Tooltip.theme.center)).toBeTruthy()
        })
        it('renders topRight direction', () => {
            const wrapper = shallow(<Tooltip.Tip direction="topRight">{'Тестовый текст'}</Tooltip.Tip>)
            expect(wrapper.hasClass(Tooltip.theme.top)).toBeTruthy()
            expect(wrapper.hasClass(Tooltip.theme.right)).toBeTruthy()
        })
        it('renders bottomLeft direction', () => {
            const wrapper = shallow(<Tooltip.Tip direction="bottomLeft">{'Тестовый текст'}</Tooltip.Tip>)
            expect(wrapper.hasClass(Tooltip.theme.bottom)).toBeTruthy()
            expect(wrapper.hasClass(Tooltip.theme.left)).toBeTruthy()
        })
        it('renders bottomCenter direction', () => {
            const wrapper = shallow(<Tooltip.Tip direction="bottomCenter">{'Тестовый текст'}</Tooltip.Tip>)
            expect(wrapper.hasClass(Tooltip.theme.bottom)).toBeTruthy()
            expect(wrapper.hasClass(Tooltip.theme.center)).toBeTruthy()
        })
        it('renders bottomRight direction', () => {
            const wrapper = shallow(<Tooltip.Tip direction="bottomRight">{'Тестовый текст'}</Tooltip.Tip>)
            expect(wrapper.hasClass(Tooltip.theme.bottom)).toBeTruthy()
            expect(wrapper.hasClass(Tooltip.theme.right)).toBeTruthy()
        })
    })

    describe('renders different modes', () => {
        it('renders error mode', () => {
            const wrapper = shallow(<Tooltip.Tip mode="error">{'Тестовый текст'}</Tooltip.Tip>)
            expect(wrapper.hasClass(Tooltip.theme.error)).toBeTruthy()
            expect(wrapper.find(`.${Tooltip.theme.contents}`).text()).toBe('Тестовый текст')
        })
        it('renders info mode', () => {
            const wrapper = shallow(<Tooltip.Tip mode="info">{'Тестовый текст'}</Tooltip.Tip>)
            expect(wrapper.find(`.${Tooltip.theme.contents}`).text()).toBe('Тестовый текст')
        })
    })
})
