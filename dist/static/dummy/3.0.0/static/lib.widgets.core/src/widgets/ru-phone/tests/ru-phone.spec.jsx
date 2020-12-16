import React from 'react'
import { shallow, mount } from 'enzyme'
import _ from 'lodash'
import { Field } from '@sbol/lib.app'

import CoreRuPhone from '../core-ru-phone'

describe('<CoreRuPhone />', () => {
    it('CoreRuPhone экспортируется', () => {
        expect(CoreRuPhone).toBeDefined()
    })

    it('Contains field with id = core:phone', () => {
        const props = {
            type: 'CoreRuPhone',
            title: 'Номер телефона',
            description: 'Номер телефона',
            fields: [
                {
                    id: 'core:phone',
                    type: 'text',
                    value: '',
                    readonly: false,
                    title: 'Номер телефона',
                    description: 'Номер телефона',
                    validators: []
                }
            ],
            properties: {},
            references: {}
        }

        const wrapper = shallow(<CoreRuPhone {...props} />)
        const fields = wrapper.find({ type: 'CoreRuPhone' }).first().prop('fields')

        expect(_.get(fields, '0.id')).toBe('core:phone')
    })
})
