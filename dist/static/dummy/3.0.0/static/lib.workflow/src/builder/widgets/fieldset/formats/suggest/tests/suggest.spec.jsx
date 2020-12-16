import React from 'react'
import { shallow, mount } from 'enzyme'
import moxios from 'moxios'

import { Suggest } from '..'

import { generateGetIcon } from '../utils'

describe('<Suggest />', () => {
    const initialProps = {
        value: '',
        referenceProperties: {
            filterKeys: 'titleRus;alias',
            itemImgType: 'base64',
            itemImgSrc: 'flag',
            itemDescriptionKey: 'titleRus',

            url: '/api/dictionaries/countries',
            debounce: 1,
            requestRepeatTimeout: 3000
        }
    }

    const filledProps = {
        value: 'ITALY:value',
        referenceProperties: {
            filterKeys: 'titleRus;alias',
            itemImgType: 'base64',
            itemImgSrc: 'flag',
            itemDescriptionKey: 'titleRus'
        },
        references: [{
            title: 'ИТАЛИЯ',
            value: 'ITALY:value',
            properties: {
                titleRus: 'Итальянская Республика',
                alias: 'ИТАЛИЯ'
            }
        }]
    }

    /* it('Отображает поле ввода с пустым значением', () => {
        const wrapper = shallow(<Suggest {...initialProps} />)
        const fieldProps = wrapper.find('Combobox').first().props()

        expect(fieldProps.context).toBe('/api/dictionaries/countries')
        expect(fieldProps.initialQuery).toBe('')
        expect(fieldProps.timeout).toBe(1)
        expect(fieldProps.value).toBe(void 0)
    })

    it('Отображает предзаполненное поле ввода', () => {
        const wrapper = mount(<Suggest {...filledProps} />)
        const inputProps = wrapper.find('input').first().props()
        console.log(inputProps)
        e
        xpect(inputProps.value).toBe('ИТАЛИЯ')
    }) */

    it('Рендерит комбобокс', () => {
        const wrapper = mount(<Suggest {...initialProps} />)
        const combobox = wrapper.find('Combobox')
        expect(combobox.length).toEqual(1)
    })
})

describe('<WebSearchSelect /> генерирует корректную иконку', () => {
    it('свойства правильно попадают в компонент', () => {
        const getIcon = generateGetIcon('flag')
        expect(getIcon).toBe(generateGetIcon('flag'))
        expect(getIcon).not.toBe(generateGetIcon('icon'))
        expect(getIcon({ properties: { flag: 'hello' } })).toBe('hello')
    })
})
