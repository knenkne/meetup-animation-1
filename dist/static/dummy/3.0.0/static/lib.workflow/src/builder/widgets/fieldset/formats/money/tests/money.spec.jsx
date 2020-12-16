import React from 'react'
import { Input } from '@sbol/lib.ui'
import { shallow } from 'enzyme'

import { Money } from '..'


const defaultProps = {
    fieldStyle: null,
    references: {}
}

describe('MoneyFormat component', () => {
    it('Export correct', () => {
        expect(Money).toBeDefined()
    })

    it('default fieldStyle is "integer"', () => {
        const wrapper = shallow(<Money {...defaultProps} />)
        expect(wrapper.find(Input.Numeric.Currency).length).toBe(1)
        expect(wrapper.find(Input.Numeric.Currency).prop('allowDecimal')).toBe(false)
    })

    it('fieldStyle "integer" is passed correct', () => {
        const props = {
            ...defaultProps,
            fieldStyle: 'integer'
        }

        const wrapper = shallow(<Money {...props} />)
        expect(wrapper.find(Input.Numeric.Currency).length).toBe(1)
        expect(wrapper.find(Input.Numeric.Currency).prop('allowDecimal')).toBe(false)
    })
})
