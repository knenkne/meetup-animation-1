import React from 'react'
import { shallow, mount } from 'enzyme'
import { Field } from '@sbol/lib.app'

import { AddressField } from '../address-field'

describe('Widget <WebFiasAddress /> -> <AddressField />', () => {
    it('Определен', () => {
        expect(AddressField).toBeDefined()
    })

    it('Рендерит Field', () => {
        const wrapper = shallow(<AddressField />)

        expect(wrapper.find(Field).length).toBe(1)
    })

    it('Если halfWidth – true, то Field обернут в div', () => {
        const props = {
            halfWidth: true
        }

        const wrapper = shallow(<AddressField {...props} />)

        expect(wrapper.find('div').length).toBe(1)
    })

    it('Если halfWidth – false, то обертки нет', () => {
        const props = {
            halfWidth: false
        }

        const wrapper = shallow(<AddressField {...props} />)

        expect(wrapper.find('div').length).toBe(0)
    })

    it('Рендерит children', () => {
        const wrapper = shallow(<AddressField><span>Hello world</span></AddressField>)

        expect(wrapper.contains(<span>Hello world</span>)).toBe(true)
    })

    it('Если suggestMode равен "only", то передаем параметры запрос и добавляем доп. валидатор', () => {
        const props = {
            requestParams: {
                url: '/api/dictionaries/address',
                kind: 'STREET',
                source: 'ФИАС',
                count: 10,
                parentId: 'some-id'
            },
            suggestMode: 'only',
            validators: []
        }

        /*
         * TODO: Replace mount() to shallow() once enzyme can support useEffect along with shallow()
         * Enzyme's github issue: https://github.com/enzymejs/enzyme/issues/2086
         */
        const wrapper = mount(<AddressField {...props} />)

        expect(wrapper.find(Field).props().requestParams).toBe(props.requestParams)
        expect(wrapper.find(Field).props().validate.length).toBe(1)
    })

    it('Если suggestMode равен "off", то не передаем параметры запрос и не добавляем валидатор', () => {
        const props = {
            requestParams: {
                url: '/api/dictionaries/address',
                kind: 'STREET',
                source: 'ФИАС',
                count: 10,
                parentId: 'some-id'
            },
            suggestMode: 'off',
            validators: []
        }

        /*
         * TODO: Replace mount() to shallow() once enzyme can support useEffect along with shallow()
         * Enzyme's github issue: https://github.com/enzymejs/enzyme/issues/2086
         */
        const wrapper = mount(<AddressField {...props} />)

        expect(wrapper.find(Field).props().requestParams).toStrictEqual({ kind: props.requestParams.kind })
        expect(wrapper.find(Field).props().validate.length).toBe(0)
    })
})
