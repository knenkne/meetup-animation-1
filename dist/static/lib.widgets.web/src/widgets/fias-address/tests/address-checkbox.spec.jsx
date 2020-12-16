import React from 'react'
import { shallow } from 'enzyme'
import { Selection } from '@sbol/lib.ui'

import { AddressCheckbox } from '../address-checkbox'

describe('Widget <WebFiasAddress /> -> <AddressCheckbox />', () => {
    it('Определен', () => {
        expect(AddressCheckbox).toBeDefined()
    })

    it('Является чекбоском', () => {
        const wrapper = shallow(<AddressCheckbox />)
        expect(wrapper.find(Selection.Checkbox).length).toBe(1)
    })
})
