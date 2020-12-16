import React from 'react'
import { mount } from 'enzyme'
import _ from 'lodash'

import { Grid as Years } from '../grid'
import { getItemsYears } from '../../../utils'
import { Row } from '../row'
import { Cell } from '../cell'
import { CALENDAR_MODES } from '../../../constants'
import { CalendarContext } from '../../../context'

describe('<Grid />', () => {

    it('Отображение проблемных годов 100 лет назад', () => {
        const rowAmount = 4
        const collAmount = 3
        const startingYear = 1911
        const date = new Date(startingYear, 0, 1).toString()
        const items = getItemsYears(date, date)
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
                <Years items={items} />
            </CalendarContext.Provider>
        )

        const rows = wrapper.find(Row)
        expect(rows.length).toEqual(rowAmount)
        for (let i = 0; i < rows.length; i += 1) {
            const cells = rows.at(i).find(Cell)
            expect(cells.length).toEqual(collAmount)
            for (let j = 0; j < cells.length; j += 1) {
                const expectedYear = String(startingYear + collAmount * i + j - 1)
                const actualYear = cells.at(j).text()
                expect(actualYear).toEqual(expectedYear)
            }
        }
    })
})
