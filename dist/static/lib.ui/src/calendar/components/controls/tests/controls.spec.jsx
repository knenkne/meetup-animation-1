import React from 'react'
import { mount } from 'enzyme'
import _ from 'lodash'

import { Controls, Control } from '..'
import { CALENDAR_MODES } from '../../../constants'
import { CalendarContext } from '../../../context'


describe('<Controls />', () => {

    it('simulate Year And Month clicks', () => {
        const date = (new Date(2010, 0, 24)).toISOString()
        const setMode = jest.fn()
        const contextTemplate = {
            setMode,
            activeDate: date,
            showDate: date,
            mode: CALENDAR_MODES.MONTHS,
            currentDate: new Date(),
            restriction: _.stubTrue
        }
        const wrapper = mount(
            <CalendarContext.Provider value={contextTemplate}>
                <Controls />
            </CalendarContext.Provider>
        )

        const controls = wrapper.find(Control)

        controls.at(0).find('button').simulate('mousedown')
        expect(setMode).toHaveBeenCalledWith(CALENDAR_MODES.MONTHS)

        controls.at(1).find('button').simulate('mousedown')
        expect(setMode).toHaveBeenCalledWith(CALENDAR_MODES.YEARS)
    })
})
