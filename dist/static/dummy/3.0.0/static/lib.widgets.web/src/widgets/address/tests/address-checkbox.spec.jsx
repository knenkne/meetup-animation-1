import React from 'react'
import { shallow } from 'enzyme'
import { Selection } from '@sbol/lib.ui'

import { AddressCheckboxComponent } from '../address-checkbox'

describe('Widget <WebAddress /> -> <AddressCheckbox />', () => {
    it('существует', () => {
        expect(AddressCheckboxComponent).toBeDefined()
    })

    it('является чекбоском', () => {
        const wrapper = shallow(<AddressCheckboxComponent />)
        expect(wrapper.find(Selection.Checkbox).length).toBe(1)
    })

    it('имеет специальный handleChange для вычистки смежных и нижестоящих не readonly значений', () => {
        const props = {
            id: 'streetCheckbox',
            onChange: jest.fn(),
            changeOtherField: jest.fn(),
            formName: 'foo',
            fields: {
                street: { id: 'streetField' },
                building: { id: 'buildingField', readonly: true },
                buildingCheckbox: { id: 'buildingCheckbox' },
                quarters: { id: 'quartersField' }
            },
            values: {
                streetField: 'a',
                buildingField: 'b',
                quartersField: 'c'
            },
            context: 'building'
        }

        const wrapper = shallow(<AddressCheckboxComponent {...props} />)
        wrapper.find(Selection.Checkbox).first().props().onChange(true)

        expect(props.onChange).toHaveBeenCalledWith(true)
        expect(props.changeOtherField.mock.calls.length).toBe(1)
        expect(props.changeOtherField).toHaveBeenCalledWith('foo', 'quartersField', '')
    })
})
