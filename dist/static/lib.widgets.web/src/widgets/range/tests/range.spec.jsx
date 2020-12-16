import React from 'react'
import { shallow } from 'enzyme'
import { Field } from '@sbol/lib.app'

import Range from '../range'

describe('<Range />', () => {

    it('slider "min" and "max" props should be passed', () => {
        const widgetData = {
            type: 'WebRange',
            properties: {
                minValue: 1,
                maxValue: 10500
            },
            fields: [
                {
                    id: 'credit:sum',
                    value: '2000',
                    type: 'text',
                    title: 'Выбор суммы вклада'
                }
            ]
        }

        const wrapper = shallow(<Range {...widgetData} />)

        expect(wrapper.find(Field).props().min).toEqual(1)
        expect(wrapper.find(Field).props().max).toEqual(10500)
    })

    it('slider mode should be "input" while size is "large"', () => {
        const widgetData = {
            type: 'WebRange',
            properties: {
                size: 'large',
                minValue: 1,
                maxValue: 10500
            },
            fields: [
                { id: 'credit:sum' }
            ]
        }

        const wrapper = shallow(<Range {...widgetData} />)

        expect(wrapper.find(Field).props().mode).toBe('input')
    })

    it('slider mode should be "basic" while size is undefined', () => {
        const widgetData = {
            type: 'WebRange',
            fields: [
                { id: 'credit:sum' }
            ]
        }

        const wrapper = shallow(<Range {...widgetData} />)

        expect(wrapper.find(Field).props().mode).toBe('basic')
    })
})
