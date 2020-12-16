import React from 'react'
import _ from 'lodash'
import { mount } from 'enzyme'

import { Email } from '..'

describe('Email component', () => {
    it('Export correct', () => {
        expect(Email).toBeDefined()
    })
    it('Correct props in render', () => {
        const props = {
            references: 'ref'
        }
        const wrapper = mount(<Email {...props} />)
        const input = wrapper.find('input').last()
        const attributes = _.map(input.props().attributes, 'name')

        expect(_.indexOf(attributes, 'references')).toBe(-1)

        expect(input.props().autoComplete).toBe('email')
    })
})
