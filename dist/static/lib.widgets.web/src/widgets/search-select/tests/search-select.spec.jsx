import React from 'react'
import { shallow } from 'enzyme'
import { Field } from '@sbol/lib.app'

import WrappedSearchSelect, {
    LabeledHandledErrorCombobox,
    WebSearchSelect
} from '../search-select'

import { generateGetIcon } from '../utils'

describe('Widget <WebSearchSelect />', () => {
    const props = {
        fields: [
            {
                id: 'id',
                title: 'title',
                description: 'desc',
                value: 'foo',
                validators: jest.fn(),
                referenceId: 'refId'
            }
        ],
        references: {
            refId: {
                properties: {
                    url: '/url',
                    debounce: 500,
                    requestRepeatTimeout: 3000
                },
                items: [{
                    value: 'foo',
                    title: 'bar'
                }]
            }
        },
        properties: {
            filterKeys: 'titleRus;alias',
            itemImgType: 'base64',
            itemImgSrc: 'flag',
            itemDescriptionKey: 'titleRus'
        }
    }

    it('существует', () => {
        expect(LabeledHandledErrorCombobox).toBeDefined()
        expect(WebSearchSelect).toBeDefined()
        expect(WrappedSearchSelect).toBeDefined()
        expect(generateGetIcon).toBeDefined()
    })

    it('свойства правильно попадают в компонент', () => {
        const wrapper = shallow(<WrappedSearchSelect {...props} />)

        const fieldProps = wrapper.find(Field).props()

        expect(fieldProps.id).toBe('id')
        expect(fieldProps.name).toBe('id')
        expect(fieldProps.searchField.title).toBe('title')
        expect(fieldProps.searchField.description).toBe('desc')
        expect(fieldProps.searchField.validators).toBe(props.fields[0].validators)
        expect(fieldProps.contentProperties.url).toBe('/url')
        expect(fieldProps.contentProperties.debounce).toBe(500)
        expect(fieldProps.contentProperties.requestRepeatTimeout).toBe(3000)
        expect(fieldProps.options).toBe(props.references.refId.items)
        expect(fieldProps.optionProperties.filterKeys).toBe('titleRus;alias')
        expect(fieldProps.optionProperties.itemImgType).toBe('base64')
        expect(fieldProps.optionProperties.itemDescriptionKey).toBe('titleRus')
    })
})

describe('Widget <WebSearchSelect /> -> generateGetIcon', () => {
    it('свойства правильно попадают в компонент', () => {
        const getIcon = generateGetIcon('flag')
        expect(getIcon).toBe(generateGetIcon('flag'))
        expect(getIcon).not.toBe(generateGetIcon('icon'))
        expect(getIcon({ properties: { flag: 'hello' } })).toBe('hello')
    })
})
