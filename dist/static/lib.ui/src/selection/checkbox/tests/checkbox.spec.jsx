import React from 'react'
import { shallow } from 'enzyme'

import { Checkbox } from '../checkbox'

describe('<Selection.Checkbox />', () => {
    it('exports', () => {
        expect(Checkbox).toBeDefined()
    })
    it('renders html input element', () => {
        const defaultProps = {
            name: 'anyName',
            value: true,
            onChange: () => {}
        }
        const wrapper = shallow(<Checkbox {...defaultProps} />)
        expect(wrapper.find('input[type="checkbox"]').length).toEqual(1)
    })
    it('fires onChange handler', () => {
        const changeHandler = jest.fn()
        const defaultProps = {
            className: 'anything-you-want',
            name: 'my_checkbox',
            value: true,
            onChange: changeHandler
        }
        const wrapper = shallow(<Checkbox {...defaultProps} />)
        expect(changeHandler).not.toHaveBeenCalled()
        const input = wrapper.find('input')
        input.simulate('change')
        expect(changeHandler).toHaveBeenCalled()
    })
    it('does not fire onChange handler if checkbox is disabled', () => {
        const changeHandler = jest.fn()
        const defaultProps = {
            className: 'anything-you-want',
            name: 'my_checkbox',
            value: true,
            onChange: changeHandler,
            disabled: true
        }
        const wrapper = shallow(<Checkbox {...defaultProps} />)
        const input = wrapper.find('input')
        input.simulate('change', { preventDefault: () => {} })
        expect(changeHandler).not.toHaveBeenCalled()
    })
    it('renders data-unit attribute with "input:checkbox" value', () => {
        const defaultProps = {
            name: 'my_checkbox',
            value: false
        }

        const wrapper = shallow(<Checkbox {...defaultProps} />)
        const input = wrapper.find('input')
        const expected = 'input:checkbox'
        const actual = input.prop('data-unit')
        expect(actual).toEqual(expected)
        expect(wrapper.containsMatchingElement(<input data-unit="input:checkbox" />)).toBe(true)
    })
})
