import React from 'react'
import { mount } from 'enzyme'

import Component from '../component'

describe('Пример чуток посложнее', () => {

    beforeEach(() => {
        // Код тут выполнится перед каждым блоком test
    });

    afterEach(() => {
        // Кода тут выполнится после каждого блока test
    });

    // код так же можно выполнять до тест-кейсов, чтобы хранить сущности, которые нужны в нескольких сценариях

    const componentProps = {
        name: 'Pennywise',
        gender: 'it ⫷(°⧭°)⫸',
    }

    test('Component with props', () => {
        const component = mount(<Component {...componentProps} />)
        expect(component).toMatchSnapshot()
    })

    test('Component with additional props', () => {
        const component = mount(<Component {...componentProps} name="Clown" />)
        expect(component).toMatchSnapshot()
    })

})
