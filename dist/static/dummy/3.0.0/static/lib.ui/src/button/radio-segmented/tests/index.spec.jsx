import React from 'react'
import { shallow, mount } from 'enzyme'

import { RadioSegmented } from '..'

xdescribe('<Button.RadioSegmented />', () => {
    it('renders last by mode', () => {
        const wrapper = shallow(
            <RadioSegmented name="qwerty" value="1" a11y={{}} mode="last">
                <span />
            </RadioSegmented>
        )
        expect(wrapper.find(`.${RadioSegmented.theme.last}`).length).toBe(1)
    })

    it('a11y', () => {
        const wrapper = shallow(
            <RadioSegmented name="qwerty" value="1" a11y={{ title: 'title' }}>
                <span />
            </RadioSegmented>
        )
        expect(wrapper.find('label').first().props().title).toBe('title')
    })
    it('renders with children', () => {
        const wrapper = shallow(
            <RadioSegmented name="qwerty" value="1" a11y={{}}>
                <span>{'foo bar baz'}</span>
            </RadioSegmented>
        )
        expect(wrapper.contains(<span>{'foo bar baz'}</span>)).toBe(true)
    })
    it('renders data-unit attribute with "button:radio:segmented" value', () => {
        const wrapper = shallow(
            <RadioSegmented name="qwerty" value="1" a11y={{}}>
                <span />
            </RadioSegmented>
        )
        expect(wrapper.find('input[data-unit="button:radio:segmented"]').length).toEqual(1)
    })
    it('onChange', () => {
        const onChange = jest.fn()

        const wrapper = mount(
            <RadioSegmented name="qwerty" value="1" a11y={{}} onChange={onChange}>
                <span />
            </RadioSegmented>
        )
        expect(onChange).not.toHaveBeenCalled()
        wrapper.find('input').simulate('change')
        expect(onChange).toHaveBeenCalled()
        expect(onChange.mock.calls[onChange.mock.calls.length - 1][0].target.value).toBe('1')
        wrapper.find('input').simulate('change')
        expect(onChange.mock.calls[onChange.mock.calls.length - 1][0].target.value).toBe('1')
    })
    it('does not fire onChange handler on disabled input', () => {
        const onChange = jest.fn()
        const preventDefault = jest.fn()
        const wrapper = shallow(
            <RadioSegmented name="qwerty" value="1" a11y={{}} onChange={onChange} disabled>
                <span />
            </RadioSegmented>
        )
        expect(onChange).not.toHaveBeenCalled()
        wrapper.find('input').simulate('change', { preventDefault })
        expect(onChange).not.toHaveBeenCalled()
        expect(preventDefault).toHaveBeenCalled()
    })
})
