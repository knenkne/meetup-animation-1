import React from 'react'
import _ from 'lodash'
import { addMonths, endOfMonth } from 'date-fns'
import { mount } from 'enzyme'

import { CalendarItem } from '../calendar-item'
import { fullISOFormat } from '../../../utils'

describe('<CalendarItem />', () => {

    it('Нажаты месяцы и года', () => {
        const year = 2017
        const props = {
            value: (new Date(year, 6, 15)).toISOString(),
            startingYear: (new Date(2017, 0)).toISOString()
        }
        const wrapper = mount(<CalendarItem {...props} />)
        const firstButton = wrapper.find('button').at(0)
        firstButton.simulate('mousedown')
        const monthButton = wrapper.find('button').at(2)
        const monthButtonText = monthButton.text()
        expect(monthButtonText).toBe('январь')
        wrapper.find('button').at(0).simulate('mousedown')
        const yearButton = wrapper.find('button').at(1)
        yearButton.simulate('mousedown')
        const updatedYearButton = wrapper.find('button').at(1)
        const updatedYearButtonText = updatedYearButton.find('span').at(0).text()
        expect(updatedYearButtonText).toBe(year.toString())
    })

    it('Выбран другой месяц', () => {
        const props = {
            value: (new Date(2017, 6, 15)).toISOString()
        }
        const wrapper = mount(<CalendarItem {...props} />)
        wrapper.find('button').at(0).simulate('mousedown')
        wrapper.find('button').at(2).simulate('mousedown')
        expect(wrapper.find('span').at(0).text()).toBe('январь')
    })

    it('Нажата дата', () => {
        const onChange = jest.fn()
        const props = {
            value: (new Date(2017, 6, 15)).toISOString(),
            onChange
        }
        const expected = fullISOFormat(new Date(2017, 6, 3, 11, 50))
        const wrapper = mount(<CalendarItem {...props} />)
        const quarter = wrapper.find('button').at(4)
        quarter.simulate('mousedown')
        expect(onChange).toHaveBeenCalled()
        expect(onChange.mock.calls[onChange.mock.calls.length - 1][0]).toBe(expected)
        expect(_.isString(onChange.mock.calls[onChange.mock.calls.length - 1][0])).toBeTruthy()
    })

    it('Нажат квартал', () => {
        const onChange = jest.fn()
        const props = {
            value: (new Date(2017, 6, 15)).toISOString(),
            onChange,
            mode: 'quarters'
        }
        const startDate = fullISOFormat(new Date(2017, 6, 1))
        const endDate = fullISOFormat(endOfMonth(addMonths(startDate, 3)))
        const expected = `${startDate}/${endDate}`
        const wrapper = mount(<CalendarItem {...props} />)
        const quarter = wrapper.find('button').at(4)
        quarter.simulate('click')
        expect(onChange).toHaveBeenCalled()
        expect(onChange.mock.calls[onChange.mock.calls.length - 1][0]).toBe(expected)
        expect(_.isString(onChange.mock.calls[onChange.mock.calls.length - 1][0])).toBeTruthy()
    })
})
