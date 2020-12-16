import React from 'react'
import { shallow, mount } from 'enzyme'

import { LocalPhone } from '..'


describe('<LocalPhone />', () => {
    it('Отображает поле ввода по умолчанию', () => {
        const props = {
            id: 'numeric:fieldset:localphone',
            value: '962•••••66',
            type: 'text',
            format: 'localPhone',
            title: 'LocalPhone',
            validators: []
        }

        const wrapper = shallow(<LocalPhone {...props} />)
        expect(wrapper.find({ id: props.id }).first().props().value).toBe(props.value)
    })

    it('Отображает форматированное маскированное значение в input', () => {
        const props = {
            id: 'numeric:fieldset:localphone',
            value: '962•••••66',
            type: 'text',
            format: 'localPhone',
            title: 'LocalPhone',
            validators: []
        }

        const expected = '+7 (962) •••-••-66'

        const wrapper = mount(<LocalPhone {...props} />)
        const input = wrapper.find('input').last()
        expect(input.props().value).toBe(expected)
    })
})
