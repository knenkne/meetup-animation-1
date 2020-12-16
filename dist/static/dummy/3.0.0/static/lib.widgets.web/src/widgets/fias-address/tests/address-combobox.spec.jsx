import React from 'react'
import { shallow } from 'enzyme'
import { ComboboxWrapped } from '@sbol/lib.ui'

import { AddressCombobox } from '../address-combobox'

describe('Widget <WebFiasAddress /> -> ... -> <AddressCombobox />', () => {
    it('Определен', () => {
        expect(AddressCombobox).toBeDefined()
    })

    it('Является комбобоксом', () => {
        const wrapper = shallow(<AddressCombobox />)
        expect(wrapper.find(ComboboxWrapped).length).toBe(1)
    })
})
