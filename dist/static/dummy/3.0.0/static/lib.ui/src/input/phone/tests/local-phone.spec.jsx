import React from 'react'
import { mount } from 'enzyme'
import _ from 'lodash'

import { LocalPhone } from '../local-phone'

const createEvent = (value, selectionStart) => ({ target: { value, selectionStart, setSelectionRange: _.noop } })

describe('<LocalPhone />', () => {

    it('onChange', () => {
        const changeHandler = jest.fn()
        const newValue = '3022767687'
        const wrapper = mount(<LocalPhone onChange={changeHandler} />)
        const input = wrapper.find('input').last()
        expect(changeHandler).not.toHaveBeenCalled()
        input.simulate('change', createEvent('3022767687'))
        expect(changeHandler).toHaveBeenCalled()
        expect(changeHandler.mock.calls[changeHandler.mock.calls.length - 1][0]).toEqual(newValue)
    })

    it('onFocus и onBlur', () => {
        const focusHandler = jest.fn()
        const blurHandler = jest.fn()
        const value = '3022767687'
        const wrapper = mount(<LocalPhone onFocus={focusHandler} onBlur={blurHandler} value={value} />)
        const input = wrapper.find('input').last()
        expect(focusHandler).not.toHaveBeenCalled()
        expect(blurHandler).not.toHaveBeenCalled()
        input.simulate('focus')
        expect(blurHandler).not.toHaveBeenCalled()
        expect(focusHandler).toHaveBeenCalled()
        input.simulate('blur')
        expect(blurHandler).toHaveBeenCalled()
        expect(blurHandler.mock.calls[blurHandler.mock.calls.length - 1][0]).toEqual(value)
    })

    it('normalize', () => {
        const dataProvider = [
            ['', 0, ''],
            ['4', 1, '4'],
            ['7', 1, '7'],
            ['7 (8202 12-22', 0, '202 12-22'],
            ['4+7 (723) 2', 1, '+7 (723) 24'],
            ['977', 3, '+7 (977'],
            ['9771234567', 10, '+7 (9771234567'],
            ['+7 (302) 276-76-87', 10, '+7 (302) 276-76-87']
        ]
        dataProvider.forEach((data) => {
            const event = createEvent(data[0], data[1])
            LocalPhone.normalize(event)
            expect(event).toEqual(createEvent(data[2], data[1]))
        })
    })
})
