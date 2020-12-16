import React from 'react'
import { mount } from 'enzyme'
import _ from 'lodash'

import { fullISOFormat } from '../../../utils'
import { CalendarContext } from '../../../context'
import { Row } from '../row'
import { CALENDAR_MODES } from '../../../constants'
import { Years } from '..'

describe('<Years />', () => {
    it('simulate click', () => {
        const date = fullISOFormat(new Date(2017, 3, 13))
        const handleClick = jest.fn()
        const contextTemplate = {
            handleClick,
            activeDate: date,
            showDate: date,
            mode: CALENDAR_MODES.YEARS,
            currentDate: date,
            restriction: _.stubTrue
        }
        const wrapper = mount(
            <CalendarContext.Provider value={contextTemplate}>
                <Years />
            </CalendarContext.Provider>
        )

        const rows = wrapper.find(Row)
        const cells = rows.find('button')
        const yearButton = cells.at(0)
        yearButton.simulate('mousedown')
        expect(handleClick).toHaveBeenCalled()
    })

    it('handlePeriod', () => {
        const date = fullISOFormat(new Date(2017, 0, 13))
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
        const wrapperForHandlePeriod = mount(
            <CalendarContext.Provider value={contextTemplate}>
                <Years />
            </CalendarContext.Provider>
        )

        const buttons = wrapperForHandlePeriod.find('button')

        const firstYearButtonText = buttons.at(2).text()
        expect(firstYearButtonText).toBe('2010')

        const button = wrapperForHandlePeriod.find('div[role] button').at(0)
        button.simulate('mousedown')

        const buttonsUpdated = wrapperForHandlePeriod.find('button')
        const firstYearButtonTextUpdated = buttonsUpdated.at(2).text()

        expect(firstYearButtonTextUpdated).toBe('2000')
    })

    it('Смена отображаемого года', () => {
        const date = fullISOFormat(new Date(2017, 3, 13))
        const handleClick = jest.fn()
        const contextTemplate = {
            handleClick,
            activeDate: date,
            showDate: date,
            mode: CALENDAR_MODES.YEARS,
            currentDate: date,
            restriction: _.stubTrue
        }
        const wrapperForHandlePeriod = mount(
            <CalendarContext.Provider value={contextTemplate}>
                <Years />
            </CalendarContext.Provider>
        )

        const buttons = wrapperForHandlePeriod.find('button')
        const activeYearButton = buttons.find('[data-unit="calendar:years:year:active"]')
        const activeYearButtonText = activeYearButton.text()

        expect(activeYearButtonText).toBe('2017')

        buttons.at(3).simulate('mousedown')

        expect(handleClick).toHaveBeenCalled()
    })
})
