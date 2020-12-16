import React from 'react'
import { shallow, mount } from 'enzyme'

import { Radio } from '../radio'

describe('<Selection.Radio />', () => {
    it('renders html input element', () => {
        const wrapper = shallow(
            <Radio
                name="radioInput"
                value="1"
            />
        )
        expect(wrapper.find('input[type="radio"]').length).toEqual(1)
    })
    it('renders data-unit attribute with "input:radio" value', () => {
        const wrapper = shallow(
            <Radio
                name="radioInput"
                value="1"
            />
        )
        expect(wrapper.find('input[data-unit="input:radio"]').length).toEqual(1)
    })
    it('renders label', () => {
        const label = 'awesomeLabel'
        const wrapper = mount(
            <Radio
                name="radioInput"
                value="1"
            >
                {label}
            </Radio>
        )
        expect(wrapper.text()).toEqual(label)
    })
    it('fires onChange handler', () => {
        const changeHandler = jest.fn()
        const wrapper = mount(
            <Radio
                name="radioInput"
                value="1"
                className="awesomeClass"
                onChange={changeHandler}
            />
        )
        expect(changeHandler).not.toHaveBeenCalled()
        wrapper.find('input').simulate('change')
        expect(changeHandler).toHaveBeenCalled()
        expect(changeHandler.mock.calls[changeHandler.mock.calls.length - 1][0].target.value).toBe('1')
        wrapper.find('input').simulate('change')
        expect(changeHandler.mock.calls[changeHandler.mock.calls.length - 1][0].target.value).toBe('1')
    })
    it('does not fire onChange handler on disabled input', () => {
        const changeHandler = jest.fn()
        const wrapper = shallow(
            <Radio
                name="radioInput"
                value="1"
                className="awesomeClass"
                onChange={changeHandler}
                disabled
            />
        )
        expect(changeHandler).not.toHaveBeenCalled()
        wrapper.find('input').simulate('change', { preventDefault: () => {} })
        expect(changeHandler).not.toHaveBeenCalled()
    })

    describe('<ReduxForm compatibility>', () => {
        it('инициализирует value prop через input', () => {
            const reduxFormInput = {
                value: '5'
            }

            const wrapper = shallow(
                <Radio
                    name="reduxInput"
                    {...reduxFormInput}
                />
            )
            expect(wrapper.find('input[value="5"]').length).toEqual(1)
        })
        it('fires onChange handler', () => {
            const changeHandler = jest.fn()

            const reduxFormInput = {
                value: '5',
                onChange: changeHandler
            }

            const wrapper = mount(
                <Radio
                    name="radioInput"
                    {...reduxFormInput}
                />
            )
            expect(changeHandler).not.toHaveBeenCalled()
            wrapper.find('input').simulate('change')
            expect(changeHandler).toHaveBeenCalled()
            expect(changeHandler.mock.calls[changeHandler.mock.calls.length - 1][0].target.value).toEqual('5')
        })
        it('does not fire onChange handler on disabled input', () => {
            const changeHandler = jest.fn()
            const reduxFormInput = {
                value: '5',
                onChange: changeHandler
            }

            const wrapper = mount(
                <Radio
                    name="radioInput"
                    {...reduxFormInput}
                    disabled
                />
            )
            expect(changeHandler).not.toHaveBeenCalled()
            wrapper.find('input').simulate('change')
            expect(changeHandler).not.toHaveBeenCalled()
        })

    })
})
