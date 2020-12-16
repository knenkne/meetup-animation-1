import React from 'react'
import { mount } from 'enzyme'
import _ from 'lodash'

import { Months } from '..'
import { CALENDAR_MODES } from '../../../constants'
import { fullISOFormat } from '../../../utils'
import { CalendarContext } from '../../../context'

const MONTHS = [
    'январь',
    'февраль',
    'март',
    'апрель',
    'май',
    'июнь',
    'июль',
    'август',
    'сенябрь',
    'октябрь',
    'ноябрь',
    'декабрь'
]

describe('<Months />', () => {
    const date = fullISOFormat(new Date(2017, 3, 13))
    const handleClick = jest.fn()
    const handleSubmit = jest.fn()
    const contextTemplate = {
        handleClick,
        handleSubmit,
        activeDate: date,
        showDate: date,
        mode: CALENDAR_MODES.YEARS,
        currentDate: new Date(),
        restriction: _.stubTrue
    }

    const wrapper = mount(
        <CalendarContext.Provider value={contextTemplate}>
            <Months />
        </CalendarContext.Provider>
    )

    it('Первый месяц года - январь отренедерился верно', () => {
        expect(wrapper.find('button').at(0).text()).toBe(MONTHS[0])
    })

    it('click', () => {
        const button = wrapper.find('button').at(0)
        button.simulate('mousedown')
        expect(handleClick).toHaveBeenCalled()
    })

})
