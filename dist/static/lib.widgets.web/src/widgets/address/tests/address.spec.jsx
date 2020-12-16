import React from 'react'
import { shallow } from 'enzyme'

import {
    WebAddress,
    getIcon,
} from '../address'
import AddressRow from '../address-row'

describe('Widget <WebAddress />', () => {
    it('существует', () => {
        expect(WebAddress).toBeDefined()
        expect(getIcon).toBeDefined()
    })

    it('getIcon сгенерирует имя иконки', () => {
        expect(getIcon({ value: '123' })).toBe('icon:core/countries/123')
        expect(getIcon()).toBe('')
    })

    const props = {
        fields: [
            { title: 'foo', id: 'country', referenceId: 'countries' },
            { title: 'foo', id: 'region' },
            { title: 'foo', id: 'district' },
            { title: 'foo', id: 'settlement' },
            { title: 'foo', id: 'street' },
            { id: 'streetCheckbox', title: '1' },
            { title: 'foo', id: 'building' },
            { id: 'buildingCheckbox', title: '2' },
            { title: 'foo', id: 'quarters' },
            { id: 'quartersCheckbox', title: '3' }
        ],
        properties: {
            suggest: ['only', 'only', 'only', 'only', 'on', 'on', 'off']
        },
        references: {
            countries: {
                items: [{
                    title: 'Российская Федерация',
                    value: 'RUS',
                    properties: {
                        aliases: ['Россия', 'Россиюшка', 'Родная Держава', 'Великая Держава'],
                        suggestUrl: '/api/dictionaries/address'
                    }
                }]
            },
        },
        values: {
            country: '',
            region: '',
            district: '',
            settlement: '',
            street: '',
            streetCheckbox: false,
            building: '',
            buildingCheckbox: false,
            quarters: '',
            quartersCheckbox: false
        },
        pid: '123'
    }

    it('Если поля readonly - не рендерит AddressRow', () => {
        const readonlyProps = {
            ...props,
            fields: props.fields.map(field => ({ ...field, readonly: true }))
        }

        const wrapper = shallow(<WebAddress {...readonlyProps} />)

        expect(wrapper.find(AddressRow).length).toBe(0)
    })

    it('рендерит все сущности и добавляет иконки', () => {
        const wrapper = shallow(<WebAddress {...props} />)

        expect(wrapper.find(AddressRow).length).toBe(7)
        expect(wrapper.find('[type="checkbox"]').length).toBe(3)
        expect(wrapper.find('[type="checkbox"]').at(0).contains('1')).toBe(true)
        expect(wrapper.find('[type="checkbox"]').at(1).contains('2')).toBe(true)
        expect(wrapper.find('[type="checkbox"]').at(2).contains('3')).toBe(true)
    })

    it('не рендерит чекбоксы, если они readonly, но рендерит AddressRow', () => {
        const patchedProps = {
            ...props,
            fields: props.fields.map(
                field => (
                    field.id.includes('Checkbox') ? { ...field, readonly: true } : field
                )
            )
        }

        const wrapper = shallow(<WebAddress {...patchedProps} />)

        expect(wrapper.find(AddressRow).length).toBe(7)
        expect(wrapper.find('[type="checkbox"]').length).toBe(0)
    })

    it('два последних ряда формата sm', () => {
        const wrapper = shallow(<WebAddress {...props} />)

        expect(wrapper.find(AddressRow).length).toBe(7)
        expect(wrapper.find('[size="sm"]').length).toBe(2)
        expect(wrapper.find(AddressRow).at(5).props().size).toBe('sm')
        expect(wrapper.find(AddressRow).at(6).props().size).toBe('sm')
    })

    it('properties.suggest раздаются корректно', () => {
        const wrapper = shallow(<WebAddress {...props} />)

        expect(wrapper.find('[suggestMode="only"]').length).toBe(4)
        expect(wrapper.find('[suggestMode="on"]').length).toBe(2)
        expect(wrapper.find('[suggestMode="off"]').length).toBe(1)
    })

    it('если нет properties.suggest, то автоматом раздается on', () => {
        const patchedProps = {
            ...props,
            properties: {}
        }

        const wrapper = shallow(<WebAddress {...patchedProps} />)

        expect(wrapper.find('[suggestMode="on"]').length).toBe(7)
    })
})
