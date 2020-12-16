import React from 'react'
import { shallow, mount } from 'enzyme'
import { Field } from '@sbol/lib.app'
import { Input } from '@sbol/lib.ui'
import i18next from 'i18next'

import { CoreAccount, WrappedMasked } from '../account'

describe('<CoreAccount />', () => {

    it('component available', () => {
        expect(CoreAccount).toBeDefined()
    })

    const accountprops = {
        type: "CoreAccount",
        title: "Счет и БИК",
        description: "Все правильные поля",
        properties: {},
        fields: {
            bik: {
                id: "bik",
                type: "text",
                readonly: false,
                title: "Бик",
                value: "044525974",
                validators: []
            },
            account: {
                id: "account",
                type: "text",
                readonly: false,
                title: "Номер счета",
                value: "40817810000003419217",
                validators: []
            }
        }
    }

    it('renders 2 fields', () => {
        const wrapper = shallow(<CoreAccount {...accountprops} />)
        expect(wrapper.find(Field).length).toBe(2)
    })

    it('validatebik, validateaccount', () => {
        const wrapper = shallow(<CoreAccount {...accountprops} />)
        const instance = wrapper.instance()

        expect(instance.validateBik('123')).toBe(i18next.t('lib.widgets.core:bik.error.length'))
        expect(instance.validateBik('034525974')).toBe(i18next.t('lib.widgets.core:bik.error.checksum'))
        expect(instance.validateBik('044525974')).toBe(null)

        expect(instance.validateAccount('4081781000000341921', { bik: '044525974'})).toBe(i18next.t('lib.widgets.core:account.error.length'))
        expect(instance.validateAccount('40817810000003419216', { bik: '044525974'})).toBe(i18next.t('lib.widgets.core:account.error.checksum'))
        expect(instance.validateAccount('40817810000003419217', { bik: '044525974'})).toBe(null)
    })

    it('wrappedmasked returns field', () => {
        const props = {
            name: "right:bik",
            readOnly: false,
            title: "Бик",
            value: "044525974",
            mask: []
        }

        const wrapper = mount(<WrappedMasked {...props} />)

        expect(wrapper.find('input').length).toBe(1)
    })

    it('wrappedmasked returns readonly', () => {
        const props = {
            name: "right:bik",
            readOnly: true,
            title: "Бик",
            value: "044525974",
            mask: []
        }

        const wrapper = mount(<WrappedMasked {...props} />)

        expect(wrapper.find('input').length).toBe(0)
    })
})
