import React from 'react'
import { shallow } from 'enzyme'
import { ComboboxWrapped } from '@sbol/lib.ui'

import { AddressComboboxComponent } from '../address-combobox'

describe('Widget <WebAddress /> -> <AddressComboboxComponent />', () => {
    it('существует', () => {
        expect(AddressComboboxComponent).toBeDefined()
    })

    it('является полем ввода suggest', () => {
        const wrapper = shallow(<AddressComboboxComponent />)
        expect(wrapper.find(ComboboxWrapped).length).toBe(1)
    })

    it('имеет специальный handleChange для вычистки смежных и нижестоящих не readonly значений', () => {
        const props = {
            onChange: jest.fn(),
            changeOtherField: jest.fn(),
            onValueValidate: jest.fn(),
            formName: 'foo',
            fields: {
                country: { id: 'countryField' },
                region: { id: 'regionField' },
                district: { id: 'districtField', readonly: true },
                settlement: { id: 'settlementField' },
                street: { id: 'streetField' },
                building: { id: 'buildingField', readonly: true },
                quarters: { id: 'quartersField' }
            },
            values: {
                countryField: 'a',
                regionField: 'b',
                districtField: 'c',
                settlementField: 'd',
                streetField: 'e',
                buildingField: 'f',
                quartersField: 'g'
            },
            context: 'building'
        }

        const wrapper = shallow(<AddressComboboxComponent {...props} />)
        wrapper.find(ComboboxWrapped).first().props().onChange({ value: 'bar', query: 'bar' })

        expect(props.onChange).toHaveBeenCalledWith('bar')
        expect(props.changeOtherField.mock.calls.length).toBe(4)
        expect(props.changeOtherField.mock.calls[0]).toEqual(['foo', 'regionField', ''])
        expect(props.changeOtherField.mock.calls[1]).toEqual(['foo', 'settlementField', ''])
        expect(props.changeOtherField.mock.calls[2]).toEqual(['foo', 'streetField', ''])
        expect(props.changeOtherField.mock.calls[3]).toEqual(['foo', 'quartersField', ''])
    })
})
