import React from 'react'
import { mount } from 'enzyme'

import { FormattedText } from '..'

describe('FormattedFormat component', () => {
    it('Export correct', () => {
        expect(FormattedText).toBeDefined()
    })

    const CRAZY_MASK = '+7([000]) [SSs]-[099]-<ВEH> \[ [ЫЫ] \] \<<А-Я>\<' // eslint-disable-line no-useless-escape, comment: deprecation warning

    it('handles onChange', () => {
        const changeHandler = jest.fn()
        const blurHandler = jest.fn()
        const props = {
            value: '123',
            formatConfig: CRAZY_MASK,
            onChange: changeHandler,
            onBlur: blurHandler

        }
        const wrapper = mount(<FormattedText {...props} />)
        const input = wrapper.find('input').last()

        expect(changeHandler).not.toHaveBeenCalled()

        input.simulate('change', { target: { value: '+7(1' } })
        expect(changeHandler.mock.calls[0][0]).toBe('1')

        expect(blurHandler).not.toHaveBeenCalled()
        input.simulate('blur', { target: { value: '' } })
        expect(blurHandler.mock.calls[0][0]).toBe('')
    })
})
