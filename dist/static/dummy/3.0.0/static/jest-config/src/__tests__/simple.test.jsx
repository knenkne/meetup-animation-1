import React from 'react'
import { mount } from 'enzyme'

import Component from '../component'

const sum = (a, b) => a + b

describe('Простые тесты', () => {

    test('Тест на возврщаемое значение', () => {
        expect(sum(1, 2)).toBe(3)
    })

    test('Тест на соответствие снапшоту', () => {
        const component = mount(<Component />)
        expect(component).toMatchSnapshot()
    })

})
